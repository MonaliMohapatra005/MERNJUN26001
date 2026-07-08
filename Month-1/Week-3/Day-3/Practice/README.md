# QLITH MERN Internship Batch - JUN 2026



# 3️⃣ Comparison Operators

Used to compare two values (returns `true` or `false`).

| Operator | Description | Example |
| --- | --- | --- |
| `==` | Equal (loose) | `5 == "5"` → true |
| `===` | Strict equal | `5 === "5"` → false |
| `!=` | Not equal | `5 != 4` |
| `!==` | Strict not equal | `5 !== "5"` |
| `>` | Greater than | `10 > 5` |
| `<` | Less than | `10 < 5` |
| `>=` | Greater or equal | `10 >= 10` |
| `<=` | Less or equal | `10 <= 8` |

### ⚠ Important:

- `==` checks value only
- `===` checks value + data type
    
    👉 Always prefer `===` in real projects.
    

# 4️⃣Logical Operators

Logical operators are used to **combine multiple conditions** and return a **boolean value (`true` or `false`)**.

---

## AND Operator (`&&`)

👉 Returns `true` **only if both conditions are true**

### Syntax:

```
condition1&&condition2
```

### Example:

```
letage=20;
lethasID=true;

console.log(age>=18&&hasID);
// true
```

### Truth Table:

| A | B | A && B |
| --- | --- | --- |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

---

## OR Operator (`||`)

👉 Returns `true` if **at least one condition is true**

### Syntax:

```
condition1||condition2
```

### Example:

```
letisAdmin=false;
letisEditor=true;

console.log(isAdmin||isEditor);
// true
```

### Truth Table:

| A | B | A || B |
| --- | --- | --- |
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

---

## NOT Operator (`!`)

👉 Reverses the boolean value

### Syntax:

```
!condition
```

### Example:

```
letisLoggedIn=false;

console.log(!isLoggedIn);
// true
```

# JavaScript Conditional Statements

Conditional statements are used to make decisions in a program. They allow JavaScript to execute different blocks of code based on whether a condition is true or false.

---

# 1. if Statement

The `if` statement executes a block of code only when the specified condition is true.

### Syntax

```jsx
if (condition) {
    // code to be executed if condition is true
}
```

### Example

```jsx
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

### Output

```jsx
You are eligible to vote.
```

### Explanation

- The condition `age >= 18` is checked.
- Since the condition is true, the code inside the `if` block is executed.
- If the condition is false, nothing happens.

---

# 2. if...else Statement

The `if...else` statement is used when there are two possible outcomes.

### Syntax

```jsx
if (condition) {
    // code executed if condition is true
} else {
    // code executed if condition is false
}
```

### Example

```jsx
let age = 16;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}
```

### Output

```jsx
You cannot vote.
```

### Explanation

- If the condition is true, the `if` block executes.
- If the condition is false, the `else` block executes.

---

# 3. if...else if...else Statement (Ladder)

The `if...else if...else` statement is used to check multiple conditions.

### Syntax

```jsx
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else if (condition3) {
    // code if condition3 is true
} else {
    // code if none of the conditions are true
}
```

### Example

```jsx
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

### Output

```jsx
Grade C
```

### Explanation

- Conditions are checked from top to bottom.
- As soon as one condition becomes true, its block executes.
- The remaining conditions are skipped.

---

# 4. switch Statement

The `switch` statement is used when you need to compare one value against multiple possible cases.

### Syntax

```jsx
switch (expression) {
    case value1:
        // code block
        break;

    case value2:
        // code block
        break;

    default:
        // code block
}
```

### Example

```jsx
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
```

### Output

```jsx
Wednesday
```

### Explanation

- The expression value is compared with each `case`.
- When a match is found, the corresponding code executes.
- The `break` statement stops execution from continuing to the next case.
- The `default` block executes if no case matches.

### Important Note

If `break` is omitted, execution continues to the next case even if the current case matches.

Example:

```jsx
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");

    case 2:
        console.log("Tuesday");

    case 3:
        console.log("Wednesday");
}
```

### Output

```jsx
Monday
Tuesday
Wednesday
```

This behavior is called **fall-through**.

---

# 5. Ternary Operator (? :)

The ternary operator is a shorthand version of the `if...else` statement.

### Syntax

```jsx
condition ? expression1 : expression2;
```

### Example

```jsx
let age = 20;

let result = age >= 18
    ? "Eligible to Vote"
    : "Not Eligible to Vote";

console.log(result);
```

### Output

```jsx
Eligible to Vote
```

### Explanation

- If the condition is true, the value before `:` is returned.
- If the condition is false, the value after `:` is returned.
- It is useful for writing short and simple conditions.

---

# Comparison of Conditional Statements

| Statement | Purpose |
| --- | --- |
| if | Execute code only when a condition is true |
| if...else | Choose between two possible outcomes |
| if...else if...else | Check multiple conditions |
| switch | Select one block from multiple cases |
| Ternary Operator | Short form of if...else for simple conditions |

---

# Conclusion

JavaScript provides multiple conditional statements to control program flow:

- Use `if` for a single condition.
- Use `if...else` for two possible outcomes.
- Use `if...else if...else` for multiple conditions.
- Use `switch` when comparing one value against many cases.
- Use the `ternary operator` for concise conditional expressions.

These statements help developers create dynamic and interactive applications by making decisions based on different conditions.