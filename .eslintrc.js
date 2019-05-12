module.exports = {
    root: true,
  
    env: {
      browser: true,
      node: true,
      es6: true
    },
  
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },

    extends: [
      'standard', 
      'plugin:vue/essential',
      "plugin:prettier/recommended",
    ], 
  
    plugins: [
      'vue'
    ],
  
    rules: {
      "prettier/prettier": "error",
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off' 
    },
  
    'extends': [
      'eslint:recommended',
      'plugin:vue/recommended',
      '@vue/standard',
      '@vue/typescript'
    ]
  }