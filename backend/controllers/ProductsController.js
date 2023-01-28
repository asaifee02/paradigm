const warehouse = require("../models/Warehouses");
const business = require("../models/Business");

const getAllProducts = async (req, res, next) => {
	try {
		business.aggregate([
			{
				$lookup: {
					from: "warehouses", //collection to join
					localField: "_id", //field from input document
					foreignField: "BusinessID",
					as: "allWarehouses", //output array field
				},
			},
		])
			.exec()
			.then(docs => {
				const warehouses = docs[0].allWarehouses
				const products = warehouses.reduce((prev, curr) => prev.products.concat(prev.products, curr.products))
				res.status(200).json(products.products)
			})
			.catch(err => console.log(err))
	} catch (err) {
		console.log("we in controller error", err)
	}
}

const addProducts = async (req, res, next) => {
	try {
    warehouse
      .findOneAndUpdate({_id: req.body.id}, {
				$push: { products: req.body.products },
				$inc: { CurrentVolume: req.body.products.reduce((acc, curr) => acc + curr.volume, initialValue=0) }
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

const editProducts = async (req, res, next) => {
	try {
    warehouse
      .findOneAndUpdate({_id: req.body.id, 'products.name': req.body.name}, {
				'$set': { 'products.$.quantity': req.body.quantity },
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

const deleteProducts = async (req, res, next) => {
	try {
    warehouse
      .updateOne({_id: req.body.id}, {
				$pull: {
					products: {name: req.body.name},
				}
			}, { safe: true, multi:true })
      .then(response => res.status(200).send(response))
      .catch(err => console.error(err))
	} catch (err) {
		console.log("we in controller error", err)
	}
}

module.exports = { getAllProducts, addProducts, editProducts, deleteProducts }