import categoryService from "../services/categoryService"

let getAllCategory = async (req, res) => {
    let data = await categoryService.getAllCategory()
    if (data.errCode !== 0) {
        res.status(200).json({
            errCode: data.errCode,
            errMsg: data.errMsg
        })
    } else {
        res.status(200).json({
            errCode: data.errCode,
            allCategory: data.allCategory
        })
    }
}

let handleCreateCategory = async (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            errCode: 1,
            msg: 'Missing required parameters'
        })
    } else {
        let message;
        if (req.file) {
            let img = req.file.path
            message = await categoryService.handleCreateCategory(req.body.name, img);
        } else {
            message = await categoryService.handleCreateCategory(req.body.name, null);
        }
        return res.status(200).json(message)
    }
}

module.exports = {
    getAllCategory: getAllCategory,
    handleCreateCategory: handleCreateCategory
}