import authService from "../services/authService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    res.status(400).json({
      errCode: 1,
      errMsg: "Miising input",
    });
  } else {
    let data = await authService.handleLogin(email, password);
    if (data.errCode === 0) {
      res.cookie("token", data.token);
      res.status(200).json({
        errCode: 0,
        token: data.token,
        role: data.role,
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
  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.name ||
    !req.body.role
  ) {
    return res.status(400).json({
      errCode: 1,
      msg: "Missing required parameters",
    });
  } else {
    let message = await authService.handleRegister(req.body);
    return res.status(200).json(message);
  }
};

let handleConfirmRegister = async (req, res) => {
  let token = req.params.token;
  let data = await authService.confirmRegister(token);
  if (data.errCode != 0) {
    return res.status(400).json({
      errCode: data.errCode,
      errMsg: data.errMsg,
    });
  }
  return res.status(200).json({
    errCode: data.errCode,
    data: data,
  });
};

module.exports = {
  handleLogin: handleLogin,
  handleRegister: handleRegister,
  handleConfirmRegister: handleConfirmRegister,
};
