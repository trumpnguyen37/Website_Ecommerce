import productService from "../services/productService"


let getAllProduct = async (req, res) => {
    let data = await productService.getAllProduct()
    if (data.errCode !== 0) {
        res.status(200).json({
            errCode: data.errCode,
            errMsg: data.errMsg
        })
    } else {
        res.status(200).json({
            errCode: data.errCode,
            allProduct: data.allProduct
        })
    }
}

let getProductByCategory = async (req, res) => {
    let data = await productService.getProductByCategory(req.params.name)
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

let handleCreateProduct = async (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.idCategory) {
        return res.status(400).json({
            errCode: 1,
            msg: 'Missing required parameters'
        })
    } else {
        let message;
        if(req.file){
            let img = req.file.path
            message = await productService.handleCreateProduct(req.body, img);
        }else{
            message = await productService.handleCreateProduct(req.body, null);
        }
        return res.status(200).json(message)
    }
}

module.exports = {
    getAllProduct: getAllProduct,
    getProductByCategory: getProductByCategory,
    handleCreateProduct: handleCreateProduct,
    
}