# JavaScript Notes

## What is JavaScript?

JavaScript is a **high-level, object-based programming language** used to create interactive and dynamic web pages. It is primarily a **client-side scripting language**, meaning it runs in the user's web browser.

JavaScript is:

- Interpreted (executed line by line without compilation)
- User-friendly and easy to learn
- Platform-independent
- Widely used for web development

---

# History of JavaScript

JavaScript was developed by **Brendan Eich** in **1995**.

### Evolution of JavaScript Names

1. **Mocha** (Initial Name)
2. **LiveScript**
3. **JavaScript** (Final Name)

---

# Features of JavaScript

### 1. Lightweight

JavaScript requires less memory and has a simple syntax, making it easy to execute.

### 2. Interpreted Language

JavaScript code is executed line by line by the browser without requiring compilation.

### 3. Open Source

JavaScript is freely available and supported by a large developer community.

### 4. Cross-Platform

JavaScript works on different operating systems such as Windows, Linux, and macOS.

### 5. Dynamically Typed Language

You do not need to specify the data type of a variable while declaring it.

**Example:**

```
let name = "John";
let age = 25;
```

### 6. Weakly Typed Language

JavaScript can automatically convert one data type into another when necessary.

**Example:**

```
console.log("5" + 5); // Output: 55
```

### 7. Client-Side Scripting Language

JavaScript runs directly in the user's browser, reducing server load and improving performance.

### 8. Synchronous Language

JavaScript executes code one statement at a time in the order it appears.

---

# JavaScript File Extension

JavaScript files use the following extension:

```
.js
```

**Example:**

```
index.js
app.js
script.js
```

---

# Attaching JavaScript to HTML

JavaScript can be added to an HTML document in two ways:

1. Internal JavaScript
2. External JavaScript

---

## 1. Internal JavaScript

In this method, JavaScript code is written directly inside the HTML file using the `<script>` tag.

### Syntax

```
<head>
    <script>
        // JavaScript Code
    </script>
</head>
```

### Example

```
<!DOCTYPE html>
<html>
<head>
    <script>
        document.write("Hello JavaScript");
    </script>
</head>
<body>
</body>
</html>
```

---

## 2. External JavaScript

In this method, JavaScript code is written in a separate `.js` file and linked to the HTML file.

### Step 1: Create a JavaScript File

```
// script.js

console.log("Welcome to JavaScript");
```

### Step 2: Link the File with HTML

```
<body>
    <script src="script.js"></script>
</body>
```

### Advantages of External JavaScript

- Better code organization
- Reusability across multiple pages
- Easier maintenance

---

# Printing Statements in JavaScript

JavaScript provides different methods to display output.

## 1. document.write()

Used to display content directly on the web page.

### Syntax

```
document.write("Hello World");
```

### Output

```
Hello World
```

---

## 2. console.log()

Used to display output in the browser's console.

### Syntax

```
console.log("Hello World");
```

### Output

```
Hello World
```

**Note:** Open browser Developer Tools (F12) and go to the Console tab to view the output.

---

# JavaScript Variables

A variable is a container used to store data values.

### Example

```
var name = "John";
var age = 25;
```

Here:

- `name` stores a string value.
- `age` stores a numeric value.

---

# Types of Variables

### 1. Global Variable

A variable declared outside any function is called a global variable.

```
var company = "ABC";

function show() {
    console.log(company);
}
```

Global variables can be accessed from anywhere in the program.

---

### 2. Local Variable

A variable declared inside a function is called a local variable.

```
function show() {
    var name = "John";
    console.log(name);
}
```

Local variables can only be accessed within that function.

---

# Rules for Declaring Variables (Identifiers)

### Rule 1

Variable names must start with:

- A letter (A-Z or a-z)
- An underscore (_)
- A dollar sign ($)

### Rule 2

After the first character, numbers can be used.

**Example**

```
var value1 = 100;
```

### Rule 3

JavaScript variable names are case-sensitive.

```
var x = 10;
var X = 20;
```

Here, `x` and `X` are different variables.

---

# Correct Variable Names

```
var x = 10;

var _value = "John";

var $price = 500;

var student1 = "Alex";
```

---

# Incorrect Variable Names

```
var 123 = 30;    // Cannot start with a number

var *aa = 320;   // Special characters are not allowed

var first-name = "John"; // Hyphen is not allowed
```