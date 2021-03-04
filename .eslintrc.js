module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'import/no-mutable-exports': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'require-await': 'off',
    'no-unreachable': 'off',
    'no-console': 'off',
    camelcase: { 'properties': 'never' },
  },
}
