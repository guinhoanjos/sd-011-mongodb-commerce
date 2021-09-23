db.produtos.updateMany(
  { $and: [{ "valoresNutricionais.2.tipo": "sódio" },
              { "valoresNutricionais.2.percentual": { $gte: 40 } }] },
                { $push: { tags: "muito sódio" } }, 
);

db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
);
