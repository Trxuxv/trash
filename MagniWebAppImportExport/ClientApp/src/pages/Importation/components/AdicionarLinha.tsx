import FunctionsUtil from "../../../utils/functions/FunctionsUtil";
import ColunaModel from "../../../models/Importation/ColunaModel";
import InputMask from 'react-input-mask';

interface Props {
    colunas: ColunaModel[];
    linhasSucesso: any[];
    novaLinhaValida: boolean;
    podeAdicionarLinha: boolean;
    CancelarAdicionarLinha: () => void;
    ConfirmarAdicionarLinha: () => void;
    AdicionarLinha: (event: any, descricao: string) => void;
}

const AdicionarLinha = (prop: Props) => {

    const handleConfirmarAdicionarLinha = () => {
        prop.ConfirmarAdicionarLinha();
    }

    const handleCancelarAdicionarLinha = () => {
        prop.CancelarAdicionarLinha();
    }

    const handleAddLinha = (event: any, descricao: string) => {
        prop.AdicionarLinha(event, descricao);
    }

    return (
        <div className="w-full my-4">
            {prop.podeAdicionarLinha && (
                <div
                    className="mx-auto bg-white flex items-center justify-center h-min w-full mb-2 pt-2 pb-3 pr-4"
                    style={{ maxWidth: '95%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <span className="flex w-full overflow-x-scroll pb-2">
                        <div className="flex flex-col w-16 bg-cyan-400 text-sm capitalize text-center text-sm mx-1 font-bold">
                            <label className="border-b text-xs border-x w-16 mx-auto h-16 py-4 font-bold border-t text-center">
                                ID
                            </label>
                            <div className="outline-cyan-400 resize-none bg-gray-100 border-gray-300 text-center break-words border-x border-b w-16 mx-auto h-16 py-4">
                                {prop.linhasSucesso.length}
                            </div>
                        </div>
                        {
                            prop.colunas.map((col, index) => (
                                <div key={index} className="flex flex-col w-80 bg-cyan-400 text-sm capitalize text-center text-sm mx-1 font-bold">
                                    <label className="border-b text-xs border-x w-80 mx-auto h-full py-4 font-bold border-t text-center">
                                        {col.nome}
                                    </label>
                                    <InputMask
                                        maskPlaceholder={null}
                                        mask={FunctionsUtil.Mask(col.formato)}
                                        key={col.nome + index}
                                        defaultValue={""}
                                        onChange={(event) => handleAddLinha(event.target.value, col.nome)}
                                        style={{ border: '1px solid rgb(77 208 225 / 1)', borderTop: '0px' }}
                                        className="text-xs rounded-0 outline-cyan-400 resize-none bg-gray-100 border-gray-300 text-center break-words border-x border-b w-80 mx-auto h-full py-4"
                                    >
                                    </InputMask>
                                </div>
                            ))
                        }
                    </span>
                    <div className="w-full flex items-center justify-end my-2 pr-10">
                        <button onClick={handleConfirmarAdicionarLinha} type="button" disabled={!prop.novaLinhaValida} className={!prop.novaLinhaValida ? "opacity-50 bg-cyan-500 text-white rounded px-6 py-2 text-xs mr-5" : "cursor-pointer rounded bg-cyan-500 text-white px-6 py-2 text-xs mr-5"}>
                            Processar Edição
                        </button>
                        <button onClick={handleCancelarAdicionarLinha} className="text-xs underline">Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdicionarLinha;