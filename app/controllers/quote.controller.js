const db = require("../models");
const Quote = db.Quotation;
const Op = db.Sequelize.Op;
const {createQuote} = require("../services/quotation.service")

exports.CreateQuote = (req, res) =>{
    var d = new Date(req.body.inception_date);
    var EndDate = d.setFullYear(d.getFullYear() + 1);

    const datasend = {
        CustomerID : req.body.CustomerID,
        AgentID: req.body.AgentID,
        CreateDate: Date.now(),
        TOC: req.body.TOC,
        Topro: req.body.product_id,
        Region: req.body.region_id,
        StartDate: req.body.inception_date,
        EndDate: EndDate,
        MainSI: req.body.sum_insured_1,
        Topro: req.body.Topro,
        Topro: req.body.Topro,
        Topro: req.body.Topro,
        Topro: req.body.Topro,
        Topro: req.body.Topro,
        Topro: req.body.Topro,
        Topro: req.body.Topro,
        Topro: req.body.Topro,
        Topro: req.body.Topro,
    };

    createQuote(datasend,(err,results)=>{
        if (err) {
            return res.json({
                message: "Gagal Create Quotes"
            });
        }
        else{
            res.status(200).send({
                results
            })
        }

    });

};