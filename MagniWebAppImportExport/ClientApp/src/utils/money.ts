export const toMoney = new Intl.NumberFormat('sfb', {
    style: 'currency',
    currency: 'EUR',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const calculaPorcentagem = (valor: number, reconciliado: number) => {
    let result = (reconciliado * 100) / valor
    result = result < 0 ? result * -1 : result

    let porcentagem = ''

    if (result === 0) {
        porcentagem = 'negative'
    } else if (result > 0 && result < 12.5) {
        porcentagem = 'circle-1-8'
    } else if (result >= 12.5 && result < 25) {
        porcentagem = 'circle-2-8'
    } else if (result >= 25 && result < 37.5) {
        porcentagem = 'circle-3-8'
    } else if (result >= 37.5 && result < 50) {
        porcentagem = 'circle-4-8'
    } else if (result >= 50 && result < 62.5) {
        porcentagem = 'circle-5-8'
    } else if (result >= 62.5 && result < 75) {
        porcentagem = 'circle-6-8'
    } else if (result >= 75 && result < 87.5) {
        porcentagem = 'circle-7-8'
    } else if (result >= 87.5 && result <= 100) {
        porcentagem = 'circle-8-8'
    }

    return porcentagem
}