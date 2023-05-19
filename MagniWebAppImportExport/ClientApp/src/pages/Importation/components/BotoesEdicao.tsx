interface Props {
    podeEditarLinha: boolean;
    setPodeEditarLinha: (val: boolean) => void;
    setPodeEditarColuna: (val: boolean) => void;
    setPodeAdicionarLinha: (val: boolean) => void;
    setPodeAdicionarColuna: (val: boolean) => void;
}

const BotoesEdicao = (props: Props) => {
    return (
        <span className="flex items-center justify-center w-full h-16 mt-10 relative">
            {
                props.podeEditarLinha ?
                    <div className="w-1/2 pl-32 mb-6 mr-5 flex mb-5 h-full flex-col absolute left-0" style={{ marginTop: '-2%' }}>
                        <h1 className="text-green-400 font-bold text-base mb-2">Você está no modo edição</h1>
                        <span className="text-sm text-cyan-500 font-light italic"><b className="font-semibold text-cyan-500">Dica</b>: Clique duas vezes na célula para edita-lá.
                            <br />Ao fim das alterações, clique em <b className="font-semibold text-cyan-500">"Processar edições"</b> e aguarde;</span>
                    </div> : <></>
            }
            <div className="w-1/2 mb-4 absolute right-0">
                <div className="bg-gray-100 w-5/6 h-12 mr-20 rounded-full shadow-md flex mt-5 mb-10">
                    <div onClick={() => { props.setPodeEditarLinha(true); props.setPodeEditarColuna(true) }} className="w-1/3 flex items-center justify-center text-xs font-bold text-black hover:text-blue-700 rounded-full cursor-pointer">Editar Ficheiro
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-4 h-4">
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                    </div>

                    <div onClick={() => props.setPodeAdicionarLinha(true)} className="w-1/3 flex items-center justify-center text-xs font-bold text-black hover:text-blue-700 rounded-full cursor-pointer">Adicionar Linha
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div onClick={() => props.setPodeAdicionarColuna(true)} className="w-1/3 flex items-center justify-center text-xs font-bold text-black  hover:text-blue-700  rounded-full cursor-pointer">Adicionar Coluna
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </span>
    )
}

export default BotoesEdicao;