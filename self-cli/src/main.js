// console.log('欢迎来创建!')

// 动态获取版本号
const { program } = require('commander');
const { version } = require('./constants')
const path = require('path')
// program.version('0.0.1').parse(process.argv)
// program.version(version).parse(process.argv)

// 配置指令命令
const mapActions = {
    create: {
        alias: 'c',
        description: 'create a project',
        examples: ['mycli create <project-name>']
    },
    config: {
        alias: 'conf',
        description: 'config project variable',
        examples: ['mycli confit set <k><v>', 'mycli config get <k>']
    },
    "*": {
        alias: "",
        description: "command not found",
        examples: []
    }
}

// 循环创建命令
Reflect.ownKeys(mapActions).forEach(action => {
    program
        .command(action)
        .alias(mapActions[action].alias)
        .description(mapActions[action].description)
        .action(()=> {
            if (action === '*') {
                // 访问不到对用的命令
                console.log(mapActions[action].description)
            } else {
                // 命令截取
                // console.log(action)
                require(path.resolve(__dirname, action))(...process.argv.slice(3))

            }
        })
})

// 监听用户的help事件
program.on("--help", () => {
    console.log("\nExamples：")
    Reflect.ownKeys(mapActions).forEach(action => {
        const examples = mapActions[action].examples
        examples.forEach(example => {
            console.log(example)
        })
    })
})
program.version(version);
program.parse(process.argv);  // 相当于函数的调用,不调用不能生效