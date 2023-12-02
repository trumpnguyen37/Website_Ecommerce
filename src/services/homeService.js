let getTestAPI = () => {
    return new Promise( async (resolve, rejects) => {
        try {
            let data = "Hello world";
            resolve({
                errCode: 0,
                data : data
            })
        } catch (error) {
            rejects(error);
        }
    })
}

module.exports = {
    getTestAPI: getTestAPI,
}