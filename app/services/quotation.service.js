const db = require("../models");
const Quote = db.Quotation;
const QuoteLog = db.QuotationLog

module.exports = {
    createQuote : (data , callback) => {
        Quote.create(data)
        .then((res) => {
          return  callback(res)
            
        }).catch((err) => {
            return callback(error);
        });
    }
}