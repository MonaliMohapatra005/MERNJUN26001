# React Conditional Rendering

## What is Conditional Rendering?

Conditional Rendering in React means **displaying different UI elements based on a condition**.

Instead of manually showing or hiding elements, React automatically renders components according to the current state or props.

---

## Why Use Conditional Rendering?

- Show data only when it exists.
- Display loading indicators.
- Show error messages.
- Restrict access based on user roles.
- Display different components depending on application state.
- Improve user experience.

---

# Syntax

```
condition?<Component1/>:<Component2/>
```

or

```
condition&&<Component/>
```

---

# 1. Using if...else

```
functionApp() {constisLoggedIn=true;if (isLoggedIn) {return<h1>Welcome User</h1>;
  }return<h1>Please Login</h1>;
}
```

### Output

```
Welcome User
```

---

# 2. Using Ternary Operator (? :)

```
functionApp() {constage=20;return (<div>
      {age>=18?<h2>Adult</h2>:<h2>Minor</h2>}</div>
  );
}
```

### Output

```
Adult
```

---

# 3. Using Logical AND (&&)

Used when you only want to render something if the condition is true.

```
functionApp() {constisAdmin=true;return (<div>
      {isAdmin&&<button>Delete User</button>}</div>
  );
}
```

### Output

```
Delete User Button
```

---

# 4. Multiple Conditions

```
functionApp() {constrole="admin";return (<>
      {role==="admin"? (<h1>Admin Panel</h1>
      ):role==="user"? (<h1>User Dashboard</h1>
      ): (<h1>Guest</h1>
      )}</>
  );
}
```

# React useEffect Hook

---

## What is useEffect?

`useEffect` is a React Hook that allows you to **perform side effects** inside functional components.

A side effect is any operation that interacts with something outside the normal rendering process.

Examples include:

- API calls
- Fetching data
- Timers
- Event listeners
- DOM updates
- Local Storage
- WebSockets

---

## Syntax

```
useEffect(() => {// Side Effect

}, [dependencies]);
```

---

# Import

```
import {useEffect }from"react";
```

---

# Example 1: Runs After Every Render

```
import {useEffect }from"react";functionApp() {useEffect(() => {console.log("Component Rendered");
  });return<h1>Hello React</h1>;
}
```

Runs every time the component renders.

---

# Example 2: Runs Only Once

```
useEffect(() => {console.log("Component Mounted");
}, []);
```

### Empty dependency array

```
[]
```

Runs only once after the component mounts.

---

# Example 3: Run When State Changes

```
import {useState,useEffect }from"react";functionApp() {const [count,setCount]=useState(0);useEffect(() => {console.log("Count Changed");
  }, [count]);return (<><h2>{count}</h2><buttononClick={() =>setCount(count+1)}>
        Increment</button></>
  );
}
```

Runs only when `count` changes.

---

# Example 4: Multiple Dependencies

```
useEffect(() => {console.log("Updated");

}, [name,age]);
```

# Cleanup Function

The cleanup function runs:

- Before the component unmounts.
- Before the effect runs again when dependencies change.

```
useEffect(() => {console.log("Mounted");return () => {console.log("Cleanup");
  };

}, []);
```

---

# Dependency Array Explained

## No Dependency Array

```
useEffect(() => {

});
```

Runs after every render.

---

## Empty Dependency Array

```
useEffect(() => {

}, []);
```

Runs only once after the initial render.

---

## Single Dependency

```
useEffect(() => {

}, [count]);
```

Runs when `count` changes.

---

## Multiple Dependencies

```
useEffect(() => {

}, [count,name]);
```

Runs when either `count` or `name` changes.

Runs whenever `name` or `age` changes.