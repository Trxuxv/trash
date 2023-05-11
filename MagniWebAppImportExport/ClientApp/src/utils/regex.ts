
const dates = [
    {
        format: "dd/mm/yyyy",
        regex: /[0-3][0-2]\/[0-3][0-12]\/[0-2][0-9][0-4][0-40]/
    },
    {
        format: "yyyy/mm/dd",
        regex: /[0-2][0-9][0-4][0-40]\/[0-3][0-12]\/[0-3][0-1]/
    },
]



const RegexUtil = {
    dates
}

export default RegexUtil;