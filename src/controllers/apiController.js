import apiService from "../services/apiService"


let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        res.status(400).json({
            errCode: 1,
            errMsg: 'Miising input'
        })
    } else {
        let data = await apiService.handleLogin(email, password)
        if (data.errCode === 0) {
            res.cookie('token', data.token);
            res.status(200).json({
                errCode: 0,
                token: data.token
            })
        } else {
            res.status(200).json({
                errCode: data.errCode,
                errMsg: data.errMsg
            })
        }
    }
}

let handleRegister = async (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.name) {
        return res.status(400).json({
            errCode: 1,
            msg: 'Missing required parameters'
        })
    } else {
        let message = await apiService.handleRegister(req.body);
        return res.status(200).json(message)
    }
}

let getAllProduct = async (req, res) => {
    let data = await apiService.getAllProduct()
    res.status(200).json({
        errCode: data.errCode,
        allProduct: data.allProduct
    })
}

let getProductByCategory = async (req, res) => {
    let data = await apiService.getProductByCategory(req.params.name)
    if (data.errCode !== 0) {
        res.status(200).json({
            errCode: data.errCode,
            errMsg: data.errMsg
        })
    } else {
        res.status(200).json({
            errCode: data.errCode,
            listProduct: data.listProduct
        })
    }
}

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    getAllProduct: getAllProduct,
    getProductByCategory: getProductByCategory,
}