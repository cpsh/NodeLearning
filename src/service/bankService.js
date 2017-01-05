/**
 * Created by admin on 2017/1/6.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
    //res.send('招商银行');
    res.render('service/bank', { title: '招行',bankName:'招商银行' });
});


/*function bankInfo(){
    router.get('/', function(req, res, next) {
        //res.send('招商银行');
        res.render('service/bank', { title: '招行',bankName:'招商银行' });
    });
}

module.exports.BankInfo = bankInfo();
 */

module.exports = router;