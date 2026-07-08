# JavaScript DOM (Document Object Model)

# Creating Elements

## createElement()

Creates a new HTML element.

```
consth1=document.createElement("h1");
```

---

Example

```
constheading=document.createElement("h1");

heading.innerText="Hello DOM";

document.body.appendChild(heading);
```

Output

```
Hello DOM
```

---

# appendChild()

Adds an element.

```
parent.appendChild(child);
```

Example

```
constli=document.createElement("li");

li.innerText="Apple";

document.querySelector("ul").appendChild(li);
```

---

# append()

Can append multiple items.

```
parent.append(child1,child2);
```

---

# prepend()

Adds at the beginning.

```
parent.prepend(child);
```

---

# What is DOM?

The **Document Object Model (DOM)** is a programming interface for HTML and XML documents.

When a web page loads, the browser converts the HTML document into a tree-like structure called the **DOM Tree**.

JavaScript uses the DOM to:

- Access HTML elements
- Modify HTML
- Change CSS
- Handle events
- Create/Delete elements
- Validate forms

---

## DOM Structure

```
<!DOCTYPE html>
<html>
<head>
<title>DOM</title>
</head>
<body>
<h1>Hello</h1>
<p>Welcome</p>
</body>
</html>
```

DOM Tree

```
Document
   |
  html
 /    \
head   body
 |     /   \
title h1    p
```

Everything inside HTML becomes an object.

---

# Why DOM?

Without DOM

```
HTML → Static
```

With DOM

```
HTML + JavaScript → Dynamic Website
```

Example

Before

```
Hello
```

After JS

```
Hello Soumya
```

---

# Selecting Elements

## 1. getElementById()

Selects an element using its id.

HTML

```
<h1id="title">Hello</h1>
```

JS

```
constheading=document.getElementById("title");

console.log(heading);
```

---

## 2. getElementsByClassName()

Returns an HTMLCollection.

HTML

```
<pclass="text">One</p>
<pclass="text">Two</p>
```

JS

```
constitems=document.getElementsByClassName("text");

console.log(items);
```

Access

```
items[0]
items[1]
```

---

## 3. getElementsByTagName()

Returns all matching tags.

```
constparagraphs=document.getElementsByTagName("p");
```

---

## 4. querySelector()

Returns the first matching element.

```
document.querySelector("#title");

document.querySelector(".text");

document.querySelector("p");
```

---

## 5. querySelectorAll()

Returns all matching elements.

```
constlist=document.querySelectorAll(".text");
```

Loop

```
list.forEach(item=>{
console.log(item);
});
```

---

# Changing Content

## innerHTML

Changes HTML.

```
element.innerHTML="<h2>Hello</h2>";
```

Output

```
Hello
```

becomes

```
<h2>Hello</h2>
```

---

## innerText

Returns only visible text.

```
element.innerText="Welcome";
```

---

## textContent

Returns all text including hidden text.

```
element.textContent="JavaScript";
```

---

# Changing CSS

## style property

```
element.style.color="red";

element.style.background="yellow";

element.style.fontSize="30px";
```

Example

```
document.getElementById("title").style.color="blue";
```

---

# Attributes

## getAttribute()

```
constvalue=element.getAttribute("href");
```

---

## setAttribute()

```
element.setAttribute("href","https://google.com");
```

---

## removeAttribute()

```
element.removeAttribute("disabled");
```

# Creating Elements

## createElement()

Creates a new HTML element.

```
consth1=document.createElement("h1");
```

---

Example

```
constheading=document.createElement("h1");

heading.innerText="Hello DOM";

document.body.appendChild(heading);
```

Output

```
Hello DOM
```

---

# appendChild()

Adds an element.

```
parent.appendChild(child);
```

Example

```
constli=document.createElement("li");

li.innerText="Apple";

document.querySelector("ul").appendChild(li);
```

---

# append()

Can append multiple items.

```
parent.append(child1,child2);
```

---

# prepend()

Adds at the beginning.

```
parent.prepend(child);
```

# Event Handling

An event is an action performed by the user or browser.

Examples

- Click
- Hover
- Keyboard
- Input
- Submit
- Scroll

---

## addEventListener()

Most recommended.

```
button.addEventListener("click",()=>{
alert("Hello");
});
```

---

# Mouse Events

## click

```
button.addEventListener("click",()=>{
console.log("Clicked");
});
```

---

## dblclick

```
button.addEventListener("dblclick",()=>{
console.log("Double Click");
});
```

---

## mousedown

```
button.addEventListener("mousedown",()=>{
console.log("Mouse Down");
});
```

---

## mouseup

```
button.addEventListener("mouseup",()=>{
console.log("Mouse Up");
});
```

---

## mouseenter

```
box.addEventListener("mouseenter",()=>{
console.log("Entered");
});
```

---

## mouseleave

```
box.addEventListener("mouseleave",()=>{
console.log("Left");
});
```

