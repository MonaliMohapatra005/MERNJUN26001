Loops in JavaScript

Loops are used to **execute a block of code repeatedly** until a condition becomes false.

---

# 1️⃣ `for` Loop

### ✅ Syntax

```
for (initialization;condition;increment/decrement) {
// code block
}
```

### ✅ Example

```
for (leti=1;i<=5;i++) {
console.log(i);
}
```

👉 Output:

```
1 2 3 4 5
```

### 🔎 How it works:

- `let i = 1` → Runs once
- `i <= 5` → Checks condition
- `i++` → Increases value after each iteration

# 2️⃣ `while` Loop

### ✅ Syntax

```
while (condition) {
// code
}
```

### ✅ Example

```
leti=1;

while (i<=5) {
console.log(i);
i++;
}
```

👉 Condition checked **before** execution.

# 3️⃣ `do...while` Loop

### ✅ Syntax

```
do {
// code
}while (condition);
```

### ✅ Example

```
leti=1;

do {
console.log(i);
i++;
}while (i<=5);
```

👉 Runs **at least once**, even if condition is false.

### 🔎 Difference Between `while` and `do...while`

| while | do...while |
| --- | --- |
| Condition checked first | Condition checked after execution |
| May run 0 times | Runs at least 1 time |

# 4️⃣ `for...of` Loop (Used for Arrays, Strings)

### ✅ Syntax

```
for (letvalueofiterable) {
// code
}
```

### ✅ Example (Array)

```
letfruits= ["Apple","Mango","Banana"];

for (letfruitoffruits) {
console.log(fruit);
}
```

👉 Output:

```
Apple
Mango
Banana
```

# 5️⃣ `for...in` Loop (Used for Objects)

### ✅ Syntax

```
for (letkeyinobject) {
// code
}
```

### ✅ Example

```
letuser= {
   name:"John",
   age:25
};

for (letkeyinuser) {
console.log(key,user[key]);
}
```

👉 Output:

```
name John
age 25
```

# 📘 JavaScript Strings – Complete Notes

A **String** is a sequence of characters used to represent text.

By literal format

```
let name="Qlith";
let city='Bhubaneswar';
let message=`Hello World`;
```

# Accessing Characters

### ✅ Using Index

```
letstr="Hello";
console.log(str[0]);// H
console.log(str[4]);// o
```

### ❗ Strings are Immutable

You cannot change characters directly.

```
letstr="Hello";
str[0]="Y";// ❌ Won't change
```

# 1. String.length

The `length` property returns the total number of characters in a string.

### Syntax

```
string.length
```

### Example

```
let text = "JavaScript";

console.log(text.length);
```

### Output

```
10
```

> Spaces are also counted as characters.
> 

### Example

```
let text = "Hello World";

console.log(text.length);
```

### Output

```
11
```

---

# 2. String.slice()

The `slice()` method extracts a part of a string and returns a new string.

### Syntax

```
string.slice(startIndex, endIndex)
```

- `startIndex` → Starting position (included)
- `endIndex` → Ending position (excluded)

### Example

```
let text = "JavaScript";

console.log(text.slice(0, 4));
```

### Output

```
Java
```

### Example

```
let text = "JavaScript";

console.log(text.slice(4));
```

### Output

```
Script
```

### Example (Negative Index)

```
let text = "JavaScript";

console.log(text.slice(-6));
```

### Output

```
Script
```

---

# 3. String.replace()

The `replace()` method replaces only the **first occurrence** of a specified value.

### Syntax

```
string.replace(searchValue, newValue)
```

### Example

```
let text = "I love Java. Java is awesome.";

console.log(text.replace("Java", "JavaScript"));
```

### Output

```
I love JavaScript. Java is awesome.
```

> Only the first "Java" is replaced.
> 

---

# 4. String.replaceAll()

The `replaceAll()` method replaces **all occurrences** of a specified value.

### Syntax

```
string.replaceAll(searchValue, newValue)
```

### Example

```
let text = "Java Java Java";

console.log(text.replaceAll("Java", "JS"));
```

### Output

```
JS JS JS
```

---

# 5. String.toUpperCase()

Converts all characters into uppercase.

### Syntax

```
string.toUpperCase()
```

### Example

```
let text = "javascript";

console.log(text.toUpperCase());
```

### Output

```
JAVASCRIPT
```

---

# 6. String.toLowerCase()

Converts all characters into lowercase.

### Syntax

```
string.toLowerCase()
```

### Example

```
let text = "JAVASCRIPT";

console.log(text.toLowerCase());
```

### Output

```
javascript
```

---

# 7. String.concat()

Joins two or more strings together.

### Syntax

```
string1.concat(string2)
```

### Example

```
let firstName = "Soumya";
let lastName = "Maharana";

console.log(firstName.concat(" ", lastName));
```

### Output

```
Soumya Maharana
```

---

# 8. String.trim()

Removes whitespace from both the beginning and the end of a string.

### Syntax

```
string.trim()
```

### Example

```
let text = "   Hello JavaScript   ";

console.log(text.trim());
```

### Output

```
Hello JavaScript
```

---

# 9. String.trimStart()

Removes whitespace only from the beginning of the string.

### Syntax

```
string.trimStart()
```

### Example

```
let text = "    Hello World";

console.log(text.trimStart());
```

### Output

```
Hello World
```

---

# 10. String.trimEnd()

Removes whitespace only from the end of the string.

### Syntax

```
string.trimEnd()
```

### Example

```
let text = "Hello World     ";

console.log(text.trimEnd());
```

### Output

```
Hello World
```

# 11. String.split()

The `split()` method converts a string into an array.

### Syntax

```
string.split(separator)
```

### Example 1

```
let text = "HTML,CSS,JavaScript";

console.log(text.split(","));
```

### Output

```
["HTML", "CSS", "JavaScript"]
```

---

### Example 2

```
let text = "Hello World";

console.log(text.split(" "));
```

### Output

```
["Hello", "World"]
```

---

### Example 3

Split every character

```
let text = "Java";

console.log(text.split(""));
```

### Output

```
["J", "a", "v", "a"]
```