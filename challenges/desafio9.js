db.produtos.find({
  calorias: { $lt: 500 },
}, {
  _id: 0,
  nome: 1,
});