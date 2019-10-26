export function envOrThrow(key: string, defaultValue?: string): string {
    const value = process.env[key];

    if (!value) {
        if (defaultValue) {
            return defaultValue;
        }
        throw new Error(`Missing environment variable "${key}"`);
    }

    return value;
}
