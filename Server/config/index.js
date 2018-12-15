import dotenv from 'dotenv';
dotenv.config();

[
  'ENV',
  'PORT',
  'MONGODB_URI'
].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`)
  }
})

export const config = {
  env: process.env.ENV,
  logger: {
    level: process.env.LOG_LEVEL || 'info',
  },
  db: {
    url: process.env.MONGODB_URI
  },
  server: {
    port: Number(process.env.PORT)
  }
  // ...
}