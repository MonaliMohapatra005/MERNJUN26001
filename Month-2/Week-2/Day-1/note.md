# React Basics Notes

---

# React Components

## What is a Component?

A **Component** is a reusable piece of UI. It helps divide a webpage into smaller, manageable parts.

Examples:

- Navbar
- Header
- Footer
- Sidebar
- Login Form
- Product Card
- Button

Think of a component as a **JavaScript function that returns JSX (HTML-like code).**

---

# Why Components?

Without components:

- Large files
- Difficult to maintain
- Code duplication
- Hard to debug

With components:

- Reusable
- Easy to maintain
- Cleaner code
- Better organization

---

# Types of Components

## 1. Functional Component (Recommended)

A functional component is simply a JavaScript function.

```
functionHeader() {
return (
<h1>Hello React</h1>
    );
}

exportdefaultHeader;
```

---

## Arrow Function Component

```
constHeader= () => {
return (
<h1>Hello React</h1>
    );
};

exportdefaultHeader;
```

# Creating a Component

### Step 1

Create a file

```
Header.jsx
```

### Step 2

```
constHeader= () => {
return (
<h1>Welcome</h1>
    );
};

exportdefaultHeader;
```

# Fragment

Instead of adding an unnecessary `<div>`, React provides a **Fragment**.

```
<>
<h1>Hello</h1>
<p>React</p>
</>
```

or

```
<React.Fragment>
<h1>Hello</h1>
<p>React</p>
</React.Fragment>
```