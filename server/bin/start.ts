import { createServer } from '../src/api/server';
import { createAwilixContainer } from '../src/container';
import { IServiceCradle } from '../src/interface';

(async () => {
    const container = createAwilixContainer();
    const service = container.build<IServiceCradle>(container);
    const server = createServer(service);
    server.listen(8080, () => {
        console.log('server started on port: 8080');
    })
})();