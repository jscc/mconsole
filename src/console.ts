import { ConfStruct } from "./setting"

export const setup = (conf: ConfStruct[], methods: String[]) => {
    if (!conf || !methods) return
    methods.forEach((methodStr: String) => {
        // @ts-ignore
        console[methodStr] = ((method: Function) => {
            return (...args: any[]) => {
                const err = new Error();
                const errInfo = err.stack?.split('at')[2]?.replace('console', 'MConsole');
                const res = conf.find(item => errInfo?.match(item.match)) || conf[0];
                args.unshift(' ' + res.name, ' \n ');
                const palceholder = '%c' + [...args].fill(' %s').join('');
                // @ts-ignore
                args = [palceholder, (res.style[methodStr] || res.style.log).join(';'), ...args];
                args.push(`\n\n\t\t`, errInfo);
                method.call(console, ...args);
            }
            // @ts-ignore
        })(console[methodStr])
    })
}