---

## mousemove

```
box.addEventListener("mousemove",(e)=>{
console.log(e.clientX,e.clientY);
});
```

---

## contextmenu

Right click

```
document.addEventListener("contextmenu",(e)=>{
e.preventDefault();
});
```

---

# Keyboard Events

## keydown

Runs when key is pressed.

```
input.addEventListener("keydown",(e)=>{
console.log(e.key);
});
```

---

## keyup

Runs after key released.

```
input.addEventListener("keyup",(e)=>{
console.log(e.key);
});
```

---

## keypress (Deprecated)

Avoid using it.

---

# Input Events

## input

Runs every time user types.

```
input.addEventListener("input",(e)=>{
console.log(e.target.value);
});
```

---

## change

Runs after value changes and loses focus.

```
input.addEventListener("change",(e)=>{
console.log(e.target.value);
});
```

---

## focus

```
input.addEventListener("focus",()=>{
console.log("Focused");
});
```

---

## blur

```
input.addEventListener("blur",()=>{
console.log("Blur");
});
```

---

# Form Events

## submit

```
form.addEventListener("submit",(e)=>{

e.preventDefault();

console.log("Submitted");

});
```

`e.preventDefault()` prevents the browser from reloading the page.

---

## reset

```
form.addEventListener("reset",()=>{
console.log("Form Reset");
});
```

- Codes
    - Html
        
        ```html
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          </head>
          <body>
            <i class="fa-solid fa-book-bible" style="color: red;"></i>
            <p id="paragraph">this is paragraph</p>
        
            <b class="bold-content">this is bold <span>this is span tag</span></b>
            <strong class="bold-content">this is strong</strong>
        
            <h1>this is heading 1</h1>
            <h1>this is heading 2</h1>
        
            <div class="box-container">
        
            </div>
        
            <button>Submit</button>
        
            <form action="">
        
                <button>Register</button>
            </form>
        
            <input type="text" placeholder="Enter your name">
        
            <h4>this is the h4</h4>
        
            <form action="" class="login">
                <input type="email" placeholder="Enter your email">
                <br>
                <input type="password" placeholder="Enter your password">
                <br>
                <button>Register</button>
            </form>
            <script src="script.js"></script>
          </body>
        </html>
        
        ```
        
    - JS
        
        ```jsx
        console.log("hello welcome");
        
        // DOM manipulation
        
        // getElementById()
        // getElementsByCLassName();
        // getElementsByTagName()
        
        const p = document.getElementById("paragraph");
        console.log(p);
        
        const bold_tags = document.getElementsByClassName("bold-content");
        console.log(bold_tags[1])
        
        const h1_tags=document.getElementsByTagName("h1");
        console.log(h1_tags)
        
        // querySelector()
        // querySelectorAll()
        
        const bolds=document.querySelectorAll(".bold-content");
        console.log(bolds)
        
        // bolds[0].innerText="this is the bold tag tags"
        console.log(bolds[0].innerText)
        console.log(bolds[0].innerHTML)
        console.log(bolds[0].parentNode)
        console.log(bolds[0].className)
        // bolds[0].className="hiiii"
        
        console.log(bolds[0].getAttribute("class"))
        bolds[0].setAttribute("id","bold_id")
        bolds[0].setAttribute("style","color:red")
        console.log(bolds[0].getAttribute("class"));
        
        const div_box=document.querySelector(".box-container");
        console.log(div_box)
        
        // how to create the html element by javascript
        const para=document.createElement("p");
        para.innerText="this is the div paragraph"
        para.style="background-color:red;color:blue"
        
        div_box.append(para)
        
        const para2=document.createElement("p");
        para2.innerText="this is the div paragraph2"
        
        div_box.prepend(para2);
        
        // Event Handling 
        // target body
        // event name
        //  handler code
        
        const btn=document.querySelector("button");
        console.log(btn)
        
        btn.addEventListener("click",()=>{
            console.log("button pressed")
        })
        
        const form=document.querySelector("form");
        form.addEventListener("submit",(e)=>{
            e.preventDefault()
            console.log(e)
            console.log("form submmited")
        })
        
        const input=document.querySelector("input");
        // input.addEventListener("change",()=>{
        //     console.log("input changed")
        // })
        // input.addEventListener("input",()=>{
        //     console.log("input changed")
        // })
        // input.addEventListener("focus",(e)=>{
        //     console.log(e)
        //     console.log("input focus")
        // })
        
        // document.addEventListener("keydown",()=>{
        //     console.log("key down")
        // })
        // document.addEventListener("keyup",()=>{
        //     console.log("key up")
        // })
        document.addEventListener("keypress",()=>{
            console.log("key press")
        })
        
        const h4=document.querySelector("h4");
        
        h4.addEventListener("mouseleave",()=>{
            console.log("mouse leave")
        })
        
        const login_form=document.querySelector(".login");
        const inputs=document.querySelectorAll(".login input");
        
        login_form.addEventListener("submit",(e)=>{
            e.preventDefault();
            let email=inputs[0].value;
            let password=inputs[1].value;
        
            localStorage.setItem("login_data",JSON.stringify({email,password}))
        
            console.log("register form submit")
        })
        
        ```
        
