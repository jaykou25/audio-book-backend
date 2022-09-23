# 用于小程序后端的简单应用(eggjs开发)



## 数据库连接

/config/config.local.js
```js
"use strict";

exports.sequelize = {
  dialect: "mysql",
  host: "0.0.0.0",
  port: 3306,
  database: "name",
  username: "user",
  password: "password",
};
```

/config/config.prod.js
```js
"use strict";

exports.sequelize = {
  dialect: "mysql",
  host: "0.0.0.0",
  port: 3306,
  database: "name",
  username: "user",
  password: "password",
};
```

/database/cofig.json

`用于migration连接数据库`
```json
{
  "development": {
    "dialect": "mysql",
    "host": "0.0.0.0",
    "port": 3306,
    "database": "name",
    "username": "user",
    "password": "password"
  }
}
```


### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```


[egg]: https://eggjs.org