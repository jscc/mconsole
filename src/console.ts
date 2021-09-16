import { ConfStruct } from "./setting"

export const setup = (conf:ConfStruct[] , methods) => {
    if (!conf || !methods) return
    methods.forEach(method => {
        console[method] = (method => {
            return (...args) => {
                const err = new Error()
                const errInfo = err.stack?.split('at')[2]
                const res = conf.find(item => errInfo.match(item.match)) || conf[0]
                args.unshift(res.name + '\n')
                const palceholder = args.reduce((acc='%c') => acc + ' %s')
                args = [palceholder, res.style[method] || res.style.log, ...args]
                args.push(`\n\n\t\t`, errInfo)
                method.call(console, ...args)
            }
        })(console[method])
    })
}
