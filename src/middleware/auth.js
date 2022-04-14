const authenticationsMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  if ((!authHeader, !authHeader.startsWith("Bearer "))) next();
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      username: decoded.username,
      id: decoded.id,
    };
  } catch (error) {
    req.authError = error;
    next();
  }

  next();
};

module.exports = authenticationsMiddleware;
