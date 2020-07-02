module.exports = {
    branches: ['master'],
    debug: true,
    plugins: [
        // https://github.com/semantic-release/commit-analyzer
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        // https://github.com/semantic-release/changelog
        ['@semantic-release/changelog', { changelogFile: 'docs/CHANGELOG.md' }],
        // https: //github.com/semantic-release/npm
        ['@semantic-release/npm', { npmPublish: true }],
        // https://github.com/semantic-release/git
        [
            '@semantic-release/git',
            {
                assets: [
                    'docs/CHANGELOG.md',
                    'package.json',
                    'package-lock.json',
                    'npm-shrinkwrap.json',
                ],
            },
        ],
        // https://github.com/semantic-release/github
        [
            '@semantic-release/github',
            {
                message:
                    'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
}
