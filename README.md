<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in development

1. Clone repo
2. Execute

```
npm install
```

3. Intall nest CLI

```
npm -i g @nest/cli
```

4. Run database

```
docker-compose up -d
```

5. Clone file **.example.env** to **.env**

6. Set those environment variables

7. Execute app in dev environment:

```
npm run start:dev
```

8. Rebuild database with seed

```
http://localhost:3000/api/v2/seed
```

## Stack

- MongoDb
- Nest
