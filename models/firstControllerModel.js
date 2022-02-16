import Mongoose from "mongoose";

const firstControllerSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: (val) => val > 100,
      message: "please be a bit old,mofo",
    },
  },
  address: { type: String },
  contact: {
    type: Number,
    required: true,
  },
});

const First = Mongoose.model("first", firstControllerSchema);

export { First };
