export default function factory() {
    return {
        files: ['src/**/*.test.ts'],
        extensions: ['ts'],
        require: ['ts-node/register', 'tsconfig-paths/register'],
        timeout: '2m',
        verbose: true,
        color: true,
    }
}
