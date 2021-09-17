const TypeParam = {
    'object': ' %O',
    'string': ' %s',
    'number': ' %d',
};
const setup = (conf, methods) => {
    if (!conf || !methods)
        return;
    methods.forEach((methodStr) => {
        // @ts-ignore
        console[methodStr] = ((method) => {
            return (...args) => {
                const err = new Error();
                const errInfo = err.stack?.split('at')[2]?.replace('console', 'MConsole');
                const res = conf.find(item => errInfo?.match(item.match)) || conf[0];
                args.unshift(' ' + res.name, ' \n ');
                let palceholder = '%c';
                args.forEach(p => palceholder += TypeParam[typeof p]);
                // const palceholder = '%c' + [...args].fill(' %s').join('');
                // @ts-ignore
                args = [palceholder, (res.style[methodStr] || res.style.log).join(';'), ...args];
                args.push(`\n\n\t\t`, errInfo);
                method.call(console, ...args);
            };
            // @ts-ignore
        })(console[methodStr]);
    });
};const methods = ['log', 'info', 'error', 'warn', 'debug', 'trace'];
const modules = [
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
];const MConsoleConf = modules;
const MConsoleMethods = methods;
const useConf = (consoleConf, consoleMethods) => {
    setup(consoleConf || modules, consoleMethods || methods);
};export{MConsoleConf,MConsoleMethods,useConf};