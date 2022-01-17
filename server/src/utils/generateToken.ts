import jwt from "jsonwebtoken"
import { ObjectId } from "mongoose"

const generateToken = (id: ObjectId) => {
  return jwt.sign({id}, <string>process.env.JWT_SECRET, {expiresIn: "1hr"})
}

export default generateToken