# QLITH MERN Internship Batch - JUN 2026


# CSS SELECTORS

## Introduction

Imagine a website contains hundreds of HTML elements such as headings, paragraphs, buttons, images, links, forms, and tables.

How does CSS know which element should receive the style?

The answer is **Selectors**.

A Selector is used to target one or more HTML elements and apply CSS styles to them.

Without selectors, CSS cannot identify which element needs styling.

---

# Types of CSS Selectors

CSS selectors are divided into five categories:

1. Simple Selectors
2. Combinator Selectors
3. Attribute Selectors
4. Pseudo-Class Selectors
5. Pseudo-Element Selectors

---

# 1. SIMPLE SELECTORS

Simple selectors directly target HTML elements.

There are five types of simple selectors:

1. ID Selector
2. Class Selector
3. Tag Selector
4. Group Selector
5. Universal Selector

---

## 1. ID Selector

An ID selector is used when we want to style a single unique element.

Every ID should be unique within a webpage.

### Syntax

```css
#idName{
    color:red;
}
```

### Example

HTML

```html
<h1 id="title">Welcome to CSS</h1>
```

CSS

```css
#title{
    color:red;
}
```

### Output

The heading becomes red.

### When to Use?

Use ID selectors when only one element requires a specific style.

---

## 2. Class Selector

A class selector is used when multiple elements need the same style.

### Syntax

```css
.className{
    color:blue;
}
```

### Example

HTML

```html
<h2 class="heading">HTML</h2>
<h2 class="heading">CSS</h2>
<h2 class="heading">JavaScript</h2>
```

CSS

```css
.heading{
    color:blue;
}
```

### Output

All headings become blue.

### When to Use?

Whenever multiple elements share the same styling.

Classes are used more frequently than IDs in real-world projects.

---

## 3. Tag Selector

A tag selector styles all elements of a specific HTML tag.

### Syntax

```css
tagname{
    property:value;
}
```

### Example

```css
p{
    color:green;
}
```

HTML

```html
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

### Output

All paragraphs become green.

### When to Use?

When every element of the same type requires identical styling.

---

## 4. Group Selector

Sometimes multiple elements need the same styling.

Instead of writing separate CSS for each element, we can group them.

### Syntax

```css
h1,p,a{
    color:purple;
}
```

### Example

```html
<h1>Heading</h1>
<p>Paragraph</p>
<a href="#">Link</a>
```

All three elements become purple.

### Advantage

Reduces code duplication.

---

## 5. Universal Selector

The universal selector targets every element on the webpage.

### Symbol

- 

### Example

```css
*{
    margin:0;
    padding:0;
}
```

### Why is it used?

Browsers apply default spacing to elements.

The universal selector is commonly used to remove that spacing.

---

# 2. COMBINATOR SELECTORS

Combinator selectors target elements based on their relationship with other elements.

Think of them as family relationships.

Parent → Child → Sibling

There are four combinator selectors:

1. Descendant Selector
2. Child Selector
3. Adjacent Sibling Selector
4. General Sibling Selector

---

## 1. Descendant Selector

A descendant selector targets all children, grandchildren, great-grandchildren, and so on.

### Symbol

(space)

### Example

HTML

```html
<div>
    <p>Paragraph 1</p>

    <section>
        <p>Paragraph 2</p>
    </section>
</div>
```

CSS

```css
div p{
    color:red;
}
```

### Output

Both paragraphs become red.

### Why?

Because both paragraphs are inside the div.

Direct or indirect children are selected.

---

## 2. Child Selector

A child selector targets only direct children.

### Symbol

> 
> 

### Example

HTML

```html
<div>

    <p>Paragraph 1</p>

    <section>
        <p>Paragraph 2</p>
    </section>

