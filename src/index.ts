
import { setup } from './console'
import conf, { ConfStruct, methods } from './setting'

export const MConsoleConf = conf

export const MConsoleMethods = methods

export class MConsole {
    constructor(
        consoleConf:ConfStruct[] = conf, 
        consoleMethods:String[] = methods
    ) {
        setup(consoleConf, consoleMethods)
    }
}




