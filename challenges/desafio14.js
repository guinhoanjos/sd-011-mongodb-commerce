db.produtos.updateMany(
    { $and: [{ "valoresNutricionais.2.tipo": "sódio" },
                { "valoresNutricionais.2.percentual": { $gt: 20, $lt: 40 } }] },
                  { $push: { tags: "contém sódio" } }, 
  );
  
  db.produtos.find(
    {},
    { _id: false, nome: true, tags: true },
  );
