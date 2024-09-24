import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "not Authorized, login again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "not Authorized, login again 1",
      });
    }
    next();
  } catch (error) {
    res.json({
      success: false,
      message: "not Authorized, login again11",
    });
  }
};
export default adminAuth;
