import dotenv from 'dotenv';
dotenv.config();

[
  'ENV',
  'PORT'
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
  server: {
    port: Number(process.env.PORT)
  }
  // ...
}