module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          //这里将原始请求url指定到target，并且"/api"重写为"/api",意思是"/api" => "http://localhost:3000/api"
          //比如 "/api/login" => "http://localhost:3000/api/login"
          '^/api': '/api'   
        }
      },
      '/eacyMock': { //easyMock
        target: 'https://easy-mock.com/mock/5bc8391a4645473183fb626d/base',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/eacyMock': ''
        }
      }
    }
  }
}
