const styles: StyleClassModel[] = [
    {
        className: "main",
        classStyle: "w-full h-min flex items-center justify-center flex-col mt-20 pb-10"
    },
    {
        className: "container-one",
        classStyle: "w-5/6 bg-white rounded-lg shadow-md mt-5 h-min"
    },
    {
        className: "container-importar",
        classStyle: "text-lg h-min w-full flex items-center pl-16 text-black font-bold flex items-center justify-between"
    },
    {
        className: "container-pai-info-importacao",
        classStyle: "flex flex-col w-2/5 justify-center items-center h-full"
    },
    {
        className: "container-info-importacao",
        classStyle: "w-1/3 h-full py-3"
    },
    {
        className: "span-linhas-colunas-processadas",
        classStyle: "flex items-center text-xs font-black text-gray-500"
    },
    {
        className: "span-linhas-problema",
        classStyle: "flex items-center text-xs font-black text-red-500"
    },
    {
        className: "span-linhas-sucesso",
        classStyle: "flex items-center text-xs font-black green-correct-signal"
    },
    {
        className: "titulo-info",
        classStyle: "text-xs font-thin mb-1 w-3/4"
    },
    {
        className: "texto-dados-incosistentes",
        classStyle: "mx-auto w-5/6 text-lg dados-consistentes font-bold mb-2"
    },
    {
        className: "container-nova-coluna",
        classStyle: "mx-auto bg-white flex items-center justify-center h-min w-full mb-2 pt-2 pb-12 pr-4 style-table-default"
    },
    {
        className: "pode-editar-coluna",
        classStyle: "font-normal w-80 text-center flex items-center flex-col justify-end pb-2 border border-2 border-cyan-600 h-36 absolute"
    },
    {
        className: "input-pode-adicionar-coluna",
        classStyle: "outline-cyan-400 h-16 resize-none bg-white text-center break-words border-x border-b w-80 mx-auto h-full py-4"
    },
    {
        className: "container-editar-linha",
        classStyle: "bottom-0 flex items-center justify-end w-full text-right h-14 pr-16"
    },
    {
        className: "dialog-confirma-edicao-linha",
        classStyle: "h-8 cursor-pointer rounded flex items-center bg-cyan-500 text-white px-6 py-2 text-xs mr-2"
    },
    {
        className: "botao-cancelar-edicao-linha",
        classStyle: "cursor-pointer font-medium px-4 py-2 h-8 text-xs underline"
        }
];

interface StyleClassModel {
    className: string;
    classStyle: string;
}

const SelectStyle = (className: string) => {
    return styles.find(x => x.className == className)?.classStyle;
};

const StyleClass = {
    SelectStyle
};

export default StyleClass;