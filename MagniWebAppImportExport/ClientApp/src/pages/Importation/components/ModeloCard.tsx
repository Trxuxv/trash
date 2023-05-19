interface Props {
    modelo: boolean;
    setAbrirModelo: () => void;
}

const Modelo = (prop: Props) => {

    const handleAbrirModelo = () => {
        prop.setAbrirModelo();
    }

    return (
        <div className="h-auto bg-white w-5/6 mt-5 rounded-lg shadow-md pt-4 flex flex-col items-center justify-center relative">
            <div className="text-lg w-full h-10 flex items-center pl-14 text-black font-bold items-center justify-between cursor-pointer hover:bg-gray-100 rounded-full" onClick={handleAbrirModelo}>
                Veja como é fácil preencher as Listas de Movimentos Bancários
                <div className="mr-40">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        {
                            prop.modelo ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            )
                        }
                    </svg>

                </div>
            </div>
            <div className="h-5/6 w-full mt-5">
                <div className="h-16 mb-2 flex ml-14 flex items-center text-base text-gray-500 border-t border-t-gray-200" style={{width: "92%"} }>
                    Antes de importar suas Listas de Movimentos Bancários, certifique-se de que estão de acordo com o modelo a seguir:
                </div>
                {
                    prop.modelo == true ? (
                        <div className="w-full h-48 flex justify-center flex-col">
                            <div className="w-full h-3/6 flex justify-center">
                                <table className="grid grid-rows-2 grid-flow-col w-full mx-16 border text-xs">
                                    <div className="border-b border-r text-green-600 font-bold flex items-center pl-10">
                                        Data abertura * (DD/MM/YYYY)
                                    </div>
                                    <div className="border-r font-normal flex items-center pl-10 text-gray-400">
                                        01/01/2023
                                    </div>
                                    <div className="border-r border-b text-green-600 font-bold flex items-center pl-10">
                                        Descricao*
                                    </div>
                                    <div className="border-r font-normal flex items-center pl-10 text-gray-400">
                                        01/01/2023
                                    </div>
                                    <div className="border-r border-b text-green-600 font-bold flex items-center pl-10">
                                        Valor $*
                                    </div>
                                    <div className="border-r font-normal flex items-center pl-10 text-gray-400">
                                        500,00
                                    </div>
                                    <div className="border-r border-b text-green-600 font-bold flex items-center pl-10">
                                        Banco*
                                    </div>
                                    <div className="border-r font-normal flex items-center pl-10 text-gray-400">
                                        Wise
                                    </div>
                                    <div className=" border-b text-green-600 font-bold flex items-center pl-10">
                                        Data fechamento * (DD/MM/YYYY)
                                    </div>
                                    <div className="font-normal flex items-center pl-10 text-gray-400">
                                        27/11/2022
                                    </div>
                                </table>
                            </div>
                            <div className="text-sm w-full pl-16 h-1/6 flex items-center text-gray-300 font-thin my-1">
                                Para evitar erros no processamento, preencha os campos de seu ficheiro como mostra o modelo acima.
                            </div>
                        </div>
                    ) : (
                        <span></span>
                    )
                }
            </div>
        </div>

    )
}

export default Modelo;