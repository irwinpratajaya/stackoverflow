var user = require('../models/users')
var jwt = require('jsonwebtoken');
var passwordHash = require('password-hash');

var users = {}

users.login = function (req,res,next) {
  user.findOne({
    username: req.body.username
  }, function (err,data) {
    console.log(data);
    if (err) {
      res.json(err)
    } else {
      if (!data) {
        res.json(null)
      } else {
        var verify = passwordHash.verify(req.body.password, data.password)

        if (verify) {
          var token = jwt.sign({
                        username: data.username,
                        email: data.email
                      }, 'rahasia');
          res.json(token)
        } else {
          res.json(null)
        }
      }
    }
  })
}

users.getUsers = function (req,res,next) {
  user.find({}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

users.getUser = function (req,res,next) {
  user.find({_id:req.params._id}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

users.createUser = function (req,res,next) {
  user.create({
    username: req.body.username,
    email: req.body.email,
    // password: req.body.password
    password: passwordHash.generate(req.body.password)
  }).then (function (data) {
    res.json(data)
  })
}

users.updateUser = function (req,res,next) {
  user.update({
    _id: req.params._id
  },{
    $set: req.body
  }).then(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

users.deleteUser = function (req,res,next) {
  user.find({_id:req.params._id}).remove(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json (`data id has been deleted`)
    }
  })
}

module.exports = users
