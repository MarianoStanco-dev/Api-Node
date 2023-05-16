import { Sequelize } from "sequelize-typescript";
console.log("coneccion base de datos");
const db: any = {};
const databases = ["sato"];
for (let i = 0; i < databases.length; ++i) {
  let database = databases[i];
  db[database] = new Sequelize(database, "root", "1234", {
    host: "localhost",
    dialect: "mariadb",
    port: 3306,
    dialectOptions: {
      charset: "utf8mb4",
    },
    models: [],
  });

  testConnection(db[database]);
}

async function testConnection(sequelize: any) {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default db;
