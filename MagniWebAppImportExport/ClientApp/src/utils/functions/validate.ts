import RegexUtil from "../regex";

const colunasPadrao = [
    { nome: "dataAbertura", formato: "dd/mm/yyyy" },
    { nome: "descricao", formato: "texto comum" },
    { nome: "valor", formato: "9.999.99,99" },
    { nome: "dataFechamento", formato: "dd/mm/yyy" }
];

const Validate = (value: string, format: string) => {

    var res = {
        value: value,
        isValid: false
    };

    var regex = RegexUtil.dates.find(x => x.format === format)?.regex;

    regex?.exec(value);

    res.value = value;
    res.isValid = true;

    return res;
}

const ValidateMaxLength = (format: string) => {
    console.log(format)
    var res = 0;

    switch (format) {

        case "dd/mm/yyyy":
            res = 10;
            break;
        case "texto comum":
            res = 300;
            break;

        case "0.000,00":
            res = 50;
            break;
        default:
    }

    return res;
}

const ValidateUtil = {
    Validate,
    ValidateMaxLength,
    colunasPadrao
};

export default ValidateUtil;