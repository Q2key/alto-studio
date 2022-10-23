import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance = Fastify({});

const opts: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string'
                    }
                }
            }
        }
    }
}

server.get('/ping', opts, async (request, reply) => {
    return { pong: 'it worked! twice !' }
})

export const serverStart = async () => {
    try {
        await server.listen(8080);

        const address = server.server.address();
        const port = typeof address === 'string' ? address : address?.port;

        console.log(`Server started at 🏋️: ${port}`);

    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

serverStart();