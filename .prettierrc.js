// .prettierrc.js
module.exports = {
  printWidth: 80,
  parser: "flow",
  "prettier.tabWidth": 2,
  quotes: "single",
  semi: false,
  "bracketSpacing": {
    "default": true,
    "description": "Print spaces between brackets in object literals.",
    "type": "boolean"
  },
  "jsxBracketSameLine": {
    "default": false,
    "description": "Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line.",
    "type": "boolean"
  },
  "parser": {
    "enum": [
      "babylon",
      "flow",
      "typescript",
      "postcss",
      "json",
      "graphql"
    ],
    "description": "Specify which parser to use.",
    "default": "babel-eslint",
    "type": "string"
  },
  "printWidth": {
    "default": 80,
    "description": "Specify the line length that the printer will wrap on.",
    "type": "integer"
  },
  "semi": {
    "default": false,
    "description": "Print semicolons at the ends of statements.",
    "type": "boolean"
  },
  "singleQuote": {
    "default": true,
    "description": "Use single quotes instead of double quotes.",
    "type": "boolean"
  },
  "tabWidth": {
    "default": 2,
    "description": "Specify the number of spaces per indentation-level.",
    "type": "integer"
  },
  "trailingComma": {
    "default": "none",
    "description": "Print trailing commas wherever possible.",
    "enum": ["none", "all", "es5"],
    "type": "string"
  },
  "useTabs": {
    "default": true,
    "description": "Indent lines with tabs instead of spaces.",
    "type": "boolean"
  }

}
