import moment from 'moment'
import 'moment/locale/pt'
moment.locale('pt')

export const getToday = (days: number = 0) => {
    const curr = new Date()
    curr.setDate(curr.getDate() - days)
    // const date = curr.toISOString().substring(0, 10)
    const date = curr.toLocaleDateString('pt-br')
    return date
}

export const convertDataToBr = (date: any) => {
    const curr = new Date(date)
    curr.setDate(curr.getDate() + 1)
    return curr.toLocaleDateString()
}

export const getHumanReadableDate = (dateInput: any) => {
    if (dateInput === null || dateInput === undefined) return; 
    const diffDays: any = parseInt(moment.duration(moment(dateInput).startOf('day').diff(moment().startOf('day'))).asDays().toFixed()) 
    //const formatedDate = moment(dateInput).format("DD") + " " + moment(dateInput).format("MMM")

    if (diffDays === 0) {
        return "hoje"
    } 
    if (diffDays === -1) {
        return "ontem"
    }
    if (diffDays === 1) {
        return "amanhã"
    } 
    
    if (diffDays > 0 && diffDays <= 14) {
        return `(em ${diffDays} dias)`
    } 
    
    if (diffDays < 0 && diffDays >= -14) {
        return `(${diffDays*-1} dias atrás)`
    } 
    
    if (diffDays > 14 && diffDays <= 34) {
        return `(em ${(diffDays / 7).toFixed(0)} semanas)`
    } 
    if (diffDays < -14 && diffDays >= -34) {
        return `(${-(diffDays / 7).toFixed(0)} semanas atrás)`
    }
    return moment(dateInput).format("YYYY.MM.DD")
}

/*
export const getHumanReadableDate = (diffDays: any, dateInput: moment.MomentInput, scope: any) => {
    const formatedDate = moment(dateInput).format("DD") + " " + moment(dateInput).format("MMM"); 

    if (diffDays === 0) {
        return scope.LocalizeToken("TODAY")
    } 
    if (diffDays === -1) {
        return scope.LocalizeToken("YESTERDAY")
    }
    if (diffDays === 1) {
        return scope.LocalizeToken("TOMORROW")
    } 
    if (diffDays > 0 && diffDays <= 14) {
        return formatedDate + " (" + scope.LocalizeToken("ATXDAYS").format(diffDays) + ")"
    } 
    if (diffDays < 0 && diffDays >= -14) {
        return formatedDate + " (" + scope.LocalizeToken("XDAYSAGO").format(-(diffDays)) + ")"
    } 
    if (diffDays > 14 && diffDays <= 34) {
        return formatedDate + " (" + scope.LocalizeToken("ATXWEEKS").format((diffDays / 7).toFixed()) + ")"
    } 
    if (diffDays < -14 && diffDays >= -34) {
        return formatedDate + " (" + scope.LocalizeToken("XWEEKSAGO").format(-(diffDays / 7).toFixed()) + ")"
    } 

    return formatedDate;

}
 
const humanReadableFormatDate = (dateInput: moment.MomentInput, scope: any ) => { 

    if (dateInput === null || dateInput === undefined) return; 
    var diffDays = moment.duration(moment(dateInput).startOf('day').diff(moment().startOf('day'))).asDays().toFixed(); 

    if (moment(dateInput).year() !== moment().year()) {
        return moment(dateInput).format("YYYY.MM.DD")
    } else {
        return getHumanReadableDate(diffDays, dateInput, scope);
    } 
}

*/