</div>
```

CSS

```css
div > p{
    color:blue;
}
```

### Output

Paragraph 1 becomes blue.

Paragraph 2 remains unchanged.

### Why?

Because Paragraph 2 is not a direct child of div.

It is inside section.

---

## Difference Between Descendant and Child Selector

```css
div p
```

Targets all paragraphs inside div.

```css
div > p
```

Targets only direct paragraphs inside div.

---

## 3. Adjacent Sibling Selector

Targets only the first sibling immediately after the selected element.

### Symbol

- 

### Example

HTML

```html
<h1>Heading</h1>

<p>Paragraph 1</p>

<p>Paragraph 2</p>

<p>Paragraph 3</p>
```

CSS

```css
h1 + p{
    color:red;
}
```

### Output

Only Paragraph 1 becomes red.

### Why?

Because it is immediately after h1.

---

## 4. General Sibling Selector

Targets all siblings after the selected element.

### Symbol

~

### Example

HTML

```html
<h1>Heading</h1>

<p>Paragraph 1</p>

<p>Paragraph 2</p>

<p>Paragraph 3</p>
```

CSS

```css
h1 ~ p{
    color:green;
}
```

### Output

Paragraph 1, Paragraph 2, and Paragraph 3 become green.

---

# 3. ATTRIBUTE SELECTOR

Attribute selectors target elements based on their attributes.

### Example

HTML

```html
<input type="text">
<input type="password">
```

CSS

```css
input[type="text"]{
    border:2px solid blue;
}
```

### Output

Only the text input receives the blue border.

---

# 4. PSEUDO-CLASS SELECTORS

Pseudo-classes define a special state of an element.

Pseudo-class uses a single colon (:)

### Real Life Example

A button can be:

- Hovered
- Clicked
- Focused
- first-child
- last-child
- nth-child(number)

Pseudo-classes style these states.

---

## :hover

When the mouse pointer moves over an element.

```css
button:hover{
    background:black;
    color:white;
}
```

---

## :active

When the element is being clicked.

```css
button:active{
    transform:scale(0.95);
}
```

---

## :focus

Used mainly for form elements.

```css
input:focus{
    border:2px solid blue;
}
```

---

## :first-child

Selects the first child.

```css
li:first-child{
    color:green;
}
```

---

## :last-child

Selects the last child.

```css
li:last-child{
    color:red;
}
```

---

## :nth-child()

Selects a specific child.

```css
li:nth-child(2){
    color:orange;
}
```

Second item selected.

### Special Values

```css
li:nth-child(odd)
```

Selects odd elements.

```css
li:nth-child(even)
```

Selects even elements.Pseudo-elements style a specific part of an element.

- Codes
    - index.html
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>this is H1</h1>
            
            <p id="paragraph">this is paragraph</p>
        
            <p class="p-class">
                this is the second p
            </p>
        
            <div class="p-class">
              hii my name is div
            </div>
        
            <div class="parent">
                <p class="direct-child">first paragraph</p>
        
                <div>
                    <p>nexted paragraph</p>
                </div>
            </div>
        
            <div class="first-adj">
                this is the first adjascent element 1
            </div>
            <div class="second-adj">
                this is the second adjascent element 2
            </div>
            
            <section>this is the box</section>
        
            <input type="text" placeholder="enter your name">
        
            <ul>
                <li>first</li>
                <li>second</li>
                <li>Third</li>
                <li>Four</li>
            </ul>
        
            <div class="box">
                Lorem ipsum dolor sit amet.
            </div>
        </body>
        </html>
        ```
        
    - style.css
        
        ```css
        
        /* selectors */
        
        /* Types of selector
           =>simple selector
             ->id selector
             -> class selector
             -> tag name selector
             -> group name  selector
             -> universal selector
        */
        
        #paragraph{
            background-color: aqua;
        }
        
        .p-class{
            color: brown;
        }
        
        h1{
            background-color: red;
        }
        
        #paragraph,h1{
            font-style: italic;
        }
        
        /*~ universal selctor */
        /* 
        *{
            font-family: fantasy;
        } */
        
        /* => combinator selector
             -> descedent selector
             -> direct child selector
             -> Adjascent sibling selector
             -> general sibling selector
         */
        
         .parent p{
            background-color: chartreuse;
         }
         .parent>p{
            color: crimson;
         }
        
         .parent + div{
            color: darkorange;
         }
        
         .parent ~ div{
            background-color: darkorchid;
         }
        
         /*  => pseudo class selector
                -> hover
                -> active
                -> focus
                -> nth-child
                ->first-child
                -> last-child
          */
        
        section{
            width: 100px;
            height: 50px;
            background-color: blue;
          }
        
          section:hover{
            background-color: coral;
            font-size: 20px;
          }
        
          section:active{
            background-color: red;
          }
        
          input:focus{
            background-color: green;
          }
        
          li:first-child{
            color: red;
          }
          li:last-child{
            color: yellow;
          }
          li:nth-child(3){
            color: brown;
          }
        
          *{
            box-sizing: border-box;
          }
          /* box-model */
        
          .box{
            width: 100px;
            height: 100px;
            padding:10px 5px;
            border: 10px dotted red;
            margin: 100px 300px;
            margin-left: 400px;
          }
        ```
        
