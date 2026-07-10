# React Router

## What is React Router?

**React Router** is a routing library for React that enables **client-side navigation** in Single Page Applications (SPAs). It allows users to move between different pages (components) without reloading the browser.

---

# Definition

React Router maps **URLs (paths)** to **React components**, allowing different components to be displayed based on the current URL.

---

# Why React Router?

Without React Router:

- Every page navigation reloads the browser.
- Slower user experience.
- More requests to the server.

With React Router:

- No page reload.
- Faster navigation.
- Better user experience.
- Browser history support.
- Bookmarkable URLs.

---

# Key Features

- Client-side routing
- Dynamic routing
- Nested routing
- URL parameters
- Query parameters
- Protected routes
- Navigation history
- Lazy loading support

---

# How React Router Works

```
User clicks a link
        ↓
URL changes
        ↓
React Router matches the URL
        ↓
Corresponding React component renders
        ↓
Page updates without reloading
```

---

# Routing

**Routing** is the process of displaying different components based on the URL.

Example:

```
/          → Home Page
/about     → About Page
/contact   → Contact Page
/profile   → Profile Page
```

---

# Route

A **Route** connects a URL path with a React component.

Example:

```
/about → About Component
```

---

# Path

A **Path** is the URL entered by the user.

Examples:

```
/
/about
/contact
/dashboard
```

---

# Navigation

Navigation means moving from one page (route) to another.

Example:

```
Home → About → Contact
```

---

# Client-Side Routing

Client-side routing changes the displayed component **without refreshing the browser**.

### Advantages

- Fast
- Smooth navigation
- Better performance
- Improved user experience

---

# Server-Side Routing

Server-side routing sends a new HTML page from the server every time a URL changes.

### Characteristics

- Browser reloads
- Slower navigation
- More server requests

---

# Types of Routing

## 1. Static Routing

Routes are predefined.

Example:

```
/
/about
/contact
```

---

## 2. Dynamic Routing

The route contains variable values.

Example:

```
/user/10
/user/25
/user/100
```

The same page displays different data depending on the URL.

---

## 3. Nested Routing

A route inside another route.

Example:

```
Dashboard
   ├── Profile
   ├── Settings
   └── Reports
```

---

# URL Parameters

A value passed inside the URL.

Example:

```
/product/101
/student/25
```

Here:

```
101
25
```

are URL parameters.