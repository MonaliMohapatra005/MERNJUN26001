# HTML Notes

# 1. HTML Headings

HTML headings are used to define titles and subtitles on a webpage.

```
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>
```

### Importance of Headings

| Tag | Usage |
| --- | --- |
| `<h1>` | Main Heading (Most Important) |
| `<h2>` | Sub Heading |
| `<h3>` | Section Heading |
| `<h4>` | Sub Section |
| `<h5>` | Minor Heading |
| `<h6>` | Least Important Heading |

---

# 2. HTML Paragraph

The `<p>` tag is used to create paragraphs.

```
<p>This is a paragraph.</p>
```

Example:

```
<p>
HTML stands for HyperText Markup Language.
It is used to create web pages.
</p>
```

---

# 3. Horizontal Line

The `<hr>` tag creates a horizontal line.

```
<hr>
```

Example:

```
<h1>Chapter 1</h1>
<p>Introduction</p>

<hr>

<h1>Chapter 2</h1>
<p>Content</p>
```

Output:

---

---

# 4. Line Break

The `<br>` tag is used to break a line.

```
Hello<br>
Welcome to HTML
```

Output:

Hello

Welcome to HTML

---

# 5. Preformatted Text

The `<pre>` tag preserves spaces and line breaks exactly as written.

```
<pre>
Name : John
Age  : 20
City : Delhi
</pre>
```

---

# 6. HTML Text Formatting Tags

## Bold Text

```
<b>Bold Text</b>
```

## Important Text

```
<strong>Important Text</strong>
```

## Italic Text

```
<i>Italic Text</i>
```

## Emphasized Text

```
<em>Emphasized Text</em>
```

## Marked Text

```
<mark>Highlighted Text</mark>
```

## Deleted Text

```
<del>Deleted Text</del>
```

## Underlined Text

```
<u>Underlined Text</u>
```

## Subscript Text

```
H<sub>2</sub>O
```

Output:

H₂O

## Superscript Text

```
(a+b)<sup>2</sup>
```

Output:

(a+b)²

---

# 7. HTML Lists

Lists are used to group related items.

## Types of Lists

### 1. Ordered List

Items are displayed with numbers or letters.

```
<ol>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ol>
```

Output:

1. HTML
2. CSS
3. JavaScript

### Ordered List Types

```
<ol type="A">
```

Options:

| Type | Output |
| --- | --- |
| 1 | 1,2,3 |
| A | A,B,C |
| a | a,b,c |
| I | I,II,III |
| i | i,ii,iii |

Example:

```
<oltype="A">
<li>HTML</li>
<li>CSS</li>
</ol>
```

---

### 2. Unordered List

Displays bullet points.

```
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>
```

### Types

```
<ulstyle="list-style-type:circle;">
```

Options:

| Type | Description |
| --- | --- |
| disc | Default Bullet |
| circle | Hollow Circle |
| square | Square Bullet |
| none | No Bullet |

---

### 3. Description List

Used for terms and descriptions.

```
<dl>
<dt>HTML</dt>
<dd>HyperText Markup Language</dd>

<dt>CSS</dt>
<dd>Cascading Style Sheets</dd>
</dl>
```

Output:

HTML

→ HyperText Markup Language

CSS

→ Cascading Style Sheets

# . HTML Tables

Tables arrange data into rows and columns.

### Basic Structure

```
<table>
<tr>
<th>Name</th>
<th>Age</th>
</tr>

<tr>
<td>John</td>
<td>20</td>
</tr>
</table>
```

### Table Tags

| Tag | Description |
| --- | --- |
| `<table>` | Defines Table |
| `<tr>` | Table Row |
| `<th>` | Table Heading |
| `<td>` | Table Data |
| `<caption>` | Table Title |

Example:

```
<tableborder="1">
<caption>Student Data</caption>

<tr>
<th>Name</th>
<th>Course</th>
</tr>

<tr>
<td>Rahul</td>
<td>MERN</td>
</tr>
</table>
```