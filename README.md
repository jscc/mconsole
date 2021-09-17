# MConsole

### Effect

[![4MGptK.png](https://z3.ax1x.com/2021/09/17/4MGptK.png)](https://imgtu.com/i/4MGptK)

### Install

```shell
npm install @jscc/mconsole -S
```

### Usage

```typescript
import  { useConf } from "./../lib/console.esm.js"

useConf([
    {
        name: 'Module 1',
        match: /module1/,
        style: {
            log: [
                'color:#fff7f7',
                'background: #a39391',
                'padding: 8px'
            ],
            info: [
                'color:#fff7f7',
                'background: #ecd6c7',
                'padding: 8px'
            ],
            error: [
                'color: #fff7f7',
                'background: #e79686',
                'padding: 8px'
            ]
        }
    },
    {
        name: 'Module 2',
        match: /module2/,
        style: {
            log: [
                'color:#fff7f7',
                'background: #00a03e',
                'padding: 8px'
            ],
            info: [
                'color:#fff7f7',
                'background: #24a8ac',
                'padding: 8px'
            ],
            error: [
                'color: red',
                'background: #0087cb',
                'padding: 8px'
            ]
        }
    },
    {
        name: 'Module 3',
        match: /module3/,
        style: {
            log: [
                'color:#fff7f7',
                'background: #ffb6b9',
                'padding: 8px'
            ],
            info: [
                'color:#fff7f7',
                'background: #bbded6',
                'padding: 8px'
            ],
            error: [
                'color: red',
                'background: #fae3d9',
                'padding: 8px'
            ]
        }
    }
], ['log', 'info', 'error'])
```

### Explain

- name : custom name

- match :  matches the file path of a print message
