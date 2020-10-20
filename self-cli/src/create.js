const axios = require('axios')
const ora = require('ora')
const Inquirer = require('inquirer')
// 临时的目录
const { downloadDirectory }  = require('./constants')
const { promisify } = require('util')
let downLoadGitRepo = require('download-git-repo')
downLoadGitRepo = promisify(downLoadGitRepo) // 包装成ES6
let ncp = require('ncp')
ncp = promisify(ncp)
const path = require('path')

// 获取模板信息
const fetchRepoList = async () => {
    try {
        // TODO: 这个地址的改
        const { data } = await axios.get('https://api.github.com/orgs/td-clil/repos')
        return data
    } catch (e) {
        console.log('>>>>>>>>', e)
    }
    // return data
}
// 封装loading
const waitFnloading = (fn, message) => async (...args) => {
    // 开始加载loading
    const spinner = ora(message)
    spinner.start()
    let repos = await fn(...args)
    // 结束加载loading
    spinner.succeed()
    return repos
}
const fetchTagList = async (repo) => {
    const { data } = axios.get(`https://api.github.com/orgs/${repo}/repos`)     
    return data
}
const download = async (repo, tag) => {
    let api = `td-cli/${repo}`
    if (tag) {
        api == `#${tag}`
    }
    const dest = `${downloadDirectory }/${repo}`
    await downLoadGitRepo(api, dest)
    return dest
}
module.exports = async function (proName)　{
    // console.log(proName)
    // 1获取项目模板
    let reops = await waitFnloading(fetchRepoList, 'fetching template......')   
    // repos = repos.map((item) => {
    //     item.name
    // })
    const { repo } = await Inquirer.prompt({
        name: 'repo', // 选择后的结果
        type: 'list', // 什么方式展现
        message: 'please  choise a template to create project',
        choices: ['repos1', 'repos2'], // repos 选择项

    })
    console.log(repo)
    // 2获取对应的版本号
    let tags = await waitFnloading(fetchTagList, 'fetcing tags........')(repo)
    tags = tags.map(item => item.name)
    const { tag } = await Inquirer.prompt({
        ame: 'tag',
        type: 'list',
        message: 'please choise a tag to create project',
        chices: ['tag1', 'tag2'] // tags
    })
    console.log(tag)
    // 3.下载项目，返回一个临时的存放目录
    const result = await waitFnloading(download, 'download template......')(repo, tag)
    // 4.拷贝文件
    await ncp(result, path.resolve(__dirname, proName))
}