import shopService from "../services/shopService";

let handleAddCategory = async (req, res) => {
  if (!req.cookies) {
    return res.status(400).json({
      errCode: 1,
      msg: "Access Denied",
    });
  } else if (!req.cookies.token) {
    return res.status(400).json({
      errCode: 2,
      msg: "Access Denied",
    });
  } else {
    let tokenUser = req.cookies.token;
    let data = await shopService.handleAddCategory(
      req.body.nameCategory,
      tokenUser
    );
    return res.status(200).json(data);
  }
};

module.exports = {
  handleAddCategory: handleAddCategory,
};
