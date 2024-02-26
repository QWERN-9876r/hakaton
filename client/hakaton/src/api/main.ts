import { addUserName } from './account/addUserName'
import { authorization } from './account/authorization'
import { changeUserCurrency } from './currency/changeUserCurrency'
import { getUserCurrency } from './currency/getUserCurrency'
import { registration } from './account/registration'
import { convert, getDataAboutCurrency } from './currency/convert'
import { addUserInFamily } from './family/addUserInFamily'
import { createFamily } from './family/createFamily'
import { deleteUserFromFamily } from './family/deleteUserFromFamily'
import { getUserNameById } from './family/getUserNameById'
import { getUsersInFamily } from './family/getUsersInFamily'
import { createTransaction } from './transactions/createTransaction'
import { getAllTransactions } from './transactions/getAllTransactions'
import { getUserLanguage } from './account/getUserLanguage'
import { setUserLanguage } from './account/setUserLanguage'

export class Api {
    registration = registration
    authorization = authorization
    createTransaction = createTransaction
    getAllTransactions = getAllTransactions
    addUserInFamily = addUserInFamily
    createFamily = createFamily
    getUsersInFamily = getUsersInFamily
    getUserNameById = getUserNameById
    deleteUserFromFamily = deleteUserFromFamily
    addUserName = addUserName
    changeUserCurrency = changeUserCurrency
    getUserCurrency = getUserCurrency
    getDataAboutCurrency = getDataAboutCurrency
    convert = convert
    getUserLanguage = getUserLanguage
    setUserLanguage = setUserLanguage
}
