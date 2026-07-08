# 1. Background Image

The `background-image` property is used to set an image as the background of an HTML element.

## Syntax

```
selector {
    background-image:url("image.jpg");
}
```

## Example

```
<div class="box"></div>
```

```
.box {
    width:400px;
    height:200px;
    background-image:url("nature.jpg");
}
```

The image `nature.jpg` will appear as the background of the div.

---

## Background Image Properties

### 1. background-repeat

Controls whether the image repeats.

```
background-repeat:repeat;
```

**Values:**

| Value | Description |
| --- | --- |
| repeat | Repeats both horizontally and vertically (default) |
| repeat-x | Repeats horizontally |
| repeat-y | Repeats vertically |
| no-repeat | No repetition |

Example:

```
background-repeat:no-repeat;
```

---

### 2. background-size

Controls the size of the background image.

```
background-size:cover;
```

**Values:**

| Value | Description |
| --- | --- |
| cover | Covers entire element |
| contain | Fits entire image inside element |
| 100px 100px | Custom width and height |

Example:

```
background-size:cover;
```

---

### 3. background-position

Controls image position.

```
background-position:center;
```

Examples:

```
background-position:top;
background-position:bottom;
background-position:left;
background-position:right;
background-position:center;
```

---

---

## Complete Example

```
.hero {
    height:100vh;
    background-image:url("nature.jpg");
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
   
}
```

**CSS Display Property**

## What is the Display Property?

The **display** property in CSS determines **how an HTML element is displayed on a webpage** and how it interacts with other elements.

It controls:

- Whether an element starts on a new line
- How much width it occupies
- Whether width and height can be applied
- How elements are positioned relative to each other

### Syntax

```
selector {
    display:value;
}
```

Example:

```
div {
    display:block;
}
```

---

# Types of Display Properties

The most commonly used display values are:

```
display:inline;
display:block;
display:inline-block;
display:none;
display:flex;
display:grid;
```

---

# 1. Display: Inline

An inline element takes **only the space required by its content**.

### Characteristics

✔ Does not start on a new line

✔ Multiple inline elements appear on the same line

✔ Occupies only content width

✘ Width cannot be set

✘ Height cannot be set

✘ Top and bottom margins may not work properly

Example:

```
span {
    display:inline;
}
```

---

### Output

```
<span>HTML</span>
<span>CSS</span>
<span>JS</span>
```

Result:

```
HTML CSS JS
```

(All appear in one line)

### Examples of Inline Elements

```
<span>Text</span>
<ahref="#">Link</a>
<strong>Bold</strong>
```

# 2. Display: Block

A block element occupies the **entire available width** and always starts from a new line.

### Characteristics

✔ Starts on a new line

✔ Takes full width available

✔ Width can be changed

✔ Height can be changed

✔ Margin and padding work properly

### Examples of Block Elements

```
<div></div>
<p></p>
<h1></h1>
<section></section>
```

### Example

```
<div>HTML</div>
<div>CSS</div>
<div>JavaScript</div>
```

Output:

```
HTML
CSS
JavaScript
```

Each element appears on a separate line.

### CSS

```
div {
    display:block;
}
```

### Real-Life Example

Think of each block element as a separate paragraph in a book.

Each paragraph starts on a new line.

# 3. Display: Inline-Block

Inline-block combines the features of both inline and block elements.

### Characteristics

✔ Appears in the same line

✔ Width can be set

✔ Height can be set

✔ Margin and padding work properly

✔ Does not occupy full width

### Example

```
<divclass="box">HTML</div>
<divclass="box">CSS</div>
<divclass="box">JS</div>
```

### Output

```
<divclass="box">1</div>
<divclass="box">2</div>
<divclass="box">3</div>
```

Result:

```
[1] [2] [3]
```

(All appear in same line while allowing width and height)

# 3. Justify Content

`justify-content` is used in Flexbox to align items along the **main axis** (horizontal by default).

```
.container {
    display:flex;
    justify-content:center;
}
```

---

## Values of justify-content

### 1. flex-start

Items start from the left.

```
justify-content:flex-start;
```

```
[A][B][C]
```

---

### 2. center

Items move to center.

```
justify-content:center;
```

```
      [A][B][C]
```

---

### 3. flex-end

Items move to right.

```
justify-content:flex-end;
```

```
            [A][B][C]
```

---

### 4. space-between

Equal space between items.

```
justify-content:space-between;
```

```
[A]     [B]     [C]
```

---

### 5. space-around

Equal space around items.

```
justify-content:space-around;
```

```
  [A]   [B]   [C]
```

---

### 6. space-evenly

Perfectly equal spacing everywhere.

```
justify-content:space-evenly;
```

```
 [A]  [B]  [C]
```

---

# 4. Align Items

`align-items` aligns items along the **cross axis** (vertical by default).

```
.container {
    display:flex;
    align-items:center;
}
```

---

## Values

### 1. flex-start

Top alignment

```
align-items:flex-start;
```

---

### 2. center

Center alignment

```
align-items:center;
```

---

### 3. flex-end

Bottom alignment

```
align-items:flex-end;
```

---

### 4. stretch

Default value.

Items stretch to fill container height.

```
align-items:stretch;
```