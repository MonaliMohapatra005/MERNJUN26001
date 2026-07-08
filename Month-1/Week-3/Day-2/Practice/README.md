# QLITH MERN Internship Batch - JUN 2026


**Var, let, const** 

scope : **Scope** means the area or region of a program where a variable is accessible or can be used.

!image.png

**Var, let, const** 

the difference between the these basis of the way of declaration

!image.png

# 📘 Data Types in JavaScript

In **JavaScript**, a data type defines the type of value a variable can hold.

JavaScript is a **dynamically typed language**, meaning:

- You don’t need to declare the data type.
- The type is automatically assigned.
- A variable’s type can change.

```
let x=10;// Number
x="Hello";// Now String
```

---

# 🔹 Types of Data in JavaScript

JavaScript has **8 Data Types**:

## 👉 1. Primitive Data Types (7 Types)

Primitive values are **single, simple values**.

### 1️⃣ Number

- Represents numeric values.
- Includes integers and decimals.

```
let age=25;
let price=99.99;
```

### 2️⃣ String

- Used for text.
- Written inside quotes (`" "`, `' '`, or `\` ``)

```
let name="ranjan";
```

### 3️⃣ Boolean

- Represents logical values.
- Only two values: `true` or `false`

```
letisLoggedIn=true;
letisAdmin=false;
```

---

### 4️⃣ Undefined

- A variable declared but not assigned a value.

```
letx;
console.log(x);// undefined
```

---

### 5️⃣ Null

- Represents intentional empty value.
- It is assigned manually.

```
letdata=null;
```

⚠️ Important:

```
typeof null// "object" (This is a JavaScript bug)
```

---

### 6️⃣ BigInt

- Used for very large numbers beyond `Number` limit.

```
let bigNumber=123456789012345678901234567890n;
```

---

### 7️⃣ Symbol

- Used to create unique identifiers.
- Mostly used in advanced object properties.

```
let id=Symbol("id");
```

## 👉 2. Non-Primitive Data Type

### 8️⃣ Object

Objects store collections of data.

```
letuser= {
  name:"Soumyaranjan",
  age:25
};
```

Reference example:

```
letobj1= { name:"JS" };

console.log(obj1.name);// JS
```

Other things built on Objects:

- Arrays

Example:

```
letarr= [1,2,3];
```

```
let arr1= [1,2,3];

console.log(arr1.[0]);// 1
console.log(arr1.[1]);// 2
```

# 📘 JavaScript Operators

JavaScript operators are used to **perform operations on variables and values**.

---

# 1️⃣ Arithmetic Operators

Used for mathematical calculations.

| Operator | Description | Example | Result |
| --- | --- | --- | --- |
| `+` | Addition | `5 + 2` | `7` |
| `-` | Subtraction | `5 - 2` | `3` |
| `*` | Multiplication | `5 * 2` | `10` |
| `/` | Division | `10 / 2` | `5` |
| `%` | Modulus (Remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `x++` | adds 1 |
| `--` | Decrement | `x--` | minus 1 |

### Example:

```
let a=10;
let b=3;

console.log(a%b);// 1
console.log(a**b);// 1000
```

---

# 2️⃣ Assignment Operators

Used to assign values to variables.

| Operator | Example | Same As |
| --- | --- | --- |
| `=` | `x = 5` |  |
| `+=` | `x += 2` | `x = x + 2` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 2` | `x = x / 2` |
| `%=` | `x %= 2` | `x = x % 2` |
| `**=` | `x **= 2` | `x = x ** 2` |
- Code
    - js code
        
        ```jsx
        console.log("hello welcome to second class of js");
        
        // let
        // declare at global level
        let a = 20;
        
        console.log(a);
        
        // block level
        {
          let b = 30;
          console.log(b);
        }
        // console.log(b)
        
        // function level
        function hii() {
          let c = 40;
          console.log(c);
        }
        // console.log(c)
        
        hii();
        
        // const
        
        // global
        const v = 8;
        
        // block
        {
          const g = 44;
          console.log(g);
        }
        
        function hello() {
          const f = 40;
          console.log(f);
        }
        // console.log(f)
        
        hii();
        
        // the way of declaration
        // let
        let num;
        console.log(num);
        num = 50;
        console.log(num);
        
        let num1 = 60;
        console.log(num1);
        
        // let num;
        // console.log(num)
        
        num = 77;
        console.log(num);
        
        // const
        const n = 90;
        console.log(n);
        
        // data type
        // primitive (number,string,symbol,undefined,null,boolean,bigInt)
        // non primitive (array,object)
        
        let number = 9;
        console.log(typeof number);
        let name = "xyz";
        console.log(typeof name);
        
        let sym = Symbol("&");
        console.log(typeof sym);
        
        let u = undefined;
        console.log(u);
        
        let o = null;
        console.log(typeof o);
        
        let isPassed = true;
        console.log(typeof isPassed);
        
        let bigValue = BigInt("53984982734897387489374");
        console.log(typeof typeof bigValue);
        
        // non primitive
        // array
        let arr = [1, 2, 3, 4, 5, true, "dfjlkj", [2, 3]];
        console.log(arr);
        
        let arr1 = new Array(4, 3);
        console.log(arr1);
        
        console.log(arr[8]);
        
        // object
        let obj = {
          name: "xyz",
          age: 50,
        };
        
        console.log(obj.age);
        console.log(obj["name"]);
        
        let obj1 = new Object({
          email: "hii@gmail.com",
        });
        console.log(obj1.email);
        
        // operator
        // types
        // Arithmatic
        // Assignment
        // Comparision
        // logical
        
        // + , - ,* ,/ , % , ** , ++ , --
        console.log(2 + 1);
        console.log(5 - 2);
        console.log(4 * 3);
        console.log(4 / 2);
        
        console.log(5 % 2);
        console.log(3 ** 2);
        
        let i = 3;
        console.log(i++);
        // 4
        
        console.log(++i)
        
        // Assignment
        
        let king="Ram";
        
        let add=i+4;
        console.log(add)
        
        let numb=2;
        // numb=numb+5;
        numb+=5
        console.log(numb)
        
        ```