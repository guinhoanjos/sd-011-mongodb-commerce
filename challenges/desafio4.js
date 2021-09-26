db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: Date() } },
);

db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: true, _id: false });
