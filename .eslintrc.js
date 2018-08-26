module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	// plugins: ['react'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'linebreak-style': ['error', 'unix'],
	},
};
