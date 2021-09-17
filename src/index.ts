
import { setup } from './console'
import conf, { ConfStruct, methods } from './setting'

export const MConsoleConf = conf

export const MConsoleMethods = methods

export const useConf = (consoleConf:ConfStruct[] | any, consoleMethods:String[]) => {
    setup(consoleConf || conf, consoleMethods || methods)
}





