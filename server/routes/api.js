const express = require('express');
const router = express.Router();

// declare axios for making http requests
const mongojs = require('mongojs');
const db = mongojs('mongodb://test:test@ds149412.mlab.com:49412/payments-test', ['payments']);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Index Page');
});

router.get('/payments', (req, res, next) => {
  db.payments.find(function(error, payments) {
    if (error) {
      res.send(error);
    }
    res.json(payments);
  });
});

router.get('/payment/:id', (req, res, next) => {
  db.payments.findOne({_id: mongojs.ObjectId(req.params.id)}, function(error, payment) {
    if (error) {
      res.send(error);
    }
    res.json(payment);
  });
});

router.post('/payment', (req, res, next) => {
  console.log(req);
  console.log(res);
  console.log(next);
  var payment = req.body;
  console.log(payment);
  if (!payment.amount || !payment.paymentDate) {
    res.status(400);
    res.json({
      error: "Bad Data"
    });
  } else {
    db.payments.save(payment, function(error, payment) {
      if (error) {
        res.send(error);
      }
      res.json(payment);
    });
  }
});

router.delete('/payment/:id', (req, res, next) => {
  db.payments.remove({_id: mongojs.ObjectId(req.params.id)}, function(error, payment) {
    if (error) {
      res.send(error);
    }
    res.json(payment);
  });
});

router.put('/payment/:id', (req, res, next) => {
  var payment = req.body;
  var updPayment = {};

  if (payment.amount) {
    updPayment.amount = payment.amount;
  }
  if (payment.paymentDate) {
    updPayment.paymentDate = payment.paymentDate;
  }
  if (!updPayment) {
    res.status(400);
    res.json({
      error: "Bad Data"
    })
  } else {
    db.payments.update({_id: mongojs.ObjectId(req.params.id)}, updPayment,  function(error, payment) {
      if (error) {
        res.send(error);
      }
      res.json(payment);
    });
  }
});

module.exports = router;