# QLITH MERN Internship Batch - JUN 2026



- 
    
    # CSS Position Property – Complete Notes
    
    The `position` property in CSS is used to control how an element is positioned on a webpage.
    
    ## Syntax
    
    ```
    selector {
      position:value;
    }
    ```
    
    Possible values:
    
    ```
    position:static;
    position:relative;
    position:absolute;
    position:fixed;
    position:sticky;
    ```
    
    ---
    
    # 1. Static Position (Default)
    
    Every HTML element is `position: static` by default.
    
    ### Characteristics
    
    - Follows normal document flow.
    - `top`, `right`, `bottom`, and `left` do not work.
    - Element stays in its natural position.
    
    ### Example
    
    ```
    <divclass="box">Box</div>
    ```
    
    ```
    .box {
      position:static;
    }
    ```
    
    ### Output
    
    The element appears where it normally belongs in the document.
    
    ---
    
    # 2. Relative Position
    
    The element remains in the normal document flow, but can be moved relative to its original position.
    
    ### Characteristics
    
    - Original space is preserved.
    - Can use:
        - `top`
        - `right`
        - `bottom`
        - `left`
    - Often used as a parent for absolute positioning.
    
    ### Example
    
    ```
    <divclass="box">Box</div>
    ```
    
    ```
    .box {
      position:relative;
      top:20px;
      left:30px;
    }
    ```
    
    ### Output
    
    The box moves:
    
    - 20px down
    - 30px right
    
    But its original space remains occupied.
    
    ---
    
    # 3. Absolute Position
    
    The element is removed from the normal document flow.
    
    ### Characteristics
    
    - Does not reserve its original space.
    - Positioned relative to the nearest positioned ancestor.
    - Uses:
        - `top`
        - `right`
        - `bottom`
        - `left`
    
    ### Example
    
    ```
    <divclass="parent">
    <divclass="child">Child</div>
    </div>
    ```
    
    ```
    .parent {
      position:relative;
      width:300px;
      height:200px;
      border:2pxsolidblack;
    }
    
    .child {
      position:absolute;
      top:20px;
      right:20px;
    }
    ```
    
    ### Output
    
    The child appears:
    
    - 20px from the top
    - 20px from the right
    
    inside the parent.
    
    ---
    
    ## Important Rule
    
    Absolute elements look for the nearest ancestor that has:
    
    ```
    position:relative;
    position:absolute;
    position:fixed;
    position:sticky;
    ```
    
    If no positioned parent exists, the element is positioned relative to the entire webpage (`body`).
    
    ---
    
    # 4. Fixed Position
    
    The element is positioned relative to the browser window (viewport).
    
    ### Characteristics
    
    - Removed from normal flow.
    - Stays in the same position while scrolling.
    - Commonly used for:
        - Navbar
        - Chat button
        - Floating actions
    
    ### Example
    
    ```
    .navbar {
      position:fixed;
      top:0;
      width:100%;
    }
    ```
    
    ### Output
    
    The navbar remains visible at the top even when the page scrolls.
    
    ---
    
    # 5. Sticky Position
    
    A combination of `relative` and `fixed`.
    
    ### Characteristics
    
    - Behaves like relative initially.
    - Becomes fixed when a scroll threshold is reached.
    - Requires `top`, `left`, `right`, or `bottom`.
    
    ### Example
    
    ```
    .header {
      position:sticky;
      top:0;
    }
    ```
    
    ### Output
    
    The header scrolls normally until it reaches the top of the screen, then stays fixed there.
    
    ---
    
    # Comparison Table