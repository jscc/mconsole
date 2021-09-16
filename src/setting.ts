export type ConfStruct = {
    name: String,
    match: RegExp,
    style: {
        log: String[],
        error: String[],
        info: String[],
    } | any
}

export const methods = ['log', 'info', 'error', 'warn', 'debug', 'trace']


const modules: ConfStruct[] = [
    {
        name: 'View',
        match: /view/,
        style: {
            log: [
                'color:#fff7f7',
                'background: #8134af',
            ],
            error: [
                'color: red',
                'background: #8134af',
            ]
        }
    },
    {
        name: 'Store',
        match: /store/,
        style: {
            log: [
                'color:#fff7f7',
                'background: #F0B775',
            ]
        }
    },
    {
        name: 'Http',
        match: /net\/http/,
        style: {
            log: [
                'color:#fff7f7',
                'background: #204969',
            ]
        }
    },
    {
        name: 'Login',
        match: /login/,
        style: {
            log: [
                'color:#fff7f7',
                'background: #348498',
            ]
        }
    }
]

modules.forEach(item => item.style.log.push('padding: 8px'))

export default modules