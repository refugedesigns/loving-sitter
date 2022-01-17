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
const mongoose_1 = __importDefault(require("mongoose"));
const BaseUser_1 = __importDefault(require("./models/BaseUser"));
const DogSitter_1 = __importDefault(require("./models/DogSitter"));
const Availability_1 = __importDefault(require("./models/Availability"));
const Conversation_1 = __importDefault(require("./models/Conversation"));
const Message_1 = __importDefault(require("./models/Message"));
const dotenv_1 = __importDefault(require("dotenv"));
const casual_1 = __importDefault(require("casual"));
dotenv_1.default.config();
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGO_URI);
            yield mongoose_1.default.connection.db.dropDatabase();
            yield Promise.all([
                BaseUser_1.default.create({
                    name: casual_1.default.full_name,
                    email: casual_1.default.email,
                    password: "123456",
                    city: casual_1.default.city,
                    address: casual_1.default.address,
                    profilePhoto: "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914468/messenger/8bc2e13b8ab74765fd57f0880f318eed1c3fb001_fownwt.png",
                    phoneNumber: casual_1.default.phone,
                }),
                BaseUser_1.default.create({
                    name: casual_1.default.full_name,
                    email: casual_1.default.email,
                    password: "123456",
                    city: casual_1.default.city,
                    address: casual_1.default.address,
                    profilePhoto: "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/6c4faa7d65bc24221c3d369a8889928158daede4_vk5tyg.png",
                    phoneNumber: casual_1.default.phone,
                }),
                BaseUser_1.default.create({
                    name: casual_1.default.full_name,
                    email: casual_1.default.email,
                    password: "123456",
                    city: casual_1.default.city,
                    address: casual_1.default.address,
                    profilePhoto: "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/68f55f7799df6c8078a874cfe0a61a5e6e9e1687_e3kxp2.png",
                    phoneNumber: casual_1.default.phone,
                }),
                BaseUser_1.default.create({
                    name: casual_1.default.full_name,
                    email: casual_1.default.email,
                    password: "123456",
                    city: casual_1.default.city,
                    address: casual_1.default.address,
                    profilePhoto: "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914468/messenger/d9fc84a0d1d545d77e78aaad39c20c11d3355074_ed5gvz.png",
                    phoneNumber: casual_1.default.phone,
                }),
                BaseUser_1.default.create({
                    name: casual_1.default.full_name,
                    email: casual_1.default.email,
                    password: "123456",
                    city: casual_1.default.city,
                    address: casual_1.default.address,
                    profilePhoto: "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914468/messenger/8bc2e13b8ab74765fd57f0880f318eed1c3fb001_fownwt.png",
                    phoneNumber: casual_1.default.phone,
                }),
                BaseUser_1.default.create({
                    name: casual_1.default.full_name,
                    email: casual_1.default.email,
                    password: "123456",
                    city: casual_1.default.city,
                    address: casual_1.default.address,
                    profilePhoto: "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/9e2972c07afac45a8b03f5be3d0a796abe2e566e_ttq23y.png",
                    phoneNumber: casual_1.default.phone,
                }),
            ]);
            const demoUser = yield BaseUser_1.default.create({
                name: casual_1.default.full_name,
                email: "demo@lovingsitter.com",
                password: "123456",
                city: casual_1.default.city,
                address: casual_1.default.address,
                profilePhoto: "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/68f55f7799df6c8078a874cfe0a61a5e6e9e1687_e3kxp2.png",
                phoneNumber: casual_1.default.phone,
            });
            const availability1 = yield Availability_1.default.create({
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: false,
                friday: false,
                saturday: true,
                sunday: true,
            });
            const dogsitter1 = yield DogSitter_1.default.create({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                password: "123456",
                profilePhoto: "https://picsum.photos/200",
                city: casual_1.default.city,
                address: casual_1.default.address,
                phoneNumber: casual_1.default.phone,
                isAvailable: true,
                price: casual_1.default.integer(50, 200),
                availability: availability1._id,
            });
            const availability2 = yield Availability_1.default.create({
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true,
                saturday: false,
                sunday: false,
            });
            const dogsitter2 = yield DogSitter_1.default.create({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                password: "123456",
                profilePhoto: "https://picsum.photos/200",
                city: casual_1.default.city,
                address: casual_1.default.address,
                phoneNumber: casual_1.default.phone,
                isAvailable: true,
                price: casual_1.default.integer(50, 200),
                availability: availability2._id,
            });
            const availability3 = yield Availability_1.default.create({
                monday: false,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: false,
                saturday: true,
                sunday: false,
            });
            const dogsitter3 = yield DogSitter_1.default.create({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                password: "123456",
                profilePhoto: "https://picsum.photos/200",
                city: casual_1.default.city,
                address: casual_1.default.address,
                phoneNumber: casual_1.default.phone,
                isAvailable: true,
                price: casual_1.default.integer(50, 200),
                availability: availability3._id,
            });
            const availability4 = yield Availability_1.default.create({
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: false,
                friday: false,
                saturday: true,
                sunday: false,
            });
            yield DogSitter_1.default.create({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                password: "123456",
                profilePhoto: "https://picsum.photos/200",
                city: casual_1.default.city,
                address: casual_1.default.address,
                phoneNumber: casual_1.default.phone,
                isAvailable: true,
                price: casual_1.default.integer(50, 200),
                availability: availability4._id,
            });
            const availability5 = yield Availability_1.default.create({
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: false,
                friday: false,
                saturday: true,
                sunday: true,
            });
            yield DogSitter_1.default.create({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                password: "123456",
                profilePhoto: "https://picsum.photos/200",
                city: casual_1.default.city,
                address: casual_1.default.address,
                phoneNumber: casual_1.default.phone,
                isAvailable: true,
                price: casual_1.default.integer(50, 200),
                availability: availability5._id,
            });
            const availability6 = yield Availability_1.default.create({
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: true,
            });
            yield DogSitter_1.default.create({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                password: "123456",
                profilePhoto: "https://picsum.photos/200",
                city: casual_1.default.city,
                address: casual_1.default.address,
                phoneNumber: casual_1.default.phone,
                isAvailable: true,
                price: casual_1.default.integer(50, 200),
                availability: availability6._id,
            });
            const availability7 = yield Availability_1.default.create({
                monday: true,
                tuesday: true,
                wednesday: false,
                thursday: true,
                friday: true,
                saturday: false,
                sunday: false,
            });
            yield DogSitter_1.default.create({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                password: "123456",
                profilePhoto: "https://picsum.photos/200",
                city: casual_1.default.city,
                address: casual_1.default.address,
                phoneNumber: casual_1.default.phone,
                isAvailable: true,
                price: casual_1.default.integer(50, 200),
                availability: availability7._id,
            });
            const availability8 = yield Availability_1.default.create({
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: false,
                friday: false,
                saturday: true,
                sunday: true,
            });
            yield DogSitter_1.default.create({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                password: "123456",
                profilePhoto: "https://picsum.photos/200",
                city: casual_1.default.city,
                address: casual_1.default.address,
                phoneNumber: casual_1.default.phone,
                isAvailable: true,
                price: casual_1.default.integer(50, 200),
                availability: availability8._id,
            });
            const availability9 = yield Availability_1.default.create({
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: false,
                saturday: false,
                sunday: true,
            });
            yield DogSitter_1.default.create({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                password: "123456",
                profilePhoto: "https://picsum.photos/200",
                city: casual_1.default.city,
                address: casual_1.default.address,
                phoneNumber: casual_1.default.phone,
                isAvailable: true,
                price: casual_1.default.integer(50, 200),
                availability: availability9._id,
            });
            const conversation1 = yield Conversation_1.default.create({
                members: [demoUser._id, dogsitter1._id],
            });
            yield Message_1.default.create({
                conversationId: conversation1._id,
                sender: demoUser._id,
                recipient: dogsitter1._id,
                text: "Hey, hope you're doing great. Great to meet you.",
            });
            yield Message_1.default.create({
                conversationId: conversation1._id,
                sender: dogsitter1._id,
                recipient: demoUser._id,
                text: "Yeah, nice to meet you.",
            });
            yield Message_1.default.create({
                conversationId: conversation1._id,
                sender: demoUser._id,
                recipient: dogsitter1._id,
                text: "Is it possible to come watch my dog on sunday",
            });
            yield Message_1.default.create({
                conversationId: conversation1._id,
                sender: dogsitter1._id,
                recipient: demoUser._id,
                text: "Sure, why not.",
            });
            const conversation2 = yield Conversation_1.default.create({
                members: [demoUser._id, dogsitter2._id],
            });
            yield Message_1.default.create({
                conversationId: conversation2._id,
                sender: demoUser._id,
                recipient: dogsitter2._id,
                text: "Hello good day. :)"
            });
            yield Message_1.default.create({
                conversationId: conversation2._id,
                sender: dogsitter2._id,
                recipient: demoUser._id,
                text: "Hi nice to meet you. :)"
            });
            yield Message_1.default.create({
                conversationId: conversation2._id,
                sender: demoUser._id,
                recipient: dogsitter2._id,
                text: "I live in Loungmount and I need someone to take care of my dog",
            });
            yield Message_1.default.create({
                conversationId: conversation2._id,
                sender: dogsitter2._id,
                recipient: demoUser._id,
                text: "No problem, I can do that. What time?",
            });
            yield Message_1.default.create({
                conversationId: conversation2._id,
                sender: demoUser._id,
                recipient: dogsitter2._id,
                text: "2pm on weekends",
            });
            const conversation3 = yield Conversation_1.default.create({
                members: [demoUser._id, dogsitter3._id]
            });
            yield Message_1.default.create({
                conversationId: conversation3._id,
                sender: demoUser._id,
                recipient: dogsitter3._id,
                text: "Hi, I remember we talked last time"
            });
            yield Message_1.default.create({
                conversationId: conversation3._id,
                sender: dogsitter3._id,
                recipient: demoUser._id,
                text: "Yeah, do you need help with your dog again?"
            });
            yield Message_1.default.create({
                conversationId: conversation3._id,
                sender: demoUser._id,
                recipient: dogsitter3._id,
                text: "Great catch! I will be going a workshop on monday and I need someone to take care of Jack.",
            });
            console.log("seeded all users and availability days");
        }
        catch (error) {
            console.error(error);
            process.exitCode = 1;
        }
        finally {
            console.log("closing db connection");
            yield mongoose_1.default.disconnect();
            console.log("db connection closed");
        }
    });
}
if (module === require.main) {
    seed();
}
