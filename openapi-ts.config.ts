import { defineConfig } from "@hey-api/openapi-ts"

export default defineConfig({
  input: "https://api.inaturalist.org/v1/swagger.json",
  output: {
    path: "src",
    format: "biome",
    lint: "oxlint",
    case: "camelCase",
  },
  plugins: ["@hey-api/client-fetch"],
})
