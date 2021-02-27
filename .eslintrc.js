const RULES = {

	ERROR : `error`,
	OFF   : `off`,
	ON    : `on`,

};

const { ERROR, OFF } = RULES;

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
		'brace-style'                       : [ERROR, `allman`],
		'consistent-return'                 : ERROR,
		'import/no-extraneous-dependencies' : [ERROR, { devDependencies: true }],
		indent                              : [ERROR, `tab`],
		'key-spacing'                       : [ERROR, {
			align: {
				beforeColon : true,
				afterColon  : true,
				on          : `colon`,
			},
		}],
		'linebreak-style'              : [OFF],
		'no-underscore-dangle'         : [OFF],
		'no-mixed-spaces-and-tabs'     : [OFF],
		'no-tabs'                      : [ERROR, { allowIndentationTabs: true }],
		'no-unused-vars'               : [ERROR, { argsIgnorePattern: `^_` }],
		quotes                         : [ERROR, `backtick`],
		'react/jsx-indent-props'       : [OFF],
		'react/forbid-prop-types'      : [OFF],
		'react/jsx-filename-extension' : [1, { extensions: [`.js`, `.jsx`] }],
		'react/jsx-indent'             : [OFF],
		'space-in-parens'              : [ERROR, `always`],
	},
};
