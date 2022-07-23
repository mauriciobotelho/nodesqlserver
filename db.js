const Sequelize = require('sequelize');
const componenteSequelize = new Sequelize('mauriciobotelho', 'root', 'root-secret',{
    dialect:'mysql',
    host:'192.168.68.114',


});
module.exports = componenteSequelize;




