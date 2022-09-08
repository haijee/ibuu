
const schema = {
    type: 'object', //options是一个对象
    properties: {
        //author是一个字符串
        author: {
            type: 'string'
        },
        //email是一个字符串
        email: {
            type: 'string'
        }
    }
}

module.exports = function (content) {
    const options = this.getOptions(schema) || {}
    const { author = 'null', email = 'null' } = options
    const callback = this.async()
    // callback(error,content,map,meta)
    console.log('callback',callback)
    const newContent = `
        这是测试内容开始
        ${content}
        这是测试内容最后
    `
    return newContent;
}
