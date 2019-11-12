import { format, transports } from "winston";

import { Config, loadConfig } from "./config";
import { logger } from "./logger";

const main = (_config: Config) => {
    // Configure logger
    logger.add(new transports.Console({ format: format.simple() }));

    logger.info("Hello world !");
    logger.error("Oh no !");
};

if (require.main === module) {
    const config = loadConfig();
    main(config);
}
