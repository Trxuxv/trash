
type OptionType = {
    label: string;
    value?: string;
};


const formatoOptions: OptionType[] = [
    {
        label: "texto",
        value: "null"
    },
    {
        label: "texto comum",
        value: "texto comum",
    },
    {
        label: "somente texto",
        value: "somente texto",
    },
    {
        label: "data",
        value: "null"
    },
    {
        label: " dd/mm/yyyy ",
        value: "dd/mm/yyyy",
    },
    {
        label: "dd/mm/yy",
        value: "dd/mm/yy",
    },
    {
        label: "d/m/yyyy",
        value: "d/m/yyyy",
    },
    {
        label: "yyyy/mm/dd",
        value: "yyyy/mm/dd",
    },
    {
        label: "yy/mm/dd",
        value: "yy/mm/dd",
    },
    {
        label: "yyyy/m/d",
        value: "yyyy/m/d",
    },
    {
        label: "yy/m/d",
        value: "yy/m/d",
    },
    {
        label: "moeda",
        value: "null"
    },
    {
        label: "0.000,00",
        value: "0.000,00",
    },
    {
        label: "0.000.00",
        value: "0.000.00",
    },
    {
        label: "0000.00",
        value: "0000.00",
    }
];

const Options = {
    formatoOptions,
}


export default Options;