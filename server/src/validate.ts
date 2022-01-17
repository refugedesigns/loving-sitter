import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateRegister = [
  check("name", "Please enter your name").not().isEmpty(),
  check("email", "Please enter a valid email address").isEmail(),
  check("password", "Please enter a password with 6 or more characters").isLength({min: 6}),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  }
]

export const validateDogsitter = [
  check("isAvailable", "Please provide availability options").not().isEmpty(),
  check("availability", "Please provide available days").not().isEmpty().isObject(),
  check("price", "Please enter a valid number for the price").isNumeric().not().isEmail(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()})
    }
      next()
  }
]

export const validateLogin = [
  check("email", "Please enter a valid email address").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];