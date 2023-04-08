module.exports ={
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".ts", ".tsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "avoid",
        "endOfLine": "auto",
        "printWidth": 120
      }
    ],
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": ["error", "never", { "png": "always" }],
    "react/prop-types": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "import/prefer-default-export": 0,
    "global-require": 0,
    "no-plusplus": 0,
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ]
  },
  "overrides": [
    {
      "files": ["src/translation/**/*.ts", "src/store/**/constants.ts"],
      "rules": {
        "prettier/prettier": "off"
      }
    }
  ]
}