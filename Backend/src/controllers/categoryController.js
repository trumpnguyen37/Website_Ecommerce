import apiService from "../services/categoryService"

let getAllCategory = async (req, res) => {
    let data = await apiService.getAllCategory()
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

module.exports = {
    getAllCategory: getAllCategory
}