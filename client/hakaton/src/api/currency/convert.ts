import { Currency } from '../account/getUserCurrency'

interface Data {
    Date: string
    PreviousDate: string
    PreviousURL: string
    Timestamp: string
    Valute: Record<
        Currency,
        {
            ID: string
            NumCode: string
            CharCode: Currency
            Nominal: number
            Name: string
            Value: number
            Previous: number
        }
    >
}
let data: Data
function toRub(amount: number, from: Currency) {
    return from === 'RUB' ? amount : amount * data.Valute[from].Value
}
function fromRub(amount: number, to: Currency) {
    return to === 'RUB' ? amount : amount / data.Valute[to].Value
}
export const getDataAboutCurrency = async () => {
    data = data || (await (await fetch('https://www.cbr-xml-daily.ru/daily_json.js')).json())
}

export const convert = (amount: number, from: Currency, to: Currency) => {
    console.log(amount, from, to, data ? fromRub(toRub(amount, from), to) : amount)

    return data ? fromRub(toRub(amount, from), to) : amount
}
