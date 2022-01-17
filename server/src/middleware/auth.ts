import jwt from "jsonwebtoken"
import { RequestHandler } from "express"

const protect: RequestHandler = (req, res, next) => {
  const token = (req.cookies as { token: string }).token

  if(!token) return res.status(401).send("No token, authorization denied.")

  try {
    const decoded = jwt.verify(token, <string>process.env.JWT_SECRET) as { id: string; iat: number; exp: number}
    
    req.userId = decoded.id
  } catch (error) {
    res.status(401).send("Invalid token.")
  }

  next()
}

export default protect

