const express = require('express');
const app = express.Router();

const midtrans = require('midtrans-client');

let snap = new midtrans.Snap({
    isProduction : false,
    serverKey : 'SB-Mid-server-OSf2M1WcQ7WMk2Ohp3Jp5s6B',
    clientKey : 'SB-Mid-client-Ze3ISnaGP0Bgrflx'
});

app.post('/create', (req, res) => {

    let parameter = req.body.transaction_details;
    let parameter_order = parameter.order_id;
    let parameter_gross = parameter.gross_amount;

    let param = {
        transaction_details : {
            order_id : parameter_order,
            gross_amount : parameter_gross
        }
    }

    console.log(param);
    snap.createTransaction(param)
        .then((transaction)=>{
            // transaction token
            let transactionToken = transaction.token;
            console.log('transactionToken:',transactionToken);

            // transaction redirect url
            let transactionRedirectUrl = transaction.redirect_url;
            console.log('transactionRedirectUrl:',transactionRedirectUrl);

            res.send({ token : transactionToken, url : transactionRedirectUrl })
        })
        .catch((e)=>{
            console.log('Error occured:',e.message);
        });

});

module.exports = app;