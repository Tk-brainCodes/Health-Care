const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, required: true },
  created_at: {
    type: Date,
    default: Date.now,
  },
  modified_at: {
    type: Date,
    default: Date.now,
  },
});

schema.pre("save", async function (done) {
  if (this.isModified("passwordHash")) {
    this.passwordHash = await generatePasswordHash(this.passwordHash);
  }
  done();
});

const generatePasswordHash = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  let passwordHash = bcrypt.hashSync(password, salt);
  return passwordHash;
};

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
    // delete ret._id;
    delete ret.passwordHash;
  },
});

module.exports = mongoose.model("user", schema);
