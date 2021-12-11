"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
exports.validateRegister = [
    (0, express_validator_1.check)("firstName", "Please enter your first name").not().isEmpty(),
    (0, express_validator_1.check)("lastName", "Please enter your last name").not().isEmpty(),
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
