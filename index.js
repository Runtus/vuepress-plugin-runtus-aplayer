const path = require('path')

module.exports = options => {
    return {
        extendPageData ($page) {
            $page.audioSetting = options
        },
        enhanceAppFiles: [
            path.resolve(__dirname, 'enhanceAppFile.js')
        ],
        globalUIComponents: 'Aplayer'
    }
}