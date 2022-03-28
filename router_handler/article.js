// const db = require("../db")

// 按照升序排列 查找没有被删除的 分类
/** 
    const sql = "select * from article where is_delete=0  order by id asc"
    db.query(sql, (err, res) => {
        if (err) return res.status(500).json({ msg: "error" })
    })
 */

/**
查重
    const sql = "select * from article where name=? or alias= ?"

    db.query(sql,[req.body.name, req.body.alias],(err,res)=>{
        if(err) return rea.cc(err)
        res.length === 2  name 和 alias 都被占用
        res.length === 1 &&  res[0].name === req.body.name && res[0].alias === req.body.alias 被同一条数据, 同时占用
        res.length === 1 &&  res[0].alias === req.body.alias  分类别名被 占用
        res.length === 1 &&  res[0].name === req.body.name  分类名称被 占用
    })
 */

/**
     删除, 实际是更新
     const sql = "update article set is_delete=1 wherr id=?" 
     db.query(sql,req.params.id,(err,res)=>{})
*/
/**
     详情 
     const sql = "select * from article  wherr category='Yohoo' and service='uvad'" 
     db.query(sql,[req.body.category,req.body.service],(err,res)=>{})
*/
/**
     更新 
     根据用户提交过的信息, 先查重, 
    const chachong = "select * from article where category<>? and service<>?"
    如果有结果, 就是被占用
    更新文章
     const sql = "update   article   set is_delete=1 wherr category='Yohoo' and service='uvad'" 
     db.query(sql,[req.body.category,req.body.service],(err,res)=>{})
*/
exports.cate = (req, res) => {
    // db.query(sql, (err, res) => {
    //     if (err) return res.status(500).json({ msg: "error" })

    // })
    res.status(200).json({
        status: 0,
        msg: "文章分类获取成功!",
        data: ["文章1", "文章2", "文章3", "文章4", "文章5", "文章6"]
    })
}

exports.addCate = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        status: 0,
        msg: "新增成功"
    })
}
exports.deleteCate = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        status: 0,
        msg: "删除成功"
    })
}
exports.detail = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        status: 0,
        msg: "获取详情成功"
    })
}
exports.updateCate = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        status: 0,
        msg: "更新详情成功"
    })
}
