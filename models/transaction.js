/**
 * Created by daman on 11/27/2015.
 */
var mongoose=require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Schema=mongoose.Schema;

var transactionSchema = new Schema({
    item: {type: Schema.Types.ObjectId, ref: 'Item'},
    provider:{type: Schema.Types.ObjectId, ref: 'Provider'},
    date: Date,
    quantity:Number,
    description: String,
    type: String,
    unitPrice: Number,
    invoiceNumber: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

transactionSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('Transaction',transactionSchema);