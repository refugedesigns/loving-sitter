"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReview = exports.getDogsitter = exports.getAllDogsitters = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const DogSitter_1 = __importDefault(require("../models/DogSitter"));
const Review_1 = __importDefault(require("../models/Review"));
const customError_1 = require("../customError");
exports.getAllDogsitters = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const dogsitters = yield DogSitter_1.default.find()
        .populate("availability")
        .populate("reviews")
        .select("-password -payments -imageGallery");
    res.status(200).json({
        success: [...dogsitters],
    });
}));
exports.getDogsitter = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dogsitter = yield DogSitter_1.default.findById(id)
        .populate("availability")
        .populate({
        path: "reviews",
        populate: {
            path: "sender",
            model: "BaseUser",
            select: "-password -imageGallery -payments -email",
        },
    });
    if (!dogsitter) {
        throw new customError_1.StatusError("No user found!", 422);
    }
    res.status(200).json({
        success: {
            user: {
                _id: dogsitter._id,
                name: dogsitter.name,
                email: dogsitter.email,
                isAvailable: dogsitter.isAvailable,
                isDogsitter: dogsitter.isDogsitter,
                imageGallery: dogsitter.imageGallery,
                payments: dogsitter.payments,
                availability: dogsitter.availability,
                price: dogsitter.price,
                city: dogsitter.city,
                profilePhoto: dogsitter.profilePhoto,
                reviews: dogsitter.reviews,
            },
        },
    });
}));
exports.postReview = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const { rating, message } = req.body;
    const dogsitter = yield DogSitter_1.default.findById(id);
    if (!dogsitter) {
        throw new customError_1.StatusError("Something is wrong, this user is not available", 400);
    }
    // const reviewed = await Review.findOne({
    //   sender: req.userId as Condition<{ type: ObjectId; ref: string }>,
    //   recipient: id as Condition<{ type: ObjectId; ref: string }>,
    // });
    // if (reviewed) {
    //   throw new StatusError("You can only review a user once.", 401);
    // }
    const review = yield Review_1.default.create({
        sender: req.userId,
        recipient: id,
        message: message,
        rating: rating,
    });
    dogsitter.reviews.push(review._id);
    yield dogsitter.save();
    const savedReview = yield Review_1.default.findById(review._id).populate("sender");
    (_a = req.io) === null || _a === void 0 ? void 0 : _a.emit("review", {
        review: Object.assign({}, savedReview._doc),
    });
    res.status(201).json({ review });
}));
