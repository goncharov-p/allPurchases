const shopingList = require('../../db/models/task/index')

module.exports.getAllPurchases = (req, res) => {
  shopingList.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createNewPurchases = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const body = req.body;
  if ((body.hasOwnProperty('purchases') || body.hasOwnProperty('sum'))) {
    const purchasesList = new shopingList({
      purchases: body.purchases,
      sum:body.sum,
      date:body.date
    });
    purchasesList.save().then(result => {
      res.send(result);
    }).catch(err => console.log(err));
  }
}

module.exports.deletePurchases = (req, res) => {
  const id = req.query.id;
  if (id) {
    shopingList.deleteOne({ _id: id }).then(result => {
      res.send("Delete")
    }).catch(err => {
      res.send(err);
    })
  };
};

module.exports.changePurchases = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const body = req.body;
  const id = req.body._id;
  const selector = { _id: id };
  
  if (body.hasOwnProperty("purchases") && body.hasOwnProperty("sum")) {  
    shopingList.updateOne(selector, {
      $set: { 
        purchases: body.purchases,
        sum:body.sum,
      }
    }).then(result => {
        res.send({status:200,result})
      }).catch(err => {
        res.send(err);});

  };

}