const path = require('path');

module.exports = {
    sassConfig: {
        includePaths: [
            path.resolve(__dirname, './node_modules/')
        ],
        precision: 5,
    },
    cssLoaderConfig: {
        exportLocalsStyle: 'camelCase'
    }
};
