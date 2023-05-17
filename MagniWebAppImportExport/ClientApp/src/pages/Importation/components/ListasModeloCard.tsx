import excel from './../../../assets/images/excel.svg';
import csv from './../../../assets/images/csv.png';

export const ListaModeloCard = () => {
    return (
        <div className="h-48 w-5/6 bg-white shadow-md rounded-lg flex items-center flex-col">
            <div className="w-full h-1/2 items-center flex justify-between">
                <div className="w-2/3 text-black flex text-lg font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 mx-3 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    Importar listas de movimentos bancários
                </div>
                <div className="w-1/3 text-center flex justify-evenly  px-10">
                    <button className="text-sm modelo-btns  text-white py-2 h-10 font-light rounded-sm shadow-md px-8 flex items-center">  Excel Modelo <img className="w-7 ml-4" src={excel} /></button>
                    <button className="text-sm modelo-btns  text-white p-2 h-10 font-light rounded-sm shadow-md px-8 flex items-center"> CSV Modelo <img className="w-7 ml-4" src={csv} /></button>
                </div>
            </div>
            <hr className="w-5/6 self-start mx-auto" />
            <div className="w-full h-1/2 flex flex items-center text-base text-gray-500 pl-14">
                Baixe nosso ficheiro modelo para importar suas <span className="mx-1 font-medium text-gray-500"> Listas de Movimentos Bancários</span> de forma rápida e segura:
            </div>
        </div>
    )
}