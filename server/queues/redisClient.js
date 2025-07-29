import IORedis from 'ioredis';

// Connection for the API/producer. It's configured not to retry indefinitely
// so that an API request doesn't hang forever if Redis is down.
const producerConnection = new IORedis(process.env.REDIS_URL, {
  maxRetriesPerRequest: 1,
});

// Connection for the worker. It's configured to retry connecting forever
// to ensure the worker is resilient and can recover from Redis downtime.
const workerConnection = new IORedis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

export { producerConnection, workerConnection };