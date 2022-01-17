"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateDogsitter = exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
exports.validateRegister = [
    (0, express_validator_1.check)("name", "Please enter your name").not().isEmpty(),
    (0, express_validator_1.check)("email", "Please enter a valid email address").isEmail(),
    (0, express_validator_1.check)("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        console.log(errors);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    }
];
exports.validateDogsitter = [
    (0, express_validator_1.check)("isAvailable", "Please provide availability options").not().isEmpty(),
    (0, express_validator_1.check)("availability", "Please provide available days").not().isEmpty().isObject(),
    (0, express_validator_1.check)("price", "Please enter a valid number for the price").isNumeric().not().isEmail(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];
exports.validateLogin = [
    (0, express_validator_1.check)("email", "Please enter a valid email address").isEmail(),
    (0, express_validator_1.check)("password", "Password is required").not().isEmpty(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];
