import FunctionsUtil from "../../../utils/functions/FunctionsUtil";
import ColunaModel from "../../../models/Importation/ColunaModel";
import DialogComponent from "../../../components/Dialog";
import InputMask from 'react-input-mask';

interface Props {
    colunas: ColunaModel[];
    validar: boolean;
    linhasErro: any[];
    setConfirmation: () => void;
    handleLinha: (event: any) => void;
}

const LinhasErro = (prop: Props) => {

    const handleSalvarLinhasEditadas = () => {
        prop.setConfirmation();
    }

    return (
        <span className="b-10">
            <table className="mx-auto bg-white flex items-center justify-center h-min w-full mb-2 pt-2 pb-5 pr-4" style={{
                overflowX: 'scroll', maxWidth: '95%', display: 'flex',
                flexDirection: 'row', flexWrap: 'wrap'
            }}>
                <thead className="w-full">
                    <tr className="flex">
                        <td className='text-center text-xs mx-1 w-16 flex'>
                            <span className="border-b border-x w-16 mx-auto h-14 py-4 font-bold border-t">
                                ID
                            </span>
                        </td>
                        {prop.colunas.length && (
                            prop.colunas.map((col, index) => (
                                <td className='text-center w-80 font-bold mx-1' key={index}>
                                    <span className="border-errorbg capitalize errorbg h-14 text-white border w-80 mx-auto flex items-center justify-center text-xs">
                                        {col.nome}
                                    </span>
                                </td>
                            )))}
                    </tr>
                </thead>
                <tbody className="w-full pb-2">
                    {
                        prop.colunas.length && (
                            prop.linhasErro.map((linha, index) => (
                                <tr key={index} className="flex">
                                    <td className='text-center text-xs mx-1 w-16 flex'>
                                        <span className="border-b border-x w-16 mx-auto h-14 py-4 font-bold">
                                            {index}
                                        </span>
                                    </td>

                                    {
                                        prop.colunas.map((t, i) => (
                                            <td className='text-center w-80 text-sm mx-1 text-gray-500 h-14' key={i}>
                                                {linha[prop.colunas[i].nome] && linha[prop.colunas[i].nome].trim() !== '' && linha[prop.colunas[i].nome] !== undefined && linha[prop.colunas[i].nome] !== null ?
                                                    (
                                                        <InputMask
                                                            maskPlaceholder={null}
                                                            mask={FunctionsUtil.Mask(t.formato)}
                                                            id={t.nome + ";" + index}
                                                            onFocus={(evt) => evt.currentTarget.select()}
                                                            defaultValue={linha[prop.colunas[i].nome]}
                                                            onChange={prop.handleLinha}
                                                            className="text-center resize-none linha-erro bg-red-50 w-80 mx-auto h-14 py-4"
                                                        >
                                                        </InputMask>
                                                    )
                                                    :
                                                    (
                                                        <InputMask
                                                            maskPlaceholder={null}
                                                            mask={FunctionsUtil.Mask(t.formato)}
                                                            id={t.nome + ";" + index}
                                                            onFocus={(evt) => evt.currentTarget.select()}
                                                            defaultValue={linha[prop.colunas[i].nome]}
                                                            onChange={prop.handleLinha}
                                                            className="text-center resize-none linha-erro bg-red-100 w-80 mx-auto h-14 py-4"
                                                        >
                                                        </InputMask>
                                                    )
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>
                            )))}
                </tbody>
                <tfoot className="w-full h-10 flex items-center justify-end pr-7 font-normal mt-2">
                    <tr>
                        <td>
                            <DialogComponent
                                isEditAdd={true}
                                messageText="Confirma edição dos dados?"
                                messageConfirm="Sim, confirmar"
                                nameButton="Processar Edição"
                                className={prop.validar ? "h-8 flex items-center cursor-pointer rounded errorbg text-white px-6 py-2 text-xs mr-6" : "flex items-center pointer-events-none rounded h-8 opacity-50 rounded errorbg text-white px-6 py-2 text-xs mr-6"}
                                setConfirmation={handleSalvarLinhasEditadas} />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </span>
    )
}

export default LinhasErro;