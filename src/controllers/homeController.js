import homeService from "../services/homeService"

let getTest = async (req, res) =>{
    let data = await homeService.getTestAPI()

    res.status(200).json({
        errCode: data.errCode,
        dataTest: data.data
    })
}

module.exports = {
    getTest: getTest,
}