- Task
    
    
- Soft skill Assignment Guide
    
    # JavaScript Technical Communication Assignment
    
    ### 🧠 Purpose of This Section:
    
    This assignment is designed to improve students' technical communication skills and confidence in explaining JavaScript concepts clearly, accurately, and professionally.
    
    ---
    
    # 🎯 Assignment Topic
    
    ### Explain the JavaScript DOM (Document Object Model) and Its Methods
    
    Students should explain:
    
    - What the DOM (Document Object Model) is in JavaScript
    - The advantages of using the DOM
    - Explain the commonly used DOM methods one by one with syntax and examples
    
    ### The following DOM methods should be covered:
    
    - **getElementById()**
    - **getElementsByClassName()**
    - **getElementsByTagName()**
    - **querySelector()**
    - **querySelectorAll()**
    
    ---
    
    ## Guidelines
    
    - Minimum Duration: **3 Minutes**
    - Maximum Duration: **5 Minutes**
    - Speak clearly and confidently.
    - Explain concepts in your own words.
    - Explain each DOM method one by one.
    - Demonstrate the syntax of every DOM method.
    - Provide practical examples wherever possible.
    - Explain when each DOM method is commonly used.
    - Mention the differences between **getElementById()**, **querySelector()**, and **querySelectorAll()**.
    - Explain the purpose and use of **createElement()** and how dynamically created elements are added to a webpage.
    - Ensure proper lighting and clear audio.
    - Record the video professionally.
    - Avoid reading directly from notes.
    
    ---
    
    ## Submission
    
    1. Record your explanation video and save it in **MP4 format**.
    2. Upload the video to **Google Drive**.
    3. Set the sharing permission to:
        
        **Anyone with the link can view**
        
    4. Rename the file as:
        
        **YourName_JavaScriptDOMAssignment.mp4**
        
    5. Submit the Google Drive link before the assigned deadline.
    
    ---
    
    ## Evaluation Criteria
    
    | Criteria | Marks |
    | --- | --- |
    | Concept Clarity | 25 |
    | Technical Accuracy | 25 |
    | Communication Skills | 20 |
    | Confidence & Presentation | 15 |
    | Examples & Demonstration | 15 |
    | **Total** | **100** |
    
    ---
    
    ## Note
    
    The objective of this assignment is to improve both JavaScript knowledge and technical communication skills. Students should focus on explaining **what the DOM (Document Object Model) is, why it is used, and the commonly used DOM methods in JavaScript** clearly, accurately, and confidently. Each DOM method should be explained individually with its syntax, practical examples, and real-world use cases wherever applicable.
    
- Day-2
    - Notes
        
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
    - Codes
        - js
            
            ```jsx
            console.log("hello today we are going to cover the js");
            
            // fetch
            
            // promises
            // let promise = new Promise((resolve, reject) => {
            // //   resolve("resolve");
            //     reject("reject")
            // });
            
            // console.log(promise);
            
            // promise.then((res)=>{
            //   console.log("resolve promise execute",res)
            // }).catch(()=>{
            //     console.log("promise reject")
            // })
            
            async function getAllData() {
              try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
            
                console.log(data);
              } catch (error) {}
            }
            
            // getAllData();
            
            // CRUD
            
            async function createData() {
              try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
                    method:"POST",
                    body:JSON.stringify({
                        name:"hello",
                        age:30
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                });
                const data = await response.json();
            
                console.log(data)
              } catch (error) {}
            }
            
            // createData();
            
            async function getDataById() {
              try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
                const data = await response.json();
            
                console.log(data);
              } catch (error) {}
            }
            
            // getDataById()
            
            async function updateData() {
              try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/5",{
                    method:"PATCH",
                    body:JSON.stringify({
                        name:"hello",
                        age:30
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                });
                const data = await response.json();
            
                console.log(data)
              } catch (error) {}
            }
            
            // updateData()
            
            async function deleteData() {
              try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/5",{
                    method:"DELETE",
                    
                });
                const data = await response.json();
            
                console.log(data)
              } catch (error) {}
            }
            
            // deleteData()
            
            // String interpolation
            console.log("hii" + 2)
            
            let str=`this is the Qlith ${2026}`;
            console.log(str);
            
            // MATH Object
            console.log(Math.PI)
            console.log(Math.LN10);
            
            console.log(Math.sqrt(35));
            console.log(Math.SQRT1_2);
            
            console.log(Math.min(2,39,5,56));
            console.log(Math.max(45,2,34,7))
            console.log(Math.random(9))
            console.log(Math.floor(4.5))
            console.log(Math.ceil(4.000008))
            
            ```