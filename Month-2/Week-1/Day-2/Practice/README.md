**JavaScript Promise**

JavaScript Promise are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

Syntax:

let promise = new Promise(function(resolve, reject){

//do something

});

**Parameters**

- The promise constructor takes only one argument which is a callback function
- The callback function takes two arguments, resolve and reject
- Perform operations inside the callback function and if everything went well then call resolve.
- If desired operations do not go well then call reject.

**A Promise has four states:**

1. pending: Promise is still pending i.e. not fulfilled or rejected yet 
2. fulfilled: Action related to the promise succeeded
    1. rejected: Action related to the promise failed
        1. settled: Promise has been fulfilled or rejected

**Promise Consumers**: Promises can be consumed by registering functions using .then and .catch methods.

**Promise then() Method:** It is invoked when a promise is either resolved or rejected. It may also be defined as a carrier that takes data from promise and further executes it successfully.

**Promise catch() Method:** It is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.

**Async and Await in JavaScript**

**Async/await** is a feature in JavaScript that allows you to **work with asynchronous code** in a more synchronous-like manner, making it easier to write and understand asynchronous code. **Async Functions** always return a promise. **Await Keyword** is used only in Async Functions to wait for promise.

Async Function

**The Async function** simply allows us to write **promises-based** code as if it were synchronous and it checks that we are not breaking the execution thread.

Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value

Async Syntax

async function myFunction() {

return "Hello";

}

Await Keyword

Await is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. Await

Syntax: let value = await promise;

**Fetch API**

Fetch  API  provides   an  interface   for fetching and  also  sending  resources .

It  uses   Request   and   Response   Object.

The  fetch()  method  is used  to fetch  the  data .

Let  Promises  =  fetch (url  ,[option])

json()   method  :return  a second  promise  that  resolve  with  the  result  of  parsing  the  response.

# 1. CRUD Operations

CRUD stands for:

| Operation | Full Form | HTTP Method | Purpose |
| --- | --- | --- | --- |
| **C** | Create | POST | Add new data |
| **R** | Read | GET | Fetch data |
| **U** | Update | PUT / PATCH | Modify data |
| **D** | Delete | DELETE | Remove data |

---

# 2. Different HTTP Requests

## GET

- Used to **read/fetch data**
- No body is sent

```
fetch("/users");
```

---

## POST

- Used to **create new data**

```
fetch("/users", {
  method:"POST",
  body:JSON.stringify({ name:"John" })
});
```

---

## PUT

- Used to **update full data**

```
fetch("/users/1", {
  method:"PUT",
  body:JSON.stringify({ name:"Sam", age:25 })
});
```

---

## PATCH

- Used to **update partial data**

```
fetch("/users/1", {
  method:"PATCH",
  body:JSON.stringify({ age:30 })
});
```

---

## DELETE

- Used to **delete data**

```
fetch("/users/1", {
  method:"DELETE"
});
```

---

# 3.  `fetch()` (Different Requests)

## 🔹 Syntax

```
fetch(url,options)
```

---

## 🔹 Basic Example

```
fetch("/api")
.then(res =>res.json())
.then(data =>console.log(data));
```

---

## 🔹 With Options (Important)

```
fetch("/api", {
  method:"POST",
  headers: {
"Content-Type":"application/json"
  },
  body:JSON.stringify({ name:"John" })
});
```

---

## 🔹 Key Points

- `fetch()` returns a **Promise**
- Used for **API calls**
- Works with all request types (GET, POST, PUT, PATCH, DELETE)

---

# 4. Important Options in Fetch

## 🔹 1. method

- Defines **type of request**

```
method:"GET"|"POST"|"PUT"|"PATCH"|"DELETE"
```

👉 Example:

```
method:"POST"
```

---

## 🔹 2. headers

- Used to send **extra information (metadata)** to server

### ✅ Common Uses:

- Tell server data format
- Send authentication token

```
headers: {
"Content-Type":"application/json",
"Authorization":"Bearer token"
}
```

👉 Without correct headers → server may not understand data

---

## 🔹 3. body

- Contains **data sent to server**
- Used in POST, PUT, PATCH

```
body:JSON.stringify({
  name:"John",
  age:25
})
```

### 🔸 Important:

- Must convert object → JSON using `JSON.stringify()`