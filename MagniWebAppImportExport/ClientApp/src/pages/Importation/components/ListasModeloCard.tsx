import excel from './../../../assets/images/excel.svg';
import csv from './../../../assets/images/csv.png';

export const ListaModeloCard = () => {
    return (
        <div className="h-36 w-5/6 bg-white shadow-md rounded-lg flex items-center flex-col">
            <div className="w-full h-1/2 items-center flex justify-between">
                <div className="w-2/3 text-black flex text-lg font-bold">
                    <img src="https://cdn.icon-icons.com/icons2/3247/PNG/512/file_import_icon_198544.png" className="w-4 h-4 ml-7 mr-2 mt-1"/>
                    Importar listas de movimentos bancários
                </div>
                <div className="w-1/3 text-center flex justify-evenly  px-10">
                    <button className="text-sm modelo-btns  text-white py-2 h-10 font-light rounded-sm shadow-md px-8 flex items-center">  Excel Modelo <img className="w-5 ml-4" src={excel} /></button>
                    <button className="text-sm modelo-btns  text-white p-2 h-10 font-light rounded-sm shadow-md px-8 flex items-center"> CSV Modelo <img className="w-5 ml-4" src={csv} /></button>
                </div>
            </div>
            <div className="h-16 flex flex items-center text-base text-gray-500 border-t border-t-gray-200" style={{width: "93%"}}>
                Baixe nosso ficheiro modelo para importar suas <span className="mx-1 font-medium text-gray-500"> Listas de Movimentos Bancários</span> de forma rápida e segura:
            </div>
        </div>
    )
}