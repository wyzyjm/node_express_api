// 文章分类

const express = require("express")
const router = express.Router()

const { cate, detail, addCate, deleteCate, updateCate } = require("../router_handler/article")

router.get("/cate", cate) //  获取
router.get("/detail", detail) //  获取
router.post("/addCate", addCate) // 添加
router.post("/deleteCate", deleteCate) // 删除
router.post("/updateCate", updateCate) // 删除

module.exports = router
