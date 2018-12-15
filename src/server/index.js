const Koa = require('koa')
const route = require('koa-route')
const mysql = require('mysql')

// 连接数据库
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'vue'
})
connection.connect()

const app = new Koa()

const main = ctx => {
  ctx.response.body = 'Hello World'
}

const login = async ctx => {
  let username = ctx.request.query.userName
  let password = ctx.request.query.passWord

  let query = ()=>{
    return new Promise((resolve,reject)=>{
      connection.query('SELECT * from users',(err,data) => {
        if(err){
            resolve({
                message: err.message
            })
        }
        resolve(data);
      })
    })
  }
  let result = await query();
  result = JSON.parse(JSON.stringify(result))
  console.log(result)
  result.forEach((item, index) => {
    if (username === item.username && password === item.password) {
      let userInfo = {
        status: 0,
        userId: item.id,
        username: item.username
      }
      console.log(userInfo)
      ctx.response.body = userInfo;
    }
  })
}

app.use(route.get('/api', main))
app.use(route.get('/api/login', login))
app.listen(3000)

console.log('Server is running at port 3000')
console.log('open http://localhost:3000')
