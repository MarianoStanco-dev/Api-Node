export default {
  port: process.env.PORT,
  token: process.env.TOKEN,
  db_user: process.env.DB_USER ?? "user",
  db_pass: process.env.DB_PASS,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
};
