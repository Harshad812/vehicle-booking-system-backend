import AuthService from "./auth.service.js";

class AuthController {
  constructor() {
    this.AuthService = new AuthService();
  }

  register = async (req, res, next) => {
    console.log("register", req.body);
    try {
      const newUser = await this.AuthService.register(req.body);

      return res.status(201).json({
        success: true,
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const response = await this.AuthService.login(req.body);

      return res.status(200).json({
        success: true,
        data: response,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
