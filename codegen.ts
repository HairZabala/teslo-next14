import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: [
    "src/features/*/graphql/*.graphql",
    "src/features/*/*/graphql/*.graphql",
    "src/graphql/**/*.graphql",
    "src/graphql/*.graphql",
  ],
  ignoreNoDocuments: true,
  generates: {
    "src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};

export default config;
