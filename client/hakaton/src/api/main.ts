import { addUserName } from './account/addUserName'
import { authorization } from './account/authorization'
import { registration } from './account/registration'
import { addUserInFamily } from './family/addUserInFamily'
import { createFamily } from './family/createFamily'
import { deleteUserFromFamily } from './family/deleteUserFromFamily'
import { getUserNameById } from './family/getUserNameById'
import { getUsersInFamily } from './family/getUsersInFamily'
import { createTransaction } from './transactions/createTransaction'
import { getAllTransactions } from './transactions/getAllTransactions'

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
}
