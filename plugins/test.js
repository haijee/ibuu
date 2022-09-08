class BannerWebpackPlugin {
    // 获取参数
    constructor(options = {}) {
        this.options = options
    }
    apply(compiler) {
        compiler.hooks.compile.tap('MyPlugin', (params) => {
            console.log('以同步方式触及 compile 钩子。');
        });
    }
}

module.exports = BannerWebpackPlugin