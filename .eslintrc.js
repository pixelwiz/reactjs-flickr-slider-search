module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prop-types": 0, //TODO: temporary, need to figure out how to deal with prop types
      // https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
      "import/no-named-as-default": 0, // This one doesn't make sense
      "jsx-a11y/label-has-for": [ 2, {
        "components": [ "Label" ],
        "required": {
            "some": [ "nesting", "id" ]
        },
        "allowChildren": false,
      }],
    },
    "globals": {
      "window": true,
      "document": true
    },
    "env": {
      "jasmine": true
    }
};
