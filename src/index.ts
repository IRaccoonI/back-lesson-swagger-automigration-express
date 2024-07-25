// @ts-nocheck
import "dotenv/config";

import "reflect-metadata";
import express from "express";
import { getMetadataArgsStorage, useExpressServer } from "routing-controllers";
import { routingControllersToSpec } from "routing-controllers-openapi";
import swaggerUi from "swagger-ui-express";
import { AppDataSource } from "./db/typeorm.config";
import { UserController } from "./controllers/user.controller";
import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import { logger } from "./middleware/logger.middleware";

const app = express();

// Initialize and connect to the database
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// Use Controllers
useExpressServer(app, {
  controllers: [UserController],
});

// Generate OpenAPI schema
const storage = getMetadataArgsStorage();
const schemas = validationMetadatasToSchemas({
  refPointerPrefix: "#/components/schemas/",
});

const spec = routingControllersToSpec(
  storage,
  {},
  {
    components: { schemas },
    info: { title: "My app", version: "0.0.10" },
  }
);

// Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger); // <- тут объявляем

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
