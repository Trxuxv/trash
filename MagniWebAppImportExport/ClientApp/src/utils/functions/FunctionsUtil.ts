const FormattedArray = (x: any) => {

    var arr = Object.values(x ? x : {});

    arr = arr.filter(function (entry: any) { return entry.trim() !== ''; });

    return arr;
}

const Mask = (format: string) => {
    var all = /[A-Za-z0-9]/g;

    var onlyletters = /[a-zA-Z]/g;

    var res: string | Array<(string | RegExp)> = Array(200).fill(all);

    const digit = /[0-9]/;

    const slash = "/";
    const dot = ".";
    const comma = ",";

    switch (format) {
        case "dd/mm/yyyy":
            res = [/[0-3]/, digit, slash, /[0-1]/, /[0-9]/, slash, /[0-2]/, /[0-9]/, /[0-9]/, /[0-9]/];
            break;

        case "dd/mm/yy":
            res = [/[0-31]/, digit, slash, /[0-9]/, /[0-9]/, slash, /[0-2]/, digit];
            break;

        case "d/m/yyyy":
            res = [/[0-31]/, slash, /[0-9]/, /[0-9]/, slash, /[0-2]/, /[0-9]/, /[0-9]/, /[0-9]/];
            break;

        case "yyyy/mm/dd":
            res = [/[0-2]/, /[0-9]/, /[0-9]/, /[0-9]/, slash, digit, digit, slash, digit, digit];
            break;

        case "yy/mm/dd":
            res = [digit, digit, slash, digit, digit, slash, digit, digit];
            break;

        case "yyyy/m/d":
            res = [/[0-2]/, /[0-9]/, /[0-9]/, /[0-9]/, slash, digit, digit, slash, digit];
            break;

        case "yy/m/d":
            res = [ digit, digit, slash, digit, digit, slash, digit];
            break;

        case "texto comum":
            res = "";
            break;

        case "somente texto":
            res = Array(200).fill(onlyletters);
            break;
        case "0.000,00":
            res = [digit, dot, digit, digit, digit, comma, digit, digit];
            break;

        case "0.000.00":
            res = [digit, dot, digit, digit, digit, dot, digit, digit];
            break;

        case "0000.00":
            res = [digit, digit, digit, digit, dot, digit, digit];
            break;

        default:
    }

    return res;

}

const FunctionsUtil = {
    FormattedArray,
    Mask
};

export default FunctionsUtil;