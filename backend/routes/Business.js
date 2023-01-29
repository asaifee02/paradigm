const express = require("express");
const router = express.Router()
const business = require('../models/Business')

const createBusiness = async (name, email) => {
  const data = await business.create({
    name: name,
    email: email
  })
  return data
}

router.route('/:email')
  .get(async (req, res) => {
    try {
      await business.find({email: req.params.email})
        .then(async (docs) => {
          if(docs.length <= 0) {
            createBusiness(req.params.email, req.params.email)
              .then(docs => res.status(200).json(docs))
              .catch(err => console.log(err))
          }

          else res.status(200).json(docs)
        })
        .catch(err => console.log(err))
    }
    catch (err) {
      console.log('Error in loading business model: ', err)
    }
  })

  .post(async (req, res) => {
    business.create({ name: req.params.email, email: req.params.email })
      .then(docs => res.status(200).json(docs))
      .catch(err => console.log(err))
  })

  .delete(async (req, res) => {
    business.findOneAndRemove({ email: req.params.email })
      .then(out => res.status(200).json(out))
      .catch(err => console.log(err))
  })

module.exports = router 