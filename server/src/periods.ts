import dayjs from 'dayjs'

function filterByMoths(date: string, quantity: number) {
    const currentDate = dayjs(Date.now())
    const transactionDate = dayjs(date)

    if (currentDate.year() === transactionDate.year())
        return dayjs(Date.now()).month() - dayjs(date).month() <= quantity
    else if (currentDate.year() - 1 === transactionDate.year()) {
        return 12 - transactionDate.month() + currentDate.month() <= quantity
    } else return false
}

export const periods = {
    week(date: string) {
        return Date.now() - dayjs(date).millisecond() <= 6.048e8
    },
    month(date: string) {
        return filterByMoths(date, 1)
    },
    ['3 months'](date: string) {
        return filterByMoths(date, 3)
    },
    ['6 months'](date: string) {
        return filterByMoths(date, 6)
    },
    year(date: string) {
        return filterByMoths(date, 12)
    },
    all(date: string) {
        return !!date
    },
}
