module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
			jest: true
		  },
		},
		// add custom override rules
		{
			files: ['*.vue', '*.js'],
			rules: {
				// indent 4 spaces
				indent: ['error', 4, { SwitchCase: 1 }],
				// max line length
				'max-len': ['error', 120],
				// always use semicolon line terminators
				semi: ['error', 'always'],
				// allow dangline commas
				'comma-dangle': ['error', 'only-multiline'],
				// no space between function name and parens
				'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'never', }],
				// ignores multiple spaces before comments that occur at the end of lines
				'no-multi-spaces': ['error', { ignoreEOLComments: true }],
				// allow ++ operator
				'no-plusplus': 0,
				// allow no more than 1 blank lines, and allow at least 1 at the end of file
				'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, }],

				// I think the remainder are obsolete

				// do not enforce camel case variables
				// camelcase: ['error', { properties: 'never' }],

			},
		},
    ]
}
