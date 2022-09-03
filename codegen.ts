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
      presetConfig: { baseTypesPath: 'types.ts', extension: '.generated.tsx' },
    },
    'src/generated/types.ts': { plugins: ['typescript'] },
  },
  schema: 'src/graphql/schema.graphql',
};

export default config;
