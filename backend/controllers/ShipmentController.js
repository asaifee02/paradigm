const Shipments = require('../models/Shipments')
const Warehouses = require('../models/Warehouses')

const getAllShipment = async (req, res, next) => {
  try {
    await Shipments
      .find()
      .then(doc => res.status(200).json(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in getAllShipment controller error", err)
  }
}

const getAllShipmentBusiness = async (req, res, next) => {
  try {
    Shipments
      .find({SenderID: req.params.email})
      .then(doc => res.status(200).send(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in getAllShipmentBusiness controller error", err)
  }
}

const createShipment = async (req, res, next) => {
  try {
    await Shipments.create({
      Source: req.body.Source,
      Destination: req.body.Destination,
      TentativePrice: req.body.TentativePrice,
      FinalPrice: 0,
      SenderID: req.body.SenderID,
      receiverID: req.body.receiverID,
      sourceWarehouseID: req.body.sourceWarehouseID,
      destWarehouseID: req.body.destWarehouseID,
      approval: false,
      products: req.body.products[0]
    })
      .then(doc => res.status(200).json(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in createShipment controller error", err)
  }
}

const editShipmentAdmin = async (req, res, next) => {
  try {
    const approved = await Shipments.findOneAndUpdate({ _id: req.params.shipmentID}, {
          FinalPrice: req.body.price,
          approval: req.body.approval,
        }, {
          new: true,                       // return updated doc
          runValidators: true              // validate before update
        })
    
    const shipment = await Shipments.findOne({_id: req.params.shipmentID})
    console.log(shipment)
    const sent = await Warehouses.findOneAndUpdate({
      _id: shipment.sourceWarehouseID,
      'products.name': shipment.products[0].name
      }, {
        $inc: { 'products.$.quantity': -shipment.products[0].quantity},
      }, {
        new: true,                       // return updated doc
        runValidators: true              // validate before update
      }).then(doc => doc).catch(err => err)
    
    console.log("Sent: ", sent)
    await Warehouses.findOneAndUpdate({_id: shipment.destWarehouseID}, {
      $push: { products: shipment.products },
      $inc: { CurrentVolume: shipment.products[0].volume }
      }, {
        new: true,                       // return updated doc
        runValidators: true              // validate before update
      })
      .then(doc => res.status(200).json(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in Shipment controller error", err)
  }
}

const editShipmentbusiness = async (req, res, next) => {
  try {
    Shipments
      .findOneAndUpdate({_id: req.params.shipmentID}, {
          Source: req.body.Source,
          Destination: req.body.Destination
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

const deleteShipmentbusiness = async (req, res, next) => {
  try {
    Shipments
      .findOneAndRemove({_id: req.params.shipmentID})
      .then(response => res.status(200).json(response))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in controller error", err)
  }
}

module.exports = { getAllShipment, getAllShipmentBusiness, createShipment, editShipmentAdmin, editShipmentbusiness, deleteShipmentbusiness }