const mongoose = require("mongoose");

const DriverInfo = mongoose.Schema({
  Name: String,
  Address_1: String,
  Address_2: String,
  Address_3: String,
  Email: String,
  Phone: String,
  Dob: String,
  Gender: String,
  Addhar: String,
  DrivingLic: String,
  Experience: String,
});
module.exports = mongoose.model("driver", DriverInfo);
// export default mongoose.model("driver", DriverInfo);
