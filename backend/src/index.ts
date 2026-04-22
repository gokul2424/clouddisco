import fastify from 'fastify';
import { awsAgent } from './agents/awsAgent';
import { azureAgent } from './agents/azureAgent';
import { gcpAgent } from './agents/gcpAgent';

const server = fastify();

server.register(awsAgent);
server.register(azureAgent);
server.register(gcpAgent);

server.get('/', async (request, reply) => {
  reply.send({ message: 'Welcome to the Cloud Disco API' });
});

const start = async () => {
  try {
    await server.listen(3000);
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
