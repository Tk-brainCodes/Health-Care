const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(
      `Application connected to ${connection.connection.name} on ${connection.connection.host} and port ${connection.connection.port}`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
