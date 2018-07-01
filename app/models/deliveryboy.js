var mongoose = require("mongoose");

var DeliveryBoySchema = new mongoose.Schema({
    username:     {type: String , default: ''},
    password:     {type: String , default: ''},
    name:         {type: String , default: ''},
    email: 	      {type: String , default: ''},
    address:      {type: String , default: ''},
    mobile:       {type: String , default: ''},
    rating:       {type: Number , default: 0 },
    ratingCount:  {type: Number , default: 0 },
    currentOrders: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Order"
      }
   ]
});

module.exports = mongoose.model("DeliveryBoy", DeliveryBoySchema);