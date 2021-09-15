db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: Date() } }
);

db.produtos.find(
  { ultimaModificacao: { $exists: 1 } },
  { nome: 1, _id: 0 },
);
