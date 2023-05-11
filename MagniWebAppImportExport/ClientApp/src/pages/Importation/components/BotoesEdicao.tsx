interface Props {
    podeEditarLinha: boolean;
    setPodeEditarLinha: (val: boolean) => void;
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
                    <div onClick={() => props.setPodeEditarLinha(true)} className="w-1/3 flex items-center justify-center text-xs font-bold text-black hover:bg-gray-300 rounded-full cursor-pointer">Editar Ficheiro
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </div>

                    <div onClick={() => props.setPodeAdicionarLinha(true)} className="w-1/3 flex items-center justify-center text-xs font-bold text-black  hover:bg-gray-300 rounded-full cursor-pointer">Adicionar Linha
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div onClick={() => props.setPodeAdicionarColuna(true)} className="w-1/3 flex items-center justify-center text-xs font-bold text-black  hover:bg-gray-300 rounded-full cursor-pointer">Adicionar Coluna
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="ml-2 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </span>
        )
}

export default BotoesEdicao;