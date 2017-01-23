var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://localhost:5432/sequelizesamp')

var Hat = sequelize.define('hat', {
  name: Sequelize.STRING,
  material: Sequelize.STRING,
  height: Sequelize.INTEGER,
  brim: Sequelize.BOOLEAN
});

Hat
  .sync()
  .then(function(){
    console.log("Your table has been created")
    Hat.create({
      name: 'cowboy',
      material: 'straw',
      height: 4,
      brim: true
    });
  })
