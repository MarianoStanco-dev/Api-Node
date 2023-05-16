import { Estados } from "../../models/sato/estados.dao";

export const importador = async (req: any, res: any) => {
  // Prueba gurdado de estado
  const e = new Estados({ pasos: "importar ciudades" });
  e.save();
  setTimeout(function () {
    console.log("Importador Sato despues de 2000 ms");
  }, 2000);
  res.send("importador sato");
  console.log("importador sato sin espera");
};
