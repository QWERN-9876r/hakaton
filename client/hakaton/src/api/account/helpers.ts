import { createHash } from 'crypto'

const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

export const isValidEmail = (email: string) => EMAIL_REGEXP.test(email)

export const sha256 = (value: string) => createHash('sha256').update(value).digest('hex')
