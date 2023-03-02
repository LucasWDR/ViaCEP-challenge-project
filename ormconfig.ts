[{
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  /*   logging: true, */
    entities: ['dist/**/**/entities/*.entity.{ts,js}'],
    migrations: ['.src/migrations/*.ts'],
    cli: {
        migrationsDir: '.src/migrations',
      },
  }]