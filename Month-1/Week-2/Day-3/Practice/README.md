# QLITH MERN Internship Batch - JUN 2026


# 1. CSS Grid

CSS Grid is a **two-dimensional layout system** used to arrange elements in rows and columns.

It makes designing complex layouts much easier than using floats or flexbox alone.

---

## Basic Syntax

```
<divclass="container">
<divclass="item">1</div>
<divclass="item">2</div>
<divclass="item">3</div>
<divclass="item">4</div>
</div>
```

```
.container {
  display:grid;
}
```

When `display: grid` is applied, the parent becomes a **grid container** and its children become **grid items**.

---

## grid-template-columns

Defines the number and width of columns.

```
.container {
  display:grid;
  grid-template-columns:200px200px200px;
}
```

Output:

```
| 200px | 200px | 200px |
```

---

### Equal Columns

```
.container {
  display:grid;
  grid-template-columns:1fr1fr1fr;
}
```

`fr` = Fraction Unit

```
| 1fr | 1fr | 1fr |
```

Each column gets equal space.

---

### Different Column Sizes

```
.container {
  grid-template-columns:1fr2fr1fr;
}
```

```
| 25% | 50% | 25% |
```

---

## grid-template-rows

Defines row heights.

```
.container {
  display:grid;
  grid-template-rows:100px200px;
}
```

---

## gap

Adds spacing between rows and columns.

```
.container {
  gap:20px;
}
```

---

### Separate Row and Column Gap

```
.container {
  row-gap:10px;
  column-gap:20px;
}
```

---

## repeat()

Instead of writing repeatedly:

```
grid-template-columns: 1fr 1fr 1fr 1fr;
```

Use:

```
grid-template-columns:repeat(4, 1fr);
```

Grid Item

Column

```
.item1 {
  grid-column:2/3;
}
```

Item occupies 2 line to 3 line in column.

---

### Row Span

```
.item1 {
  grid-row:4/5;
}
```

Item occupies 4 line to 5 line in rows.

## Grid Areas

```
.container {
  display:grid;
  grid-template-areas:
"header header"
"sidebar content"
"footer footer";
}
```

```
.header {
  grid-area:header;
}

.sidebar {
  grid-area:sidebar;
}

.content {
  grid-area:content;
}

.footer {
  grid-area:footer;
}
```

# 2. CSS Transform

Transform changes the position, size, rotation, or shape of an element.

---

## translate()

Moves an element.

```
.box {
  transform:translate(100px,50px);
}
```

Moves:

- 100px right
- 50px down

---

### translateX()

```
transform:translateX(100px);
```

---

### translateY()

```
transform:translateY(50px);
```

---

## scale()

Changes size.

```
transform:scale(1.5);
```

150% bigger.

---

### scaleX()

```
transform:scaleX(2);
```

Width doubles.

---

### scaleY()

```
transform:scaleY(2);
```

Height doubles.

---

## rotate()

Rotates element.

```
transform:rotate(45deg);
```

Clockwise 45°.

---

### Negative Rotation

```
transform:rotate(-45deg);
```

Counter-clockwise.

---

## skew()

Tilts element.

```
transform:skew(20deg);
```

---

### skewX()

```
transform:skewX(20deg);
```

---

### skewY()

```
transform:skewY(20deg);
```

---

## Multiple Transforms

```
transform:
translateX(100px)
rotate(45deg)
scale(1.2);
```

Transforms are applied in sequence.

---

## Transform Origin

Defines pivot point.

```
transform-origin:center;
```

# 3. CSS Transition

Transitions create smooth effects when property values change.

Without transition:

```
button:hover {
  background:red;
}
```

Color changes instantly.

---

## Basic Syntax

```
button {
  transition:all0.5s;
}
```

Now changes occur smoothly.

---

## Transition Properties

```
transition-property:background-color;
transition-duration: 1s;
transition-timing-function:ease;
transition-delay: 0s;
```

---

## Shorthand

```
transition:
background-color 1sease;
```

---

## Example

```
button {
  background:blue;
  transition:background0.5s;
}

button:hover {
  background:red;
}
```

# 4. CSS Animation

Animation allows elements to move automatically without user interaction.

---

## Step 1: Create Keyframes

```
@keyframesmove {
from {
    transform:translateX(0);
  }

to {
    transform:translateX(300px);
  }
}
```

---

## Step 2: Apply Animation

```
.box {
  animation:move2s;
}
```

# Example: Bouncing Ball

```
@keyframesbounce {
0% {
    transform:translateY(0);
  }

50% {
    transform:translateY(-150px);
  }

100% {
    transform:translateY(0);
  }
}

.ball {
  width:100px;
  height:100px;
  background:red;
  border-radius:50%;

  animation:
bounce  1s  infinite;
}
```