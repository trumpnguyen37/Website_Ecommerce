import authService from "../services/authService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    res.status(400).json({
      errCode: 1,
      errMsg: "Missing input",
    });
  } else {
    let data = await authService.handleLogin(email, password);
    if (data.errCode === 0) {
      res.status(200).json({
        errCode: 0,
        token: data.token,
      });
    } else {
      res.status(200).json({
        errCode: data.errCode,
        errMsg: data.errMsg,
      });
    }
  }
};

let handleRegister = async (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.name) {
    console.log(req.body);
    return res.status(400).json({
      errCode: 1,
      msg: "Missing required parameters",
    });
  } else {
    let message = await authService.handleRegister(req.body);
    return res.status(200).json(message);
  }
};

module.exports = {
  handleLogin: handleLogin,
  handleRegister: handleRegister,
};
