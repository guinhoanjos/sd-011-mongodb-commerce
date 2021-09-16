db.produtos.updateMany(
    { descricao: { $exists: true } },
    { $rename: { descricao: "descricaoSite" } },
);

db.produtos.find(
    { },
    { nome: 1, descricaoSite: 1, _id: 0 },
);
