import shopService from "../services/shopService";

let handleAddCategory = async (req, res) => {
  if (!req.cookies) {
    return res.status(400).json({
      errCode: 1,
      errMsg: "Access Denied",
    });
  } else if (!req.cookies.token) {
    return res.status(400).json({
      errCode: 2,
      errMsg: "Access Denied",
    });
  } else {
    let tokenUser = req.cookies.token;
    let data = await shopService.handleAddCategory(
      req.body.nameCategory,
      tokenUser
    );
    if (data.errCode != 0) {
      return res.status(400).json({
        errCode: data.errCode,
        errMsg: data.errMsg,
      });
    }
    return res.status(200).json({
      errCode: data.errCode,
      msg: data.msg,
    });
  }
};

module.exports = {
  handleAddCategory: handleAddCategory,
};
