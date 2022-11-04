const mongoose = require('mongoose');

const VehicleInfo = mongoose.Schema({
    Type:String,
    Company:String,
    Model_n:String,
    Purchased:String,
    Distance:String,
    Plate:String,
    Color:String,
});
module.exports = mongoose.model("Vehicle",VehicleInfo);
// export default mongoose.model("driver", DriverInfo);