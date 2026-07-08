# React Props Notes

## Introduction to Props in React

### What are Props?

**Props** stands for **Properties**.

Props are a mechanism in React that allows data to be passed from a **Parent Component** to a **Child Component**. They make components dynamic and reusable by allowing different values to be supplied without modifying the component itself.

Props are similar to **function arguments** because they provide input to a component.

> **Definition:**
> 
> 
> Props are read-only values passed from one component to another to share data and customize component behavior.
> 

---

# Why are Props Used?

Props are used to:

- Pass data from parent components to child components.
- Make components reusable.
- Customize component behavior.
- Improve code maintainability.
- Reduce code duplication.
- Build dynamic user interfaces.

Without props, every component would display the same static data.

---

# Real-Life Example

Imagine a teacher has multiple students.

Instead of creating a separate Student component for every student, we create one Student component and pass different information using props.

Example:

```
Student Name: Rahul
Age: 20

Student Name: Priya
Age: 21

Student Name: Aman
Age: 19
```

The same component displays different information because different props are passed.

---

# Basic Syntax of Props

## Parent Component

```
functionApp() {
return (
<Student
name="Rahul"
age={20}
course="React"
/>
  );
}
```

---

## Child Component

```
functionStudent(props) {
return (
<div>
<h2>{props.name}</h2>
<p>Age: {props.age}</p>
<p>Course: {props.course}</p>
</div>
  );
}
```

---

## Output

```
Rahul
Age: 20
Course: React
```

---

# How Props Work

```
Parent Component
       │
       │ passes data
       ▼
Child Component
```

Flow of Data

```
App
 │
 ├── name="Rahul"
 ├── age={20}
 └── city="Bhubaneswar"

          ▼

Student Component
```

React only allows data to move from **Parent → Child**.

This is called **One-Way Data Flow**.

---

# Passing Different Types of Props

React allows almost every JavaScript data type to be passed as props.

---

## 1. String

```
<Greetingname="Soumya"/>
```

```
functionGreeting(props) {
return<h1>Hello {props.name}</h1>;
}
```

---

## 2. Number

```
<Studentmarks={95}/>
```

```
functionStudent(props) {
return<h2>{props.marks}</h2>;
}
```

---

## 3. Boolean

```
<UserisLoggedIn={true}/>
```

```
functionUser(props) {
return (
<div>
            {props.isLoggedIn?"Welcome":"Login"}
</div>
    );
}
```

---

## 4. Array

```
<Applanguages={["HTML","CSS","React"]}/>
```

```
functionApp(props) {
return (
<ul>
            {props.languages.map((lang) => (
<likey={lang}>{lang}</li>
            ))}
</ul>
    );
}
```

---

## 5. Object

```
<Appstudent={{name:"Rahul", age:20}}/>
```

```
functionApp(props) {
return (
<>
<h2>{props.student.name}</h2>
<p>{props.student.age}</p>
</>
    );
}
```

---

## 6. Function

Functions can also be passed as props.

Parent Component

```
functionApp() {

functiongreet() {
alert("Hello Student");
    }

return<Buttonclick={greet}/>;
}
```

Child Component

```
functionButton(props) {
return (
<buttononClick={props.click}>
            Click Me
</button>
    );
}
```