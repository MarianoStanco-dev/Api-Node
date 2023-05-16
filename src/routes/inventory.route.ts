import { Router } from "express";
import { importador } from "../connectors/inventory/importador";
import config from "../core/config";

const router = Router();
router.get(`/importar/${config.token}`, importador);

export default router;
