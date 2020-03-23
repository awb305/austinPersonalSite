module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules:  {
      // Overwrite rules specified from the extended configs e.g. 
      // "@typescript-eslint/explicit-function-return-type": "off",
      "no-useless-constructor": "error",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/prop-types": "off"
    }
  }