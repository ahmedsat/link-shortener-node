const jwt = require("jsonwebtoken");
const { NotFoundError } = require("../errors");
const authenticationsMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  if ((!authHeader, !authHeader.startsWith("Bearer ")))
    throw new NotFoundError("UNAUTHORIZED, please login");

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      username: decoded.username,
      id: decoded.id,
    };
  } catch (error) {
    throw new NotFoundError("UNAUTHORIZED, please login");
  }

  next();
};

module.exports = authenticationsMiddleware;
