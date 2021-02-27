module.exports = {
	env: {
		browser : true,
		es2021  : true,
	},
	extends: [
		`plugin:react/recommended`,
		`airbnb`,
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion : 12,
		sourceType  : `module`,
	},
	plugins: [
		`react`,
	],
	rules: {
		'brace-style'                       : [`error`, `allman`],
		'consistent-return'                 : `error`,
		'import/no-extraneous-dependencies' : [`error`, { devDependencies: true }],
		indent                              : [`error`, `tab`],
		'key-spacing'                       : [`error`, {
			align: {
				beforeColon : true,
				afterColon  : true,
				on          : `colon`,
			},
		}],
		'linebreak-style'              : [`off`],
		'no-underscore-dangle'         : [`off`],
		'no-mixed-spaces-and-tabs'     : [`off`],
		'no-tabs'                      : [`error`, { allowIndentationTabs: true }],
		'no-unused-vars'               : [`error`, { argsIgnorePattern: `^_` }],
		quotes                         : [`error`, `backtick`],
		'react/jsx-indent-props'       : [`off`],
		'react/forbid-prop-types'      : [`off`],
		'react/jsx-filename-extension' : [1, { extensions: [`.js`, `.jsx`] }],
		'react/jsx-indent'             : [`off`],
		'space-in-parens'              : [`error`, `always`],
	},
};
