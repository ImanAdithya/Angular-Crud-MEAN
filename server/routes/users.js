var express = require('express');
var router = express.Router();
var customerModel=require('../model/CustomerModel');

/* GET users listing. */
router.post('/create',async (req,res)=>{
  const customer=req.body;
  try{
      const cus=await customerModel.create(customer)
      res.status(200).json(cus);
  }catch (err){
    console.error(err);
    res.status(500).json({error: 'something went wrong !'});
  }

});

router.get('/getAll',async (req,res)=>{
  try{
    const customerList = await customerModel.find();
    res.status(200).json(customerList);
  }catch (err){
    console.error(err);
    res.status(500).json({error: 'something went wrong !'});
  }

});

router.get('/findCustomer/:id', async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await customerModel.find({ id: customerId });
    res.status(200).json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'something went wrong!' });
  }
});

router.put('/updateCustomer/:id', async (req, res) => {
  try {
    const customerID = req.params.id;
    const customer = req.body;

    const updateCustomer = await customerModel.findOneAndUpdate(
        {
          id:customerID
        }
        ,customer,
        {new:true});

    if (!updateCustomer){
      return res.status(404).json({error:'Customer Not Found'});
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'something went wrong !'});
  }
});

router.delete('/deleteCustomer/:id', async (req, res) => {

  try {
    const customerId = req.params.id;

    const customer = await customerModel.deleteOne({id: customerId});

    res.status(200).json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'something went wrong !'});
  }
});







module.exports = router;
