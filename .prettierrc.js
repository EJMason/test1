module.exports = {
    ...require('chefs-prettier'),
    overrides: [
        {
            files: '*.spec.ts',
            options: {
                printWidth: 120,
            },
        },
        {
            files: 'package.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
}
