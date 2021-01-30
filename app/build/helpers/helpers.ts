export const _env = (val: string) => {
    if (val) {
        return process.env[val];
    }
}