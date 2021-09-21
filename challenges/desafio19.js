db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, descricao: 1, descricaoSite: 1 },
);

// Referência: https://docs.mongodb.com/manual/reference/operator/update/rename/
