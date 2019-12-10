const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const encrypt = require('bcrypt');
const db = require('mongodb').MongoClient;
const adminModels = require('./../Models/Database').Admin;

var plainText = "123";

router.post("/", function (req,res,next) {
    var encryptedReq = req.body.req;
    async function compareHashReq(encryptedReq) {
        encrypt.compare(plainText,encryptedReq, function (err,result) {
            if(err || result === false){
                res.send(
                    {
                        result : result
                    }
                );
            }else{
                adminModels.find(function (err, resultAdmin) {
                    if(err) return next(err);
                    res.json(resultAdmin);
                })

            }
        })
    }
    compareHashReq(encryptedReq);
    /*  $2b$04$y58NUludsBlBrgbNgQ7AXeDqc7W7F.1XOeetePXWy13Qhp9F25cOS  [encrypt 123]*/
    /*encrypt.hash(plainText, 1, function (err,hash) {
        if(err){
            res.send({
                result : false,
                message : err
            })
        }else{
            res.send({
                plainText : plainText,
                encryptedText : hash,
                compareResult : function(){
                    bcrypt.compare(plainText, hash, function(err, resultCompare) {
                        if(err){
                            return alert(resultCompare);
                        }else{
                            return alert(resultCompare);
                        }
                    });
                }
            })
        }
    })*/
    
    // Dibawah ini buat enkripsi dan mencompare
   /*async function processHash() {
       try {
           return compareHash(encrypt.hashSync(plainText, 1));
       } catch (e) {
            if(e){
                res.send({
                    result : false
                })
            }
       }
   }
   processHash();
   function compareHash(encryptedText) {
       encrypt.compare(plainText,encryptedText, function (err,result) {
           if(err){
               res.send(
                   {
                        result : err
                    }
               )
           }else{
               res.send({
                   result : result,
                   encryptedText : encryptedText
               });
           }
       })
   }*/
});

module.exports = router;