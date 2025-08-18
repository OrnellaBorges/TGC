// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  // Utilise jsdom pour les tests de composants
  testEnvironment: "jsdom",

  // Preset ts-jest en mode ESM
  preset: "ts-jest/presets/default-esm",

  // Traiter .ts/.tsx comme ESM
  extensionsToTreatAsEsm: [".ts", ".tsx"],

  // Transformation TypeScript via ts-jest en ESM
  /* transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
  }, */
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { useESM: true, tsconfig: "tsconfig.jest.json" },
    ],
  },
  // Reconnaître ton dossier de tests '__test__'
  //testMatch: ["**/__test__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]sx?"],
  testMatch: [
    "**/src/__tests__/**/*.[jt]s?(x)",
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]sx?",
  ],
  // Setup Testing Library
  //setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // Mocks pour CSS/assets si importés dans les composants
  moduleNameMapper: {
    "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

export default config;
