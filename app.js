const express = require("express")
const cors = require("cors")
// 导入用户模块
const userRouter = require("./router/user")
const articleRouter = require("./router/article")

const app = express()
app.use(cors()) // 跨域

// 配置 解析表单数据的 中间件 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

app.use("/user", userRouter)
app.use("/article", articleRouter)

app.listen(4000, () => {
    console.log("express at run http://127.0.0.1:4000 ...")
})
