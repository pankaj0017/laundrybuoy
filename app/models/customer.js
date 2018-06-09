var mongoose = require("mongoose");

var CustomerSchema = new mongoose.Schema({

	  user         : {type: mongoose.Schema.Types.ObjectId, ref: "User"},       //to extract details of customer who is currently logged in
    name         : {type: String , default: ''},
    referedBy    : {type: String , default: ''},
    referCode    : {type: Number, default:  0 }, 
    address      : {type: String , default: ''},
    mobile       : {type: String , default: ''},
    daysLeft     : {type: Number, default:  0 },                              //time untill next recharge
    longClothes  : {type: Number, default:  0 },
    shortClothes : {type: Number, default:  0 },
    history:  [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Order"
        }
      ]

});

module.exports = mongoose.model("Customer", CustomerSchema);