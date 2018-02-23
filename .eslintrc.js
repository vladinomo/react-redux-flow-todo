module.exports = {
    "extends": [
        "airbnb",
        "prettier/react"
    ],
    "plugins": [
    "prettier"
    ],
    "env": {
        "browser": true,
        "jasmine": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "prettier/prettier": ["error",{ "singleQuote": true }],
    },
};