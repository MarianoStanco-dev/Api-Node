import { Sequelize } from "sequelize-typescript";
import config from "../core/config";
import { Estados } from "../models/sato/estados.dao";

const connSato = new Sequelize("sato", config.db_user, config.db_pass, {
  host: config.db_host,
  dialect: "mariadb",
  port: Number(config.db_port),
  dialectOptions: {
    charset: "utf8mb4",
  },
  models: [Estados],
  logging: false,
});

// sincronizar la base con el modelo
// puede ser operacion destructiva de las tablas, usar solo en desarrollo
//force: true
// alter:true
connSato.sync({ alter: false });

// Testear conexion a la base

testConnection(connSato);

async function testConnection(sequelize: any) {
  try {
    await sequelize.authenticate();
    console.log("Sato: Connection has been established successfully.");
  } catch (error) {
    console.error("Sato: Unable to connect to the database:", error);
  }
}

export default connSato;
