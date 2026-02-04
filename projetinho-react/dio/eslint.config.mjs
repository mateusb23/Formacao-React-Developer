import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { 
      js,
      react: pluginReact // Adicionamos o plugin aqui para habilitar as regras de React
    }, 
    extends: [
      "js/recommended", 
      "plugin:react/recommended", 
      "eslint:recommended",
      "plugin:prettier/recommended", 
      "airbnb"
    ], 
    languageOptions: { 
      globals: globals.browser 
    },
    rules: {
      "react/react-in-jsx-scope": "off" // Sua regra entra aqui
    }
  },
  pluginReact.configs.flat.recommended,
]);
