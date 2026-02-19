import env from "../../config/env.js";
import User from "../../model/users.model.js";
import jwt from "jsonwebtoken";

class AuthService {
  async register(userData) {
    try {
      const existingUser = await User.findOne({ email: userData.email });

      if (existingUser) throw new Error("User already exists");

      const newUser = await User.create({ ...userData });

      const token = this.generateAuthToken(newUser);
      return { user: newUser, token };
    } catch (error) {
      console.error(error.message);
      throw new Error("User registration failed");
    }
  }

  async login(userData) {
    try {
      const getUser = await User.findOne({ email: userData.email });

      if (!getUser) throw new Error("User already exists");

      const token = this.generateAuthToken(getUser);
      return { user: getUser, token };
    } catch (error) {
      console.error(error.message);
      throw new Error("User login failed");
    }
  }

  generateAuthToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
    };

    return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "7h" });
  }
}

export default AuthService;
