import db from "../models/index"

let getAllCategory = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allCategory = await db.Category.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            if (allCategory.length <= 0) {
                resolve({
                    errCode: 1,
                    errMsg: "No Categories"
                })
            } else {
                resolve({
                    errCode: 0,
                    allCategory: allCategory
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

let handleCreateCategory = (name, img) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Category.create({
                name: name,
                image: img
            })
            resolve({
                errCode: 0,
                msg: 'Create Category Successful'
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllCategory: getAllCategory,
    handleCreateCategory: handleCreateCategory
}