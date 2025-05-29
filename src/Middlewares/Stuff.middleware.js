import Jwt from "../Utils/Jwt.js";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token taqdim etilmagan yoki noto‘g‘ri formatda" });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = Jwt.verify(token);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({ error: "Yaroqsiz token" });
  }
};

export default authMiddleware;
