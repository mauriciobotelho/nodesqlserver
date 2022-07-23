(async() => {
const database = require('./db');
const produto = require('./produto');

await database.sync();

await produto.create(
    {
        Nome: 'produto1',
        DataCriacao: new Date()
    },
);
await produto.create(
    {
        Nome: 'produto2',
        DataCriacao: new Date()
    },
);
    
await produto.create(
    {
        Nome: 'produto3',
        DataCriacao: new Date()
    },
);

const alterProd = await produto.findByPk(2);
alterProd.Nome = 'Arquivo Alterado';
await alterProd.save();

produto.destroy({where: {id:1}});

const findProd = await produto.findByPk(3);
console.log(findProd);

const findAllProd = await produto.findAll();
console.log(findAllProd);
})();



