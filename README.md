# e-commerce-backend

## Models

Schemas or blueprints of how we want the data to be stored in the database

<!-- For example -->

```js
const User = {
  firstName: {
    required: true,
    dataType: "String",
  },
  lastName: {
    required: true,
    dataType: "String",
  },
  createdAt: {
    time: 12,
    date: Date().now,
  },
};
```

### TODO's FOR MODELS

- Code the schema.
- Set up useful functionalities
  - Hash password before it's saved in the local storage (signup)
  - Compare password at login.
  - Indexer (int)

_Client sends user data using fetch(req(juadeb2025)) ---> codebase (bcrypt) -> hashed/encrypted (dswicnskjscjsbj10) ---> database_

## Views

Routes by which we can target the values or data currently stored in the database

## Controllers

Functionalites that should run when we called to a routes `view` to get a particular data from `model` stored in the database.

```js
// frontend
const formData = {
  name: "juadeb",
  email: "test@test.com",
  password: "ejibcjwnkncss",
};

const url = "www.juadeb.com/register";

const reqObj = {
  method: "POST",
  body: JSON.stringify(formData),
};

fetch(url, reqObj)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
```
