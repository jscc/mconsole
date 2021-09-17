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
        name: 'MConsole',
        match: /\//,
        style: {
            log: [
                'color:#fff7f7',
                'background: #8134af',
                'padding: 8px'
            ],
            error: [
                'color: red',
                'background: #8134af',
                'padding: 8px'
            ]
        }
    }
]

export default modules