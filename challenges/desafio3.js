db.produtos.updateMany(
  {},
  {
    $set: { valorUnitario: NumberDecimal(0.00) },
  },
);

db.produtos.updateMany(
  { tags: "bovino" },
  {
    $inc: { avaliacao: 5 },
  },
);

db.produtos.updateMany(
  { tags: "ave" },
  {
    $inc: { avaliacao: 3 },
  },
);

db.produtos.find(
  {},
  { nome: 1, avaliacao: 1, _id: 0 },
);
