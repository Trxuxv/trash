import DialogComponent from "../../../components/Dialog";

interface Props {
    ConfirmarExcluirLinhasInvalidas: () => void;
    handleProcessarEnviar: () => void;
    podeAdicionarColuna: boolean;
    podeAdicionarLinha: boolean;
    podeEditarColuna: boolean;
    qtdeLinhasSucesso: number;
    podeEditarLinha: boolean;
    qtdeLinhasErro: number;
}

const BotoesFinalizar = (props: Props) => {
    return (
        <div className="w-full h-16 flex items-center justify-end my-4">
            <div className="h-3/6">
                {props.qtdeLinhasSucesso > 0 && props.qtdeLinhasErro > 0 && (
                    <DialogComponent
                        isEditAdd={false}
                        messageConfirm="SIM, excluir"
                        messageText="Confirma exclusão das linhas problemáticas?"
                        nameButton="excluir linhas problematicas e processar"
                        className="font-medium text-white bg-blue-500 px-4 py-2 h-full uppercase text-xs hover:bg-blue-600 shadow-md"
                        setConfirmation={props.ConfirmarExcluirLinhasInvalidas} />)
                }
                <button type="button" onClick={props.handleProcessarEnviar}
                    disabled={props.qtdeLinhasErro > 0 || props.podeEditarColuna || props.podeEditarLinha || props.podeAdicionarLinha || props.podeAdicionarColuna}
                    className={props.qtdeLinhasErro > 0 || props.podeEditarColuna || props.podeEditarLinha || props.podeAdicionarLinha || props.podeAdicionarColuna ?
                        "bg-gray-400 font-medium text-white  px-4 py-2 h-full uppercase text-xs ml-6 mr-32"
                        :
                        "processar-enviar hover:bg-green-600 font-medium text-white  px-4 py-2 h-full uppercase text-xs ml-6 mr-32"}>processar e enviar</button>
            </div>
        </div>
        )
}

export default BotoesFinalizar;