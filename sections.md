# Section 3
## jsx 
- Used to describe & create HTML elements in JS in a declrative way
However, jsx is not supported by browsers, so it transforms into browser-readable elements

## Component funtions must
- name with uppercase character
- return renderable content

## Props
- pass data to components

## State
- use hooks such as useState to update variables and re-render component

# Section 4:

# Section 5:

# Section 6: Styling React Components
Vanilla CSS: advantages & disadvantages
Advantages
- CSS code is decoupled from JSX code
- Therefore, CSS code can be written by another developer who needs minial access to JSX code
Disadvantages
- You need to know CSS
- CSS rules may clash across components

Inline Styles can prevent this broad style application, but still you need to know CSS to do this, and you have to edit them all individually

CSS Modules: helps to scope styles to specific components, but demands many sub css module files

styled-components package:
- npm install styled-components

Tailwind CSS
- npm install tailwindcss @tailwindcss/vite