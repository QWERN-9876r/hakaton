import { createHash } from 'crypto'

export function sha256(value: string) {
    return createHash('sha256').update(value).digest('hex')
}
