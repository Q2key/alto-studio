import { createService } from '../src/service';
import { createServiceContainer } from '../src/container';
import { createDataSource } from '../src/data-source';
import { createServer } from 'http';
import { config } from 'dotenv'
import process from 'node:process';

const gracefulShutdown = (cb: () => Promise<void>): void => {
    const events = ['SIGINT', 'SIGTERM', 'uncaughtException']
    events.forEach((event) => {
        process.on(event, async (args: unknown) => {
            // eslint-disable-next-line no-console
            console.log(`${event} signal received. ${args}`)
            try {
                await cb()
            } catch (err) {
                process.exit(1)
            }

            process.exit(0)
        })
    })
}


const main = async () => {
    config();

    const port = Number(process.env.SERVER_PORT) || 4000;
    const hostname = process.env.SERVER_HOST || '0.0.0.0';

    const dbSource = await createDataSource();
    if (dbSource.isInitialized) {
        console.log(`database has started`);
    }

    const container = createServiceContainer(dbSource);
    const service = createService(container);

    const server = createServer(service).listen(port, hostname, () => {
        // eslint-disable-next-line no-console
        console.log(`server is running at: ${hostname}:${port}`)
    })

    gracefulShutdown(async () => {
        await new Promise<void>((resolve, reject) => {
            server.close((err) => {
                if (err) {
                    reject(err.message)
                } else {
                    resolve()
                }
            })
        })
    })

}

main();