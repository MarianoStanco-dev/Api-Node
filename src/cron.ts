import axios from "axios";
import config from "./core/config";
const sources = [
  {
    name: "sato",
    url: `http://localhost:${config.port}/sato/importar/${config.token}`,
  },
  {
    name: "inventory",
    url: `http://localhost:${config.port}/inventory/importar/${config.token}`,
  },
];

async function run() {
  const tasks = sources.map((source) => axios.get(source.url));
  const results = await Promise.allSettled(tasks);
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      const { value } = result;
      console.log(value.statusText);
    } else {
      const { reason } = result;
      console.log(
        `Se ha producido un error en el importador ${reason.errorMessage}`
      );
    }
  });
}

export default run;
