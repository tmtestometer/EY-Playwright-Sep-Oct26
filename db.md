// Databases - storing data

relational databases - table concept , mysql, oracle, msaccess

sql - 

DDL - Create, Alter, Drop, Truncate
DML - Insert, Update, delete
Select
CRUD = Create (Insert) , Read (Select), Update (update) and Delete (delete)
DCL - Grant


Emp

EmpID, EmpName, EmpDepartment
1 , Vaibhav, HR









## Docker MySQL + phpMyAdmin

```bash
docker compose up -d
```

| App | URL / host | Login |
|-----|------------|--------|
| MySQL | `127.0.0.1:3306` | user `eyuser` / password `eypass` / db `eyplaywright` |
| phpMyAdmin | http://localhost:8080 | same user/password |

Root MySQL password is `root`.

Playwright helper: `tests/db.connection.js`

```js
import { getDbConnection, query } from './db.connection.js';

const employees = await query('SELECT * FROM Emp');
```

Stop:

```bash
docker compose down
```

non-relation database - mongodb, cassendra,  

{
    "name" : "vaibhav"
    "age" :  34
}

{
    "age" :  34
}


