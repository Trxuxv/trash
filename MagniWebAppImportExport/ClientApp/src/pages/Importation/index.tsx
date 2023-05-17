import { NovaColuna, NovaColunaModel } from '../../models/Importation/NovaColunaModel';
import { PodeExcluirColuna } from '../../models/Importation/PodeExcluirColuna';
import { AlertaModel } from '../../models/Importation/AlertaModel';
import FunctionsUtil from './../../utils/functions/FunctionsUtil';
import { ListaModeloCard } from './components/ListasModeloCard';
import ColunaModel from '../../models/Importation/ColunaModel';
import ImportationService from './service/ImportationService';
import BotoesFinalizar from './components/BotoesFinalizar';
import { Select, Option } from "@material-tailwind/react";
import SnackbarComponent from '../../components/SnackBar';
import ValidateUtil from '../../utils/functions/validate';
import AdicionarLinha from './components/AdicionarLinha';
import DialogComponent from '../../components/Dialog';
import ImportarCard from './components/ImportarCard';
import BotoesEdicao from './components/BotoesEdicao';
import LinhasErro from './components/LinhasErros';
import { Input } from "@material-tailwind/react";
import Loading from '../../components/Loading';
import Modelo from './components/ModeloCard';
import Options from '../../utils/formats';
import InputMask from 'react-input-mask';
import React, { useState } from 'react';
import StyleClass from './styleClass';
import { read, utils } from 'xlsx';

