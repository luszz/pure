import { sync as commandExistsSync } from 'command-exists'

const promise: Promise<'pnpm' | 'npm'> = new Promise((resolve, reject) => {
    if(!commandExistsSync('pnpm')) {
        resolve('npm')
    }

    return resolve('pnpm')
})

export default promise