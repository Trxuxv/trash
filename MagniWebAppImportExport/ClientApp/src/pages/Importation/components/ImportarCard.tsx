interface Props {
    nomeArquivo: string;
    tamanhoArquivo: string;
    importar: ($event: any) => void;
}

const ImportarCard = (prop: Props) => {
    const handleImportar = (event: any) => {
        prop.importar(event);
    }

    return (
        <div className="h-72 bg-white w-5/6 mt-5 rounded-lg shadow-md block flex flex-col items-center justify-center relative">
            <div className="text-lg h-1/3 w-full flex items-center pl-16 text-black font-bold">Importar/Anexar listas de movimentos bancários (CSV ou Excel)</div>
            <hr className="w-5/6 ml-16 self-start" />
            <div className="h-5/6 w-full flex items-center justify-center">
                <input onChange={handleImportar} type="file" name="file" className="custom-file-input bg-blue-600 hidden" id="inputGroupFile" required
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                <label className="shadow-md border-dashed border-4 border-gray-400 text-gray-400 rounded-lg bg-gray-100 box-a  w-5/6 flex items-center justify-center h-4/6" htmlFor="inputGroupFile">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>

                    <b className="mr-1">Clique aqui </b> para anexar ou <b className="mx-1"> arraste para aqui </b> as suas Listas de Movimentos Bancários para reconhecimento automatico.</label>
            </div>

            {prop.nomeArquivo ? (
                <span className="text-xs flex h-8 font-bold text-black w-5/6">{prop.nomeArquivo} <span className="font-normal text-xs ml-1">({prop.tamanhoArquivo})</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="ml-1 green-correct-signal w-3 h-3 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </span>) : <></>}
            <div className=" h-1/6 w-full flex items-center pl-16 border-b"></div>
        </div>
    )
}

export default ImportarCard;