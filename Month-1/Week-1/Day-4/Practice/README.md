# QLITH MERN Internship Batch - JUN 2026



# HTML Multimedia Elements

## 1. HTML Image Tag (`<img>`)

The `<img>` tag is used to display images on a web page. Images make a website more attractive and help users understand content visually.

### Syntax

```
<img src="image.jpg" alt="Description of Image" width="300" height="200">
```

### Required Attributes

| Attribute | Description |
| --- | --- |
| `src` | Specifies the path (location) of the image. |
| `alt` | Alternative text displayed if the image cannot be loaded. It also improves accessibility. |

### Common Attributes

| Attribute | Description |
| --- | --- |
| `width` | Specifies the width of the image. |
| `height` | Specifies the height of the image. |
| `title` | Displays a tooltip when the mouse hovers over the image. |

### Example

```
<!DOCTYPE html>
<html>
<head>
    <title>Image Example</title>
</head>
<body>

<h2>My Image</h2>

<img src="nature.jpg"
     alt="Beautiful Nature"
     width="400"
     height="250">

</body>
</html>
```

### Note

- Always provide the `alt` attribute for better accessibility.
- It is recommended to specify `width` and `height` to avoid layout shifts while loading the image.

---

# 2. HTML Audio Tag (`<audio>`)

The `<audio>` tag is used to embed audio files such as music, podcasts, or sound effects into a webpage.

### Syntax

```
<audio src="song.mp3" controls> </audio>
```

### Audio Attributes

| Attribute | Value | Description |
| --- | --- | --- |
| `controls` | controls | Displays audio controls such as Play, Pause, and Volume. |
| `autoplay` | autoplay | Automatically starts playing when the page loads. |
| `loop` | loop | Repeats the audio continuously. |
| `muted` | muted | Starts the audio with sound muted. |

### Example

```
<!DOCTYPE html>
<html>
<body>

<h2>Audio Example</h2>

<audio src="music.mp3" controls>
    <audio>

</body>
</html>
```

---

# 3. HTML Video Tag (`<video>`)

The `<video>` tag is used to embed video content into a webpage.

### Supported Video Formats

- MP4 (`.mp4`)
- WebM (`.webm`)
- OGG (`.ogg`)

### Syntax

```
<video width="500" height="300" src="video" controls>
</video>
```

### Video Attributes

| Attribute | Description |
| --- | --- |
| `controls` | Displays video controls such as Play, Pause, and Volume. |
| `autoplay` | Automatically starts playing the video. |
| `loop` | Repeats the video continuously. |
| `muted` | Starts the video without sound. |
| `width` | Sets the width of the video. |
| `height` | Sets the height of the video. |

### Example

```
<!DOCTYPE html>
<html>
<body>

<h2>Video Example</h2>

<video width="500" height="300" controls></html>
```

# Ways to Add CSS in HTML

CSS (Cascading Style Sheets) is used to style and design web pages. It controls the layout, colors, fonts, spacing, animations, and overall appearance of HTML elements.

There are **three ways to add CSS to an HTML document**:

1. Inline CSS
2. Internal CSS
3. External CSS

---

# 1. Inline CSS

Inline CSS is applied directly to an HTML element using the `style` attribute.

### Syntax

```html
<tag style="property:value;">Content</tag>
```

### Example

```html
<!DOCTYPE html>
<html>
<body>

<h1 style="color: blue;">Welcome to CSS</h1>

<p style="font-size:20px; color:red;">
    This is a paragraph with inline CSS.
</p>

</body>
</html>
```

### Advantages

- Easy to apply for a single element.
- Useful for quick testing.

### Disadvantages

- Difficult to maintain for large projects.
- Repeats code multiple times.
- Not recommended for professional websites.

---

# 2. Internal CSS

Internal CSS is written inside the `<style>` tag within the `<head>` section of the HTML document.

### Syntax

```html
<head>
    <style>
        selector {
            property: value;
        }
    </style>
</head>
```

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: green;
        }

        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
<body>

<h1>Welcome to CSS</h1>
<p>This is a paragraph using Internal CSS.</p>

</body>
</html>
```

### Advantages

- Better organization than inline CSS.
- Suitable for single-page websites.

### Disadvantages

- Cannot be reused across multiple pages.
- Increases HTML file size.

---

# 3. External CSS

External CSS is written in a separate `.css` file and linked to the HTML document using the `<link>` tag.

### Step 1: Create a CSS File

**style.css**

```css
h1 {
    color: purple;
}

p {
    color: darkblue;
    font-size: 18px;
}
```

### Step 2: Link CSS File to HTML

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Welcome to CSS</h1>
<p>This is a paragraph using External CSS.</p>

</body>
</html>
```

### Advantages

- Reusable across multiple pages.
- Easy to maintain.
- Keeps HTML clean and organized.
- Best practice for real-world projects.

### Disadvantages

- Requires an additional CSS file.

---

# CSS Priority Order

When multiple CSS styles are applied to the same element, CSS follows a priority order:

1. Inline CSS (Highest Priority)
2. Internal CSS
3. External CSS
4. Browser Default Styles (Lowest Priority)

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: green;
        }
    </style>
</head>
<body>

<h1 style="color:red;">Hello World</h1>

</body>
</html>
```

### Output

The heading color will be **Red** because Inline CSS has higher priority than Internal CSS.

---

# Comparison Table

| Method | Location | Reusable | Recommended |
| --- | --- | --- | --- |
| Inline CSS | Inside HTML Element | No | ❌ No |
| Internal CSS | Inside `<style>` Tag | No | ⚠️ For Small Projects |
| External CSS | Separate `.css` File | Yes | ✅ YeInternal CS |
- Code
    - index.html
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            
            <link rel="stylesheet" href="style.css">
            <style>
                p{
                    background-color: blue;
                    font-size: 50px;
                    color: green;
                }
                h2{
                    background-color: coral;
                }
            </style>
        
        </head>
        <body>
        
            <!-- image  -->
             <img src="https://www.shutterstock.com/image-photo/tiger-peacefully-reclined-on-mossy-260nw-2519850751.jpg" alt="tiger" width="100">
        
             <!-- video -->
              <video src="./video/best fielding in cricket ---- _cricket _shorts(360P).mp4" width="200" height="200" muted controls loop></video>
              <!-- audio -->
               <audio src=""></audio>
        
               <!-- select -->
                <select name="count" id="">
                    <option value="1">IND</option>
                    <option value="pak">PAK</option>
                    <option value="">CHINA</option>
                    <option value="">AMERICA</option>
                </select>
        
                <!-- <input type="text"> -->
                <textarea name="" id="" rows="3" cols="5"></textarea>
        
                <nav>nav bar</nav>
                <!-- non-semantic tag -->
                 <div style="background-color: green;">
                    sdjhsj
                 </div>
        
                 <span style="background-color: red;">djfhdjhf</span>
        
                <!-- css -->
                 <!--  there are three ways to add the css in html
                     =>Inline 
                     =>Internal
                     =>External  
                 -->
                
                 <!-- inline -->
        
                 <h1 style="background-color: pink; color:red">This is heading</h1>
                 <!-- internal -->
                 <p style="color: brown;">this is the paragraph</p>
        
                 <!-- External -->
        
                 <h2>this is the h2 element</h2>
        </body>
        </html>
        ```