- Task
    
    Design this ui
    
    !image.png
    
    !image.png
    
    !image.png
    
- Soft Skill Assignment Guide
    
    # CSS Technical Communication Assignment
    
    ### 🧠 Purpose of This Section:
    
    This assignment is designed to improve students' technical communication skills and confidence in explaining fundamental CSS concepts clearly, accurately, and professionally.
    
    ---
    
    ### 📌 Why This Assignment Matters:
    
    - Helps improve technical speaking and presentation skills.
    - Builds confidence in explaining CSS concepts.
    - Strengthens understanding of core CSS topics.
    - Prepares students for technical interviews and practical discussions.
    - Enhances communication skills required in software development careers.
    
    ---
    
    ## 🎯 Assignment Topic
    
    ### Choose **ONE** of the following topics and explain it in detail.
    
    ### Option 1: Explain Simple Selectors in CSS
    
    ### Topics to Cover
    
    1. What are CSS Selectors?
    2. Explain the Simple Selectors:
    3. Explain the syntax of each selector.
    4. Explain the difference between ID and Class selectors.
    
    ---
    
    ### Option 2: Explain Pseudo-Class Selectors in CSS
    
    ### Topics to Cover
    
    1. What is a Pseudo-Class Selector?
    2. Explain the Pseudo-Classes:
    3. Explain the syntax of each pseudo-class.
    
    ---
    
    ### Option 3: Explain the CSS Box Model
    
    ### Topics to Cover
    
    1. What is the CSS Box Model?
    2. Why is the Box Model important in web design?
    3. Explain the four parts of the Box Model:
        - Content
        - Padding
        - Border
        - Margin
    4. Explain the difference between Padding and Margin.
    5. Explain the use of box-sizing property.
    
    ---
    
    ## Guidelines
    
    - Minimum Duration: **3 Minutes**
    - Maximum Duration: **5 Minutes**
    - Choose only **ONE** topic from the above options.
    - Speak clearly and confidently.
    - Explain concepts in your own words.
    - Demonstrate examples wherever possible.
    - Ensure proper lighting and clear audio.
    - Record the video professionally.
    - Avoid reading directly from notes.
    
    ---
    
    ## Submission
    
    1. Record your explanation video and save it in **MP4 format**.
    2. Upload the video to **Google Drive**.
    3. Set sharing permission to:
        
        **Anyone with the link can view**
        
    4. Rename the file as:
        
        **YourName_CSSSoftSkillAssignment.mp4**
        
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
    | Total | 100 |
    
    ---
    
    ### Note
    
    The objective of this assignment is not only to test your CSS knowledge but also to improve your ability to explain technical concepts effectively. Strong communication skills are essential for developers during interviews, team discussions, client meetings, presentations, and professional software development environments.