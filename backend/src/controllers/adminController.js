import adminService from "../services/adminService";

let handleCreateShop = async (req, res) => {
  if (!req.body.idAccount) {
    return res.status(400).json({
      errCode: 1,
      msg: "Missing required parameters",
    });
  } else {
    let message;
    message = await adminService.handleCreateShop(req.body);
    return res.status(200).json(message);
  }
};

let handleCreateCategory = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      errCode: 1,
      msg: "Missing required parameters",
    });
  } else {
    let message;
    if (req.file) {
      let img = req.file.path.slice(4);
      message = await adminService.handleCreateCategory(req.body.name, img);
    } else {
      message = await adminService.handleCreateCategory(req.body.name, null);
    }
    return res.status(200).json(message);
  }
};

let handleGetAllCategory = async (req, res) => {
  let data = await adminService.getAllCategory();
  if (data.errCode !== 0) {
    res.status(200).json({
      errCode: data.errCode,
      errMsg: data.errMsg,
    });
  } else {
    res.status(200).json({
      errCode: data.errCode,
      allCategory: data.allCategory,
    });
  }
};

module.exports = {
  handleCreateShop: handleCreateShop,
  handleCreateCategory: handleCreateCategory,
  handleGetAllCategory: handleGetAllCategory,
};
