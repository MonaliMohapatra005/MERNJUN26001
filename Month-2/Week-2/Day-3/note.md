# React `useState` Hook

## 📌 What is `useState`?

`useState` is a React Hook that allows functional components to create and manage state (dynamic data). Whenever the state changes, React automatically re-renders the component.

---

## Syntax

```
import {useState }from"react";const [state,setState]=useState(initialValue);
```

### Parameters

- **state** → Current value of the state.
- **setState** → Function used to update the state.
- **initialValue** → The default value of the state.

---

## Example 1: Counter

```
importReact, {useState }from"react";functionCounter() {const [count,setCount]=useState(0);return (<div><h2>Count: {count}</h2><buttononClick={() =>setCount(count+1)}>
        Increment</button><buttononClick={() =>setCount(count-1)}>
        Decrement</button></div>
  );
}exportdefaultCounter;
```

---

## Example 2: Input Field

```
importReact, {useState }from"react";functionUserInput() {const [name,setName]=useState("");return (<div><inputtype="text"placeholder="Enter Name"value={name}onChange={(e) =>setName(e.target.value)}/><h2>Hello {name}</h2></div>
  );
}exportdefaultUserInput;
```

---

## Example 3: Boolean State

```
importReact, {useState }from"react";functionToggle() {const [isVisible,setIsVisible]=useState(false);return (<div><buttononClick={() =>setIsVisible(!isVisible)}>
        Toggle</button>

      {isVisible&&<h2>Welcome to React!</h2>}</div>
  );
}exportdefaultToggle;
```

## Advantages of `useState`

- Easy state management
- Automatically re-renders components
- Works in functional components
- Supports any data type
- Makes UI interactive

# React `useContext` Hook

## 📌 What is `useContext`?

`useContext` is a React Hook that allows components to access shared data without passing props manually through every intermediate component (a problem known as **prop drilling**).

It works together with `createContext()` and a Context Provider.

---

## Why Use `useContext`?

Without Context:

```
App
 │
 ├── Parent
 │      │
 │      ├── Child
 │              │
 │              ├── GrandChild
```

If the `GrandChild` needs data from `App`, every component must pass props down.

With Context:

```
Context Provider
      │
      ├── Parent
      ├── Child
      └── GrandChild
```

Any component inside the provider can access the shared data directly.

---

# Steps to Use `useContext`

### Step 1: Create Context

```
import {createContext }from"react";exportconstUserContext=createContext();
```

---

### Step 2: Provide the Context

```
importReactfrom"react";import {UserContext }from"./UserContext";importHomefrom"./Home";functionApp() {constuser="Soumyaranjan";return (<UserContext.Providervalue={user}><Home/></UserContext.Provider>
  );
}exportdefaultApp;
```

---

### Step 3: Consume the Context

```
importReact, {useContext }from"react";import {UserContext }from"./UserContext";functionHome() {constuser=useContext(UserContext);return (<h2>Welcome {user}</h2>
  );
}exportdefaultHome;
```

# Real-Life Uses of `useContext`

- Authentication (Login/Logout)
- Dark and Light Theme
- Shopping Cart
- User Profile
- Language Selection
- Notifications
- Application Settings

---

# Advantages of `useContext`

- Eliminates prop drilling
- Cleaner component structure
- Easier state sharing
- Better code organization
- Works well with other hooks