var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:5432/userpostapp')

//user

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

//post

var Post = sequelize.define('post', {
  title: Sequelize.STRING,
  body: Sequelize.STRING
})

sequelize.sync().then(function(){
  User.create({
    username: 'bob',
    password: '1234'
  })
  Post.create({
    title: 'Lunch',
    body: 'Starts now'
  })
})
