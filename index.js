import 'dotenv/config';


// Import the framework and instantiate it
import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, { 
  origin: '*',
  methods: ['GET'],
})

// Declare a route
fastify.get('/ping', async function handler (request, reply) {
  return { status: 'WELL DONE' };
});
fastify.get('/hello-world', async function handler (request, reply) {
  return { message: 'Hello world!' };
});

// Run the server!
try {
  await fastify.listen({ port: process.env.PORT || 3001 });
} catch (err) {
  fastify.log.error(err)
  process.exit(1);
}
