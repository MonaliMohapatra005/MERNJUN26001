# QLITH MERN Internship Batch - JUN 2026


# HTML Anchor (`<a>`) Tag

## Introduction

The **Anchor Tag (`<a>`)** is used to create hyperlinks in HTML. Hyperlinks allow users to navigate from one webpage to another, open files, send emails, or move to different sections within the same page.

### Syntax

```
<a href="URL">Link Text</a>
```

### Example

```
<a href="https://www.google.com">Visit Google</a>
```

**Output:**

Visit Google

When the user clicks the link, it opens the specified webpage.

---

# Default Link Colors in Browsers

By default, hyperlinks appear differently based on their state:

| Link State | Appearance |
| --- | --- |
| Unvisited Link | Blue and Underlined |
| Visited Link | Purple and Underlined |
| Active Link | Red and Underlined |

---

# Important Attributes of `<a>` Tag

The most commonly used attributes are:

1. **href**
2. **target**
3. **download**

---

# 1. href Attribute

## Definition

The **href (Hypertext Reference)** attribute specifies the destination URL of the hyperlink.

### Syntax

```
<a href="URL">Link Text</a>
```

### Example

```
<a href="https://www.google.com">Visit Google</a>
```

### Output

Clicking the link opens Google's website.

---

# 2. target Attribute

## Definition

The **target** attribute specifies where the linked document should open.

### Syntax

```
<a href="URL"target="value">Link Text</a>
```

### Values of target Attribute

| Value | Description |
| --- | --- |
| `_blank` | Opens the linked page in a new tab or window |
| `_self` | Opens the linked page in the same tab (Default) |
| `_parent` | Opens the linked page in the parent frame |
| `_top` | Opens the linked page in the full browser window |

---

### Example 1: Open Link in New Tab

```
<a href="https://www.google.com"target="_blank">
    Visit Google
</a>
```

### Example 2: Open Link in Same Tab

```
<a href="https://www.google.com"target="_self">
    Visit Google
</a>
```

---

# 3. download Attribute

## Definition

The **download** attribute tells the browser to download the linked file instead of opening it.

### Syntax

```
<a href="file-path"download>
    Download File
</a>
```

# Different Types of Input Fields

There are many input types available in HTML5.

---

# 1. Text Input

Used to enter single-line text.

```
<input type="text">
```

### Example

```
<input type="text"placeholder="Enter your name">
```

### Output

Name: ____________

---

# 2. Password Input

Used to enter passwords.

Characters are hidden.

```
<input type="password">
```

### Example

```
<input type="password"placeholder="Enter Password">
```

### Output

Password: ********

---

# 3. Email Input

Accepts email addresses.

```
<input type="email">
```

### Example

```
<input type="email"placeholder="Enter Email">
```

### Valid

```
abc@gmail.com
```

### Invalid

```
abcgmail.com
```

---

# 4. Number Input

Accepts only numbers.

```
<input type="number">
```

### Example

```
<input type="number"min="1"max="100">
```

---

# 5. Tel Input

Used for phone numbers.

```
<input type="tel">
```

### Example

```
<input type="tel"placeholder="9876543210">
```

---

# 6. URL Input

Accepts website URLs.

```
<input type="url">
```

### Example

```
<input type="url"placeholder="https://example.com">
```

---

# 7. Search Input

Used for search boxes.

```
<input type="search">
```

### Example

```
<input type="search"placeholder="Search Here">
```

---

# 8. Date Input

Used to select a date.

```
<input type="date">
```

### Example

```
<input type="date">
```

---

# 9. Time Input

Used to select time.

```
<input type="time">
```

---

# 10. Datetime-Local Input

Used to select date and time together.

```
<input type="datetime-local">
```

---

# 11. Month Input

Used to select month and year.

```
<input type="month">
```

---

# 12. Week Input

Used to select a week.

```
<input type="week">
```

---

# 13. Color Input

Used to select colors.

```
<input type="color">
```

### Example

```
<input type="color">
```

---

# 14. Range Input

Creates a slider.

```
<input type="range">
```

### Example

```
<input type="range"min="0"max="100">
```

---

# 15. Checkbox Input

Allows multiple selections.

```
<input type="checkbox">
```

### Example

```
<input type="checkbox"> HTML
<input type="checkbox"> CSS
<input type="checkbox"> JavaScript
```

### Output

☑ HTML

☑ CSS

☑ JavaScript

---

# 16. Radio Button Input

Allows only one selection from a group.

```
<input type="radio">
```

### Example

```
<input type="radio"name="gender"> Male
<input type="radio"name="gender"> Female
```

### Output

○ Male

○ Female

---

# 17. File Input

Used to upload files.

```
<inputtype="file">
```

### Example

```
<inputtype="file">
```

### Multiple Files

```
<inputtype="file"multiple>
```

---

# 18. Hidden Input

Stores hidden information.

Not visible to users.

```
<inputtype="hidden"value="123">
```

### Example

```
<inputtype="hidden"name="userid"value="1001">
```

---

# 19. Submit Button

Used to submit form data.

```
<inputtype="submit">
```

### Example

```
<inputtype="submit"value="Register">
```

---

# 20. Reset Button

Used to clear all form fields.

```
<inputtype="reset">
```

### Example

```
<inputtype="reset"value="Clear">
```

---

# 21. Button Input

Creates a clickable button.

```
<inputtype="button">
```

### Example

```
<inputtype="button"value="Click Me">
```

---

# 22. Image Input

Uses an image as a submit button.

```
<inputtype="image"src="submit.png">
```

### Example

```
<input
type="image"
src="submit.png"
width="100"
>
```

### Example

```
<a href="/images/school.jpg"download>
    Download Image
</a>
```

### Output

When the user clicks the link, the image file is downloaded to their device.