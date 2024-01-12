const mongoose=require('mongoose');
var Schema=mongoose.Schema;

var customerSchema=new Schema(
    {
        "id": {
            require:true,
            type:Number,
            unique:true,
        },
        "name": {
            require:true,
            type:String
        },

        "address":{
            require:true,
            type:String
        },

        "salary":{
            require:true,
            type:String
        }
    },
{versionKey:false}
);

module.exports=mongoose.model('customer',customerSchema);