const warehouse = require("../models/Warehouses");
const business = require("../models/Business");

const getWarehouse = async (req, res, next) => {
  try {
    // business.aggregate([
    //   {
    //     $match: { _id: req.params.email }
    //  },
    //   {
    //     $lookup: {
    //       from: "warehouses", //collection to join
    //       localField: "_id", //field from input document
    //       foreignField: "BusinessID",
    //       as: "allWarehouses", //output array field
    //     }
    //   },
    // ])
      // .exec()
    // const { _id: bid } = await business.findOne({email: req.params.email})
    // console.log(bid)
      warehouse.find({BusinessID: req.params.bid})
      .then(doc => res.status(200).json(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in getWarehouse controller error", err)
  }
}

const createWarehouse = async (req, res, next) => {
  try {
    await warehouse.create({
      CurrentVolume: 0,
      Country: req.body.Country,
      MaxVolume: req.body.MaxVolume,
      BusinessID: req.body.id,
      Products: [],
    })
    .then(doc => res.status(200).json(doc))
    .catch(err => console.error(err))
  } catch (err) {
    console.log("we in createWarehouse controller error", err)
  }
}

const editWarehouse = async (req, res, next) => {
  console.log(req.body);
  try {
    warehouse
      .findOneAndUpdate({_id: req.body.id}, {
          Country: req.body.Country,
          MaxVolume: req.body.MaxVolume,
        }, {
          new: true,                       // return updated doc
          runValidators: true              // validate before update
        })
      .then(doc => res.status(200).json(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in controller error", err)
  }
}

const findSuitable = async (req, res, next) => {
  try {

    const whs = await warehouse.find({BusinessID: req.body.bid})
      .then(doc => doc)
      .catch(err => console.error(err))

      const wh = whs.filter(val => {
      const prds = val.products.filter(val => val.name == req.body.name && val.quantity >= req.body.quantity)
      console.log(prds)
      if (prds.length > 0) return true
      return false
    })
    res.status(200).json(wh)
    } catch (err) {
    console.log(err)
  }
}

const deleteWarehouse = async (req, res, next) => {
  try {
    warehouse
      .findOneAndRemove({
        _id: req.body.id
      })
      .then(response => res.status(200).send(response))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in controller error", err)
  }
}

module.exports = { getWarehouse, createWarehouse, editWarehouse, deleteWarehouse, findSuitable }