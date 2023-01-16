import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const token = req.headers["token"];
  try {
    if (!token) {
      res.json({
        message: "authorization required",
      });
    }
    const verifyToken = jwt.verify(token, process.env.SECRETE_KEY);
    if (verifyToken) {
      next();
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
export default protect;
