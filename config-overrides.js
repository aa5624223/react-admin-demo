const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
  //针对antd库按需打包：根据import打包
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    //modifyVars: { '@primary-color': '#1DA57A' },
  })
);