import { envOrThrow } from "./utils/envOrThrow";

export interface Config {
    NODE_ENV: string;
}

export function loadConfig(): Config {
    return {
        NODE_ENV: envOrThrow("NODE_ENV", "development"),
    };
}