export default function Importation() {

    // Variables 
    const [podeExcluirColuna, setPodeExcluirColuna] = useState<PodeExcluirColuna>({ colunaSelecionada: "", podeExcluir: false });

    const [alertaMensagem, setAlertaMensagem] = useState<AlertaModel>({ mensagem: "", abrir: false, sucesso: false });

    const [formatoNovaColuna, setFormatoNovaColuna] = useState<string>("texto comum");

    const [nomeNovaColuna, setNomeNovaColuna] = useState<string>('unname column');

    const [podeAdicionarColuna, setPodeAdicionarColuna] = useState<boolean>(false);

    const [correcaoLinhaValida, setCorrecaoLinhaValida] = useState<boolean>(false);

    const [podeAdicionarLinha, setPodeAdicionarLinha] = useState<boolean>(false);

    const [edicaoLinhaValida, setEdicaoLinhaValida] = useState<boolean>(false);

    const [novaColunaValida, setNovaColunaValida] = useState<boolean>(false);

    const [podeEditarColuna, setPodeEditarColuna] = useState<boolean>(false);

    const [podeEditarLinha, setPodeEditarLinha] = useState<boolean>(false);

    const [novaLinhaValida, setNovaLinhaValida] = useState<boolean>(false);

    const [qtdeLinhasSucesso, setQtdeLinhasSucesso] = useState<number>(0);

    const [qtdeLinhasErro, setQtdeLinhasErro] = useState<number>(0);

    const [novaColuna, setNovaColuna] = useState<NovaColuna[]>([]);

    const [linhasSucesso, setLinhasSucesso] = useState<any[]>([]);

    const [arrayEditanto, setArrayEditando] = useState<any[]>([]);

    const [nomeArquivo, setNomeArquivo] = useState<string>('');

    const [tamanhoArquivo, settamanhoArquivo] = useState<string>('');

    const [colunas, setColunas] = useState<ColunaModel[]>([]);

    const [linhasErro, setLinhasErro] = useState<any[]>([]);

    const [isLoading, setisLoading] = useState(false);

    const [movies, setMovies] = useState<any[]>([]);

    const [title, setTitle] = useState<any[]>([]);

    const [modelo, setModelo] = useState(false);

    const [newObj, setnewObj] = useState({});

    //METHODS
    //------------Confirmar-----------
    const ConfirmarEditarLinhasInvalidas = () => {
        setisLoading(true);
        setLinhasErro([]);
        setQtdeLinhasErro(0);
        var newA = linhasSucesso.concat(linhasErro)
        setLinhasSucesso(newA);
        setArrayEditando(newA);

        setTimeout(() => {
            setisLoading(false);
            setAlertaMensagem({ abrir: true, mensagem: "Linhas corrigidas com sucesso!", sucesso: true });
        }, 400)
    }

    const ConfirmarExcluirColuna = (col: string) => {
        setisLoading(true);
        var linhas = [];

        for (var i = 0; i < linhasSucesso.length; i++) {
            var element = linhasSucesso[i];

            delete element[col];
            linhas.push(element);
        }

        var data = {
            linhas: linhas,
            colunaNome: col
        }

        ImportationService.excluirColuna(data).then(x => {
            var newCols = colunas.filter(x => x.nome !== col);
            setColunas(newCols);
            setLinhasSucesso(x.data);
            setArrayEditando(x.data);
        });

        setTimeout(() => {
            setAlertaMensagem({ abrir: true, mensagem: "Coluna excluida com sucesso!", sucesso: true });
            setisLoading(false);
        }, 200)
    }

    const ConfirmarExcluirLinhasInvalidas = () => {
        setisLoading(true);
        setLinhasErro([]);
        setQtdeLinhasErro(0);
        setTimeout(() => {
            setisLoading(false);
            setAlertaMensagem({ abrir: true, mensagem: "Linhas excluídas com sucesso!", sucesso: true });
        }, 600)
    }

    const ConfirmarAdicionarColuna = () => {
        setisLoading(true);

        var model: NovaColunaModel = {
            linhas: linhasSucesso,
            novaColuna: {
                nome: nomeNovaColuna,
                formato: formatoNovaColuna,
                coluna: novaColuna,
            }
        };

        ImportationService.novaColuna(model).then(x => {
            var res = [];

            for (var i = 0; i < linhasSucesso.length; i++) {
                var nomeColuna = x.data.nomeColuna;
                var valor = x.data.data[i];
                var linha = linhasSucesso[i];

                linha[nomeColuna] = valor;

                res.push(linha);
            };

            var newTitle = [...title, nomeColuna];
            setTitle(newTitle);

            var formatoColuna = {
                nome: nomeColuna,
                formato: x.data.formato
            };
            var newColuna = [...colunas, formatoColuna];

            setColunas(newColuna);

            setLinhasSucesso(res);
            setArrayEditando(res);
            setPodeAdicionarColuna(false);
        }).then(() => {
            CancelarAdicionarLinha();
            setisLoading(false)
        })
    };

    const ConfirmarAdicionarLinha = () => {
        setisLoading(true);

        var model = {
            linhas: linhasSucesso,
            novaLinha: newObj
        };

        ImportationService.create(model).then(x => {
            setLinhasSucesso(x.data);
        }).then(() => {
            CancelarAdicionarLinha();
        })

        setTimeout(() => {
            setAlertaMensagem({ abrir: true, mensagem: "Linha adicionada com sucesso!", sucesso: true });
            setisLoading(false);
        }, 200)

    };

    const ConfirmarEditarLinha = () => {
        setisLoading(true);
        setPodeEditarLinha(false);
        setPodeEditarColuna(false);

        setLinhasSucesso(arrayEditanto);

        setTimeout(() => {
            setisLoading(false);
            setAlertaMensagem({ abrir: true, mensagem: "Linhas editadas com sucesso!", sucesso: true });
        }, 200)
    }

    //------------Cancelar-----------
    const CancelarAdicionarLinha = () => {
        setPodeAdicionarLinha(false);
        setnewObj({});
    }

    const CancelarEditarLinha = () => {
        setLinhasSucesso(linhasSucesso);
        setPodeEditarLinha(false);
        setPodeEditarColuna(false);
        setPodeAdicionarColuna(false);
        setPodeAdicionarLinha(false);
        setNomeNovaColuna("");
    }

    //Handlers
    const handleEditarNomeColuna = (valor: string, index: number) => {
        var newArr = [...colunas];

        newArr[index].nome = valor;
        setColunas(newArr);
    }

    const handleEditarFormatoColuna = (valor: any, index: any) => {
        var newArr = [...colunas];

        newArr[index].formato = valor;
        setColunas(newArr);
    }

    const handleAddColuna = ($event: any, index: number) => {

        var newA = novaColuna;

        var novaCol: NovaColuna = {
            key: index,
            valor: $event,
            formato: formatoNovaColuna

        };

        if (novaColuna.some(x => x.key === index)) {
            novaColuna[index].valor = $event;
        } else {
            newA = [...novaColuna, novaCol];
        }

        const noEmptyStrings = novaColuna.filter((str) => str.valor !== '');

        if (noEmptyStrings.length === linhasSucesso.length) {
            setNovaColunaValida(true);
        } else {
            setNovaColunaValida(false);
        }

        setNovaColuna(newA);
    };

    const handleAddLinha = ($event: any, key: string) => {
        var a = new Object();
        const field = key;
        a = newObj;

        a[field as keyof typeof a] = $event;

        if (newObj[field as keyof typeof newObj] !== key) {
            a[field as keyof typeof a] = $event;
        }

        const noEmptyStrings = Object.values(a).filter((str) => str !== '');

        if (noEmptyStrings.length === colunas.length) {
            setNovaLinhaValida(true);
        } else {
            setNovaLinhaValida(false);
        }

        setnewObj(a);
    };

    const handleSetFormatoColuna = (option: any) => {
        setFormatoNovaColuna(option);
    }

    const handleCorrigirLinha = ($event: any) => {
        var identificacao = $event.currentTarget.id;
        var campo = identificacao.split(";");
        var valor = $event.currentTarget.value;

        var l = {
            key: campo[0],
            index: campo[1]
        }

        linhasErro[l.index][l.key] = valor;

        var tes = linhasErro.filter(x => x[l.key].trim() !== '');

        if (tes.length !== linhasErro.length) {
            setCorrecaoLinhaValida(false);
        }

        if (tes.length === linhasErro.length) {
            setCorrecaoLinhaValida(true);
        }
    };

    const handleEditarLinha = ($event: any) => {
        var linhas = arrayEditanto;

        var identificacao = $event.currentTarget.id;
        var campo = identificacao.split(";");
        var valor = $event.currentTarget.value;

        var linhaEditando = {
            key: campo[0],
            index: campo[1]
        }

        linhas[linhaEditando.index][linhaEditando.key] = valor;

        const noEmptyStrings = Object.values(linhaEditando).filter((str) => str !== '');

        if (noEmptyStrings.length === title.length) {
            setEdicaoLinhaValida(true);
        } else {
            setEdicaoLinhaValida(false);
        }

        setArrayEditando(linhas);

        console.log("eDITANDO: ", linhas)
        console.log("sucesso: ", linhasSucesso)
    };

    const handleImport = ($event: any) => {
        setisLoading(true);

        const files = $event.target.files;

        if (files.length) {
            settamanhoArquivo(files[0].size + " KB");
            const file = files[0];

            setNomeArquivo(file.name.toString());

            const reader = new FileReader();
            reader.onload = (event: any) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows1 = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    ImportationService.get("").then(x => {
                        const rows = x.data.data;
                        const colunasD = x.data.colunas;

                        setColunas(colunasD)

                        var alltitles: string[] = [];

                        var linhasDeSucesso: any[] = [];

                        var linhasDeErro: any[] = [];

                        var titles: string[] = [];

                        var erros = [];

                        var sucesso = [];

                        //Instancia das colunas
                        try {
                            for (var i = 0; i < rows.length; i++) {
                                var element = rows[i];

                                var cols = Object.keys(element ? element : {}) as string[];

                                cols.forEach(x => {
                                    alltitles.push(x);
                                })
                            }

                            titles = alltitles.filter((item, index) => alltitles.indexOf(item) === index);

                            console.log(titles, colunasD)

                        } catch (error) {
                            alert("This document doesn't have columns")
                        }

                        for (var i2 = 0; i2 < rows.length; i2++) {
                            var element2 = rows[i2];

                            var columns = Object.values(element2 ? element2 : {});

                            if (columns.length !== titles.length) {
                                erros.push(columns[0]);
                            } else {
                                sucesso.push(columns[0])
                            }
                        }

                        setMovies(rows);

                        linhasDeSucesso = rows.filter((y: any) => FunctionsUtil.FormattedArray(y).length === titles.length && Object.keys(y ? y : {} as string[]).length === titles.length);

                        linhasDeErro = rows.filter((val: any) => !linhasDeSucesso.includes(val));

                        setArrayEditando(linhasDeSucesso);
                        setLinhasSucesso(linhasDeSucesso);

                        setLinhasErro(linhasDeErro);

                        setQtdeLinhasErro(linhasDeErro.length);

                        setQtdeLinhasSucesso(linhasDeSucesso.length);

                        setTitle(titles)
                    }).then(() => {
                        setisLoading(false);
                    });
                }
            }
            reader.readAsArrayBuffer(file);
        }

        setisLoading(false);
    }

    const handleProcessarEnviar = () => {
        setTimeout(() => {
            setisLoading(true);
        }, 300)
        setisLoading(false);
    }

    const handleAbrirModelo = () => {
        setModelo(!modelo);
    }

    const ValidateValues = (valor: string, formato: string) => {

        var str = valor;

        //switch (formato) {
        //    case "dd/mm/yyyy":
        //        str = "01/01/2023";
        //        break;
        //    case "texto comum":
        //        str = "Texto comum";
        //        break;
        //    case "texto comum":
        //        str = "Texto comum";
        //        break;
        //    default:
        //}

        return str;
    }

    return (
        <div className={StyleClass.SelectStyle("main")}>
            <ListaModeloCard />
            <Modelo setAbrirModelo={handleAbrirModelo} modelo={modelo} />
            <ImportarCard tamanhoArquivo={tamanhoArquivo} nomeArquivo={nomeArquivo} importar={handleImport} />

            {colunas.length > 0 && (
                <div className={StyleClass.SelectStyle("container-one")}>
                    <div className={StyleClass.SelectStyle("container-importar")}>

                        Importar/Anexar listas de movimentos bancarios (CSV ou Excel)

                        <div className={StyleClass.SelectStyle("container-pai-info-importacao")}>
                            <div className={StyleClass.SelectStyle("container-info-importacao")}>
                                <span className={StyleClass.SelectStyle("span-linhas-colunas-processadas")}>
                                    <b className={StyleClass.SelectStyle("titulo-info")}>Linhas processadas: </b>
                                    {movies.length}
                                </span>
                                <span className={StyleClass.SelectStyle("span-linhas-colunas-processadas")}>
                                    <b className={StyleClass.SelectStyle("titulo-info")}>Colunas processadas: </b>
                                    {colunas.length}
                                </span>

                                {qtdeLinhasErro > 0 && (
                                    <span className={StyleClass.SelectStyle("span-linhas-problema")}><b className={StyleClass.SelectStyle("titulo-info")}>Linhas com problemas: </b>{qtdeLinhasErro}</span>
                                )}

                                <span className={StyleClass.SelectStyle("span-linhas-sucesso")}><b className={StyleClass.SelectStyle("titulo-info")}>Linhas com sucesso: </b>{qtdeLinhasSucesso}</span>
                            </div>
                        </div>
                    </div>

                    {qtdeLinhasErro > 0 && (
                        <span>
                            <hr className="w-5/6 ml-16 mb-6" />
                            <div className={StyleClass.SelectStyle("texto-dados-incosistentes")}> Dados inconsistentes no ficheiro. </div>
                        </span>
                    )}
                    <div className="w-full flex items-center">
                        {qtdeLinhasErro > 0 && (
                            <>
                                <div className="w-1/2 text-cyan-500 italic font-light text-sm pl-32 mb-6 mr-5">
                                    <b className="font-bold">Possivel solucao: </b>
                                    Localize as celular problematicas (em destaque), corrija o conteudo e em seguida faca o processamento novamente.
                                </div>
                            </>
                        )}
                        {qtdeLinhasErro === 0 && (
                            <BotoesEdicao
                                setPodeAdicionarColuna={setPodeAdicionarColuna}
                                setPodeAdicionarLinha={setPodeAdicionarLinha}
                                setPodeEditarLinha={setPodeEditarLinha}
                                podeEditarLinha={podeEditarLinha}
                                key="botoesEdicao" />)}
                    </div>

                    {qtdeLinhasErro > 0 && (
                        <LinhasErro
                            setConfirmation={ConfirmarEditarLinhasInvalidas}
                            handleLinha={handleCorrigirLinha}
                            validar={correcaoLinhaValida}
                            linhasErro={linhasErro}
                            colunas={colunas} />)}

                    {/*<div className="text-lg text-green-500 mx-auto w-5/6 font-bold mb-5 mt-10">Nenhum problema encontrado!</div>*/}

                    <AdicionarLinha
                        ConfirmarAdicionarLinha={ConfirmarAdicionarLinha}
                        CancelarAdicionarLinha={CancelarAdicionarLinha}
                        podeAdicionarLinha={podeAdicionarLinha}
                        novaLinhaValida={novaLinhaValida}
                        AdicionarLinha={handleAddLinha}
                        linhasSucesso={linhasSucesso}
                        colunas={colunas} />

                    {linhasSucesso.length > 0 && (
                        <table className={StyleClass.SelectStyle("container-nova-coluna")}>
                            <thead className="w-full">
                                <tr className={podeAdicionarColuna || podeEditarColuna ? "flex mt10p" : "flex"}>
                                    <td className='text-center text-xs mx-1 w-16 flex'>
                                        <span className="border-b border-x w-16 mx-auto h-14 py-4 font-bold border-t">
                                            ID
                                        </span>
                                    </td>
                                    {
                                        colunas.length
                                            ?
                                            colunas.map((col, index) => (
                                                <td className='text-center w-auto font-bold w-80 mx-1 relative' key={index}>
                                                    {
                                                        podeEditarColuna && (
                                                            <span style={{ marginTop: '-45%' }} className={StyleClass.SelectStyle("pode-editar-coluna")}>
                                                                <span className="w-72 mt-6 capitalize flex items-center">
                                                                    <Input disabled={ValidateUtil.colunasPadrao.some(x => x.nome === col.nome)} variant="outlined" className="border bg-gray-50 capitalize" onChange={e => handleEditarNomeColuna(e.currentTarget.value, index)} label={col.nome} color="gray" />
                                                                    <svg onClick={() => setPodeExcluirColuna({ colunaSelecionada: col.nome, podeExcluir: true })} className={ValidateUtil.colunasPadrao.some(x => x.nome === col.nome) ? "w-9 bg-gray-200 h-8 text-gray-500 ml-2 px-2 h-8 pointer-events-none rounded-full" : "w-9 h-8 ml-2 cursor-pointer hover:bg-gray-200 px-2 rounded-full"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                    </svg>
                                                                </span>
                                                                {podeExcluirColuna.podeExcluir === true && podeExcluirColuna.colunaSelecionada === col.nome ? <b className="text-xs mt-3 mb-2">Excluir coluna  "{podeExcluirColuna.colunaSelecionada}"</b> : ""}
                                                                {podeExcluirColuna.podeExcluir === true && podeExcluirColuna.colunaSelecionada === col.nome && (
                                                                    <span className="w-full mb-1 h-16 flex items-center justify-center">
                                                                        <button onClick={() => ConfirmarExcluirColuna(col.nome)} className="rounded text-white bg-green-500 px-6 mr-4 h-10 shadow-md">
                                                                            Sim
                                                                        </button>
                                                                        <button onClick={() => setPodeExcluirColuna({ colunaSelecionada: "", podeExcluir: false })} className="rounded text-black bg-gray-300 px-6 h-10 shadow-md">
                                                                            Não
                                                                        </button>
                                                                    </span>
                                                                )}
                                                                {podeExcluirColuna.colunaSelecionada !== col.nome && (
                                                                    <>
                                                                        <span className="w-64 text-left mt-4 text-xs justify-center text-black cursor-default">Editar a formatação dos dados*</span>
                                                                        <span className="w-72 mb-1 mt-2 pr-10">

                                                                            {
                                                                                ValidateUtil.colunasPadrao.some(x => x.nome === col.nome) ?
                                                                                    <Select disabled={true} value={col.formato} className="bg-gray-200 text-left" color="gray" variant="outlined" label="Formato">
                                                                                    </Select>
                                                                                    :
                                                                                    <Select onChange={x => handleEditarFormatoColuna(x, index)} className="bg-gray-200 text-left" color="gray" variant="outlined" label="Formato">
                                                                                        {
                                                                                            Options.formatoOptions.map((op, i) => (
                                                                                                <Option key={i} className={op.value === "null" ? "font-semibold" : ""} disabled={op.value === "null"} value={op.value}>{op.label}</Option>
                                                                                            ))
                                                                                        }
                                                                                    </Select>
                                                                            }
                                                                        </span>
                                                                    </>
                                                                )}
                                                            </span>
                                                        )}
                                                    <span style={{ userSelect: 'none' }} onClick={event => { event.detail === 2 && podeEditarLinha ? setPodeEditarColuna(!podeEditarColuna) : console.log() }} className={podeEditarLinha ?
                                                        "capitalize cursor-pointer text-white border-r font-semibold border-y border-cyan-700 bg-cyan-600 w-80 h-14 mx-auto flex items-center justify-center text-xs"
                                                        :
                                                        "capitalize cursor-default border-r border-y border-gray-300 bg-gray-200 w-80 h-14 mx-auto flex items-center justify-center text-xs"}>
                                                        {ValidateUtil.colunasPadrao.some(x => x.nome === col.nome) ? col.nome + "*" : col.nome}
                                                    </span>
                                                </td>
                                            ))
                                            : <></>
                                    }
                                    {podeAdicionarColuna && (
                                        <td key="novaColuna2" id="novaColuna2" className="flex border-2 border-cyan-500 pt-2 relative items-end w-96 ml-1 flex-col items-center justify-end" style={{ marginTop: '-10%' }}>
                                            <span className="w-80 h-1/4 text-center px-1">
                                                <Input variant="outlined" onChange={x => setNomeNovaColuna(x.currentTarget.value)} label="Clique para nomear a coluna" color="gray" />
                                            </span>
                                            <span className="w-full flex items-center h-1/4 text-xs justify-center text-gray-400 cursor-default">Selecione a formatação dos dados*</span>
                                            <span className=" h-1/4 w-80 text-center flex items-center justify-center pb-2">
                                                <Select onChange={option => handleSetFormatoColuna(option)} color="gray" variant="outlined" label="Formato">
                                                    {
                                                        Options.formatoOptions.map((op, i) => (
                                                            <Option key={i} className={op.value === "null" ? "font-semibold" : ""} disabled={op.value === "null"} value={op.value}>{op.label}</Option>
                                                        ))
                                                    }
                                                </Select>
                                            </span>
                                            <span className="capitalize text-black bg-cyan-500 w-96 h-14 flex items-center justify-center text-xs">
                                                {nomeNovaColuna}
                                            </span>
                                        </td>
                                    )}
                                </tr>
                            </thead>
                            <tbody className={podeAdicionarColuna ? "w-full pb-5" : "w-full"}>
                                {
                                    colunas.length > 0 && (
                                        linhasSucesso.map((linha, index) => (
                                            <tr key={index} className="flex">
                                                <td className='text-center w-16 text-xs mx-1 flex'>
                                                    <span className="border-b border-x mx-auto h-14 py-4 w-16">
                                                        {index}
                                                    </span>
                                                </td>

                                                {colunas.map((t, i) => (
                                                    <td className='text-center w-auto text-sm mx-1 h-14' key={i}>
                                                        <label className="hidden"></label>
                                                        <InputMask
                                                            className={podeEditarLinha ? "h-14 bg-white text-center w-80 h-full py-4 pode-editar-input" : "h-14 bg-white text-center w-80 h-full py-4 nao-pode-editar-input"}
                                                            defaultValue={ValidateValues(linha[colunas[i].nome], t.formato)}
                                                            mask={FunctionsUtil.Mask(t.formato)}
                                                            onChange={handleEditarLinha}
                                                            disabled={!podeEditarLinha}
                                                            id={t.nome + ";" + index}
                                                            maskPlaceholder={null}>
                                                        </InputMask>
                                                    </td>
                                                ))
                                                }
                                                {podeAdicionarColuna && (
                                                    <td className='text-center w-auto text-sm mx-1 h-14' key="novaCol">
                                                        <InputMask
                                                            className={StyleClass.SelectStyle("input-pode-adicionar-coluna")}
                                                            style={{ borderLeft: '2px solid  rgb(0 188 212 / 1)', borderRight: '2px solid  rgb(0 188 212 / 1)', borderBottom: '1px solid rgb(0 188 212 /1)' }}
                                                            onChange={(event) => handleAddColuna(event.target.value, index)}
                                                            mask={FunctionsUtil.Mask(formatoNovaColuna)}
                                                            maskPlaceholder={null}
                                                            defaultValue={''}
                                                        >
                                                        </InputMask>
                                                        <span className="border-r-2 border-l-2 border-b-2 border-b-cyan-500 border-r-cyan-500 border-l-cyan-500 w-96 h-16 flex items-center justify-center border" style={{ marginTop: '-2%' }}>
                                                            <span onClick={ConfirmarAdicionarColuna} className={!novaColunaValida ? "h-8 pointer-events-none rounded bg-cyan-200 text-white px-6 py-2 text-xs mr-10" : "h-8 cursor-pointer rounded bg-cyan-500 text-white px-6 py-2 text-xs mr-10"}>
                                                                Processar Edição
                                                            </span>
                                                            <span onClick={() => setPodeAdicionarColuna(false)} className="cursor-pointer text-xs underline">Cancelar</span>
                                                        </span>
                                                    </td>
                                                )}
                                            </tr>
                                        )))}
                            </tbody>
                        </table>
                    )}
                    {podeEditarLinha && (
                        <div className={StyleClass.SelectStyle("container-editar-linha")}>
                            <DialogComponent
                                className={StyleClass.SelectStyle("dialog-confirma-edicao-linha")}
                                messageText="Confirma edição dos dados?"
                                setConfirmation={ConfirmarEditarLinha}
                                nameButton="Processar Edição"
                                key="confirmarEditarLinha" />
                            <span
                                className={StyleClass.SelectStyle("botao-cancelar-edicao-linha")}
                                onClick={CancelarEditarLinha}>
                                Cancelar
                            </span>
                        </div>
                    )}

                    <hr className="mt-2" />
                    <BotoesFinalizar
                        ConfirmarExcluirLinhasInvalidas={ConfirmarExcluirLinhasInvalidas}
                        handleProcessarEnviar={handleProcessarEnviar}
                        podeAdicionarColuna={podeAdicionarColuna}
                        podeAdicionarLinha={podeAdicionarLinha}
                        qtdeLinhasSucesso={qtdeLinhasSucesso}
                        podeEditarColuna={podeEditarColuna}
                        podeEditarLinha={podeEditarLinha}
                        qtdeLinhasErro={qtdeLinhasErro}
                        key="botoesFinalizar" />
                </div>
            )}

            <SnackbarComponent
                message={alertaMensagem.mensagem}
                sucess={alertaMensagem.sucesso}
                show={alertaMensagem.abrir}
                key="snackbarCard" />

            <Loading
                children={isLoading}
                key="loadingCard" />
        </div>
    )
}