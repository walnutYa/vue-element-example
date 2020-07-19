# vue-element-example

> 简述：此项目搭建用的是 Vue-cli4.4.0, 如果你已经安装过vue-cli2的话, 你得先卸载掉. 然后重新安装 Vue-cli4.4.0. 这个项目只是一个简单的小Demo(脚手架)。

## 卸载Vue-cli2(根据自己喜好需求网速自行判断, 选择一下任意一条卸载命令即可)
```
npm uninstall vue-cli -g
cnpm uninstall vue-cli -g
yarn global remove vue-cli
```

## 安装Vue-cli3(根据自己喜好需求网速自行判断, 选择一下任意一条卸载命令即可. 执行完一下命令后安装的可能不一定是Vue-cli4.4.0, 但只要是Vue-cli3以上版本就行)
```
npm install -g @vue/cli
cnpm install -g @vue/cli
yarn global add @vue/cli
```

## 安装依赖(根据自己喜好需求网速自行判断, 选择一下任意一条卸载命令即可)
```
npm i
cnpm i
yarn
```

### 直接运行(根据自己喜好需求网速自行判断, 选择一下任意一条卸载命令即可, 然后访问: localhost:7777 地址端口可在vue.config.js里面自行修改)
```
npm run serve
yarn serve
```

### 开发环境运行(根据自己喜好需求网速自行判断, 选择一下任意一条卸载命令即可)
```
npm run serve:dev
yarn serve:dev
```

### 测试环境运行(根据自己喜好需求网速自行判断, 选择一下任意一条卸载命令即可)
```
npm run serve:test
yarn serve:test
```

### 生产环境运行(根据自己喜好需求网速自行判断, 选择一下任意一条卸载命令即可)
```
npm run serve:prod
yarn serve:prod
```

### 生产环境打包(根据自己喜好需求网速自行判断, 选择一下任意一条卸载命令即可)
```
npm run build
yarn build
```

### 程序修复程序自己能确定修复的语法错误
```
npm run lint
yarn lint
```

### 其他命令执行可在package.json文件的scripts对象里面自行添加配置

### 其他自定义配置可访问(可自行创建vue.config.js文件进行配置)
See [Configuration Reference](https://cli.vuejs.org/config/).
