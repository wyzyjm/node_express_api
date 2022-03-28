exports.register = (req, res) => {
    res.status(200).json({
        msg: "注册成功123"
    })
}

exports.login = (req, res) => {
    res.status(200).json({
        msg: "登录成功..."
    })
}
