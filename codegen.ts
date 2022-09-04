import type { CodegenConfig } from '@graphql-codegen/cli';

/**
 * near-operation-file
 * @see https://www.the-guild.dev/graphql/codegen/docs/advanced/generated-files-colocation
 **/

const config: CodegenConfig = {
  documents: ['src/**/*.{ts,tsx}', '!**/__generated__/*.{ts,tsx}'],
  generates: {
    'graphql.schema.json': {
      plugins: ['introspection'],
    },
    'src/': {
      config: { withHooks: true },
      plugins: ['typescript-operations', 'typescript-urql'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '__generated__/graphql/graphqlTypes.ts',
        extension: '.generated.tsx',
        folder: '__generated__',
      },
    },
    'src/__generated__/graphql/graphqlTypes.ts': { plugins: ['typescript'] },
  },
  schema: 'src/graphql/schema.graphql',
};

export default config;
