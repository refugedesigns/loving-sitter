import mongoose from "mongoose";
import BaseUser from "./models/BaseUser";
import DogSitter from "./models/DogSitter";
import Availabilty from "./models/Availability";
import Conversation from "./models/Conversation";
import Message from "./models/Message";
import dotenv from "dotenv";
import casual from "casual";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(<string>process.env.MONGO_URI);

    await mongoose.connection.db.dropDatabase();

    await Promise.all([
      BaseUser.create({
        name: casual.full_name,
        email: casual.email,
        password: "123456",
        city: casual.city,
        address: casual.address,
        profilePhoto:
          "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914468/messenger/8bc2e13b8ab74765fd57f0880f318eed1c3fb001_fownwt.png",
        phoneNumber: casual.phone,
      }),

      BaseUser.create({
        name: casual.full_name,
        email: casual.email,
        password: "123456",
        city: casual.city,
        address: casual.address,
        profilePhoto:
          "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/6c4faa7d65bc24221c3d369a8889928158daede4_vk5tyg.png",
        phoneNumber: casual.phone,
      }),

      BaseUser.create({
        name: casual.full_name,
        email: casual.email,
        password: "123456",
        city: casual.city,
        address: casual.address,
        profilePhoto:
          "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/68f55f7799df6c8078a874cfe0a61a5e6e9e1687_e3kxp2.png",
        phoneNumber: casual.phone,
      }),

      BaseUser.create({
        name: casual.full_name,
        email: casual.email,
        password: "123456",
        city: casual.city,
        address: casual.address,
        profilePhoto:
          "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914468/messenger/d9fc84a0d1d545d77e78aaad39c20c11d3355074_ed5gvz.png",
        phoneNumber: casual.phone,
      }),

      BaseUser.create({
        name: casual.full_name,
        email: casual.email,
        password: "123456",
        city: casual.city,
        address: casual.address,
        profilePhoto:
          "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914468/messenger/8bc2e13b8ab74765fd57f0880f318eed1c3fb001_fownwt.png",
        phoneNumber: casual.phone,
      }),

      BaseUser.create({
        name: casual.full_name,
        email: casual.email,
        password: "123456",
        city: casual.city,
        address: casual.address,
        profilePhoto:
          "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/9e2972c07afac45a8b03f5be3d0a796abe2e566e_ttq23y.png",
        phoneNumber: casual.phone,
      }),
    ]);

    const demoUser = await BaseUser.create({
      name: casual.full_name,
      email: "demo@lovingsitter.com",
      password: "123456",
      city: casual.city,
      address: casual.address,
      profilePhoto:
        "https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/68f55f7799df6c8078a874cfe0a61a5e6e9e1687_e3kxp2.png",
      phoneNumber: casual.phone,
    });

    const availability1 = await Availabilty.create({
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: false,
      saturday: true,
      sunday: true,
    });

    const dogsitter1 = await DogSitter.create({
      name: casual.full_name,
      email: casual.email,
      password: "123456",
      profilePhoto: "https://picsum.photos/200",
      city: casual.city,
      address: casual.address,
      phoneNumber: casual.phone,
      isAvailable: true,
      price: casual.integer(50, 200),
      availability: availability1._id,
    });

    const availability2 = await Availabilty.create({
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    });

    const dogsitter2 = await DogSitter.create({
      name: casual.full_name,
      email: casual.email,
      password: "123456",
      profilePhoto: "https://picsum.photos/200",
      city: casual.city,
      address: casual.address,
      phoneNumber: casual.phone,
      isAvailable: true,
      price: casual.integer(50, 200),
      availability: availability2._id,
    });

    const availability3 = await Availabilty.create({
      monday: false,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: false,
      saturday: true,
      sunday: false,
    });

    const dogsitter3 = await DogSitter.create({
      name: casual.full_name,
      email: casual.email,
      password: "123456",
      profilePhoto: "https://picsum.photos/200",
      city: casual.city,
      address: casual.address,
      phoneNumber: casual.phone,
      isAvailable: true,
      price: casual.integer(50, 200),
      availability: availability3._id,
    });

    const availability4 = await Availabilty.create({
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: false,
      saturday: true,
      sunday: false,
    });

    await DogSitter.create({
      name: casual.full_name,
      email: casual.email,
      password: "123456",
      profilePhoto: "https://picsum.photos/200",
      city: casual.city,
      address: casual.address,
      phoneNumber: casual.phone,
      isAvailable: true,
      price: casual.integer(50, 200),
      availability: availability4._id,
    });

    const availability5 = await Availabilty.create({
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: false,
      saturday: true,
      sunday: true,
    });

    await DogSitter.create({
      name: casual.full_name,
      email: casual.email,
      password: "123456",
      profilePhoto: "https://picsum.photos/200",
      city: casual.city,
      address: casual.address,
      phoneNumber: casual.phone,
      isAvailable: true,
      price: casual.integer(50, 200),
      availability: availability5._id,
    });

    const availability6 = await Availabilty.create({
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: true,
    });
    await DogSitter.create({
      name: casual.full_name,
      email: casual.email,
      password: "123456",
      profilePhoto: "https://picsum.photos/200",
      city: casual.city,
      address: casual.address,
      phoneNumber: casual.phone,
      isAvailable: true,
      price: casual.integer(50, 200),
      availability: availability6._id,
    });

    const availability7 = await Availabilty.create({
      monday: true,
      tuesday: true,
      wednesday: false,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    });

    await DogSitter.create({
      name: casual.full_name,
      email: casual.email,
      password: "123456",
      profilePhoto: "https://picsum.photos/200",
      city: casual.city,
      address: casual.address,
      phoneNumber: casual.phone,
      isAvailable: true,
      price: casual.integer(50, 200),
      availability: availability7._id,
    });

    const availability8 = await Availabilty.create({
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: false,
      saturday: true,
      sunday: true,
    });

    await DogSitter.create({
      name: casual.full_name,
      email: casual.email,
      password: "123456",
      profilePhoto: "https://picsum.photos/200",
      city: casual.city,
      address: casual.address,
      phoneNumber: casual.phone,
      isAvailable: true,
      price: casual.integer(50, 200),
      availability: availability8._id,
    });

    const availability9 = await Availabilty.create({
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: false,
      saturday: false,
      sunday: true,
    });

    await DogSitter.create({
      name: casual.full_name,
      email: casual.email,
      password: "123456",
      profilePhoto: "https://picsum.photos/200",
      city: casual.city,
      address: casual.address,
      phoneNumber: casual.phone,
      isAvailable: true,
      price: casual.integer(50, 200),
      availability: availability9._id,
    });

    const conversation1 = await Conversation.create({
      members: [demoUser._id, dogsitter1._id],
    });

    await Message.create({
      conversationId: conversation1._id,
      sender: demoUser._id,
      recipient: dogsitter1._id,
      text: "Hey, hope you're doing great. Great to meet you.",
    });

    await Message.create({
      conversationId: conversation1._id,
      sender: dogsitter1._id,
      recipient: demoUser._id,
      text: "Yeah, nice to meet you.",
    });

    await Message.create({
      conversationId: conversation1._id,
      sender: demoUser._id,
      recipient: dogsitter1._id,
      text: "Is it possible to come watch my dog on sunday",
    });

    await Message.create({
      conversationId: conversation1._id,
      sender: dogsitter1._id,
      recipient: demoUser._id,
      text: "Sure, why not.",
    });

    const conversation2 = await Conversation.create({
      members: [demoUser._id, dogsitter2._id],
    });

    await Message.create({
      conversationId: conversation2._id,
      sender: demoUser._id,
      recipient: dogsitter2._id,
      text: "Hello good day. :)"
    })
    
    await Message.create({
      conversationId: conversation2._id,
      sender: dogsitter2._id,
      recipient: demoUser._id,
      text: "Hi nice to meet you. :)"
    })

    await Message.create({
      conversationId: conversation2._id,
      sender: demoUser._id,
      recipient: dogsitter2._id,
      text: "I live in Loungmount and I need someone to take care of my dog",
    });

    await Message.create({
      conversationId: conversation2._id,
      sender: dogsitter2._id,
      recipient: demoUser._id,
      text: "No problem, I can do that. What time?",
    });

    await Message.create({
      conversationId: conversation2._id,
      sender: demoUser._id,
      recipient: dogsitter2._id,
      text: "2pm on weekends",
    });

    const conversation3 = await Conversation.create({
      members: [demoUser._id, dogsitter3._id]
    })

    await Message.create({
      conversationId : conversation3._id,
      sender: demoUser._id,
      recipient: dogsitter3._id,
      text: "Hi, I remember we talked last time"
    })
    
    await Message.create({
      conversationId : conversation3._id,
      sender: dogsitter3._id,
      recipient: demoUser._id,
      text: "Yeah, do you need help with your dog again?"
    })

    await Message.create({
      conversationId: conversation3._id,
      sender: demoUser._id,
      recipient: dogsitter3._id,
      text: "Great catch! I will be going a workshop on monday and I need someone to take care of Jack.",
    });

    console.log("seeded all users and availability days");
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await mongoose.disconnect();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  seed();
}
