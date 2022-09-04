import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: 'src/**/!(*.generated).{ts,tsx}',
  generates: {
    'graphql.schema.json': {
      plugins: ['introspection'],
    },
    'src/': {
      config: { withHooks: true },
      plugins: ['typescript-operations', 'typescript-urql'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types/graphql/graphqlTypes.generated.ts',
        extension: '.generated.tsx',
      },
    },
    'src/types/graphql/graphqlTypes.generated.ts': { plugins: ['typescript'] },
  },
  hooks: {
    afterOneFileWrite: [
      'prettier --write src/**/*.generated.{ts,tsx}',
      'eslint src --ext .generated.ts,.generated.tsx --fix',
    ],
  },
  schema: 'src/graphql/schema.graphql',
};

export default config;
