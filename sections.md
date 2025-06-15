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


# Section 7: debugging
Browser Sources Tab:
- can create a breakpoint on browser

Strict Mode component
- provided by react package
- executes every component twice during development phase

Browser Developer Extension
- show structures of and details on components such as which functions and props are being used

# Section 8: working with refs & portals
Refs
- doesn't re-evaluate components
- can be used to gain direct DOM element access (-> great for reading values or accessing certain browser APIs)
- ref is a way to access a DOM node or React element instance directly


State
- causes component reevaluation
- should be used for values that are directly reflected in the UI

# Section 10: advanced state management
 Component Composition
 - prevents props drilling by upbringing component up to higher position to prevent descending props
 
 API Context 
 - state management aboard components
 - provides accessibility to the state and functions through context
 
 Reducer
 - a function that reduces one or more complex values to a simpler one
 - in combination with context, it can provides simplicity and structure of functions to work with context value
 
 
# Section 11: Handling side effects
useEffect
- prevents infinite loop of component rendering
- controls execution of specific state data

useCallback
- prevents recreation of objects such as functions

# Section 13: Optimization techniques 
memo - compare prop values and only re-render when the value has changed
- don't use it on components where props will change frequently
- use it as high ip in the component tree as possible 
useMemo - can prevent execution of function when rendering a component

useCallback - when some functions are passed as props to a component, this will preventing passing new functon object everytime when components are rendered

## DOM update process
1 : creating a component tree (partial tree)
2 : creating a virtual snapshot of the target HTML code
3 : compares old snapshot with new snapshot
4 : identify and apply changes to the real DOM

state batching: state changes of same value within the same function will only trigger the component to render once

million.js: react optimize package by just configuring into any react project

# Section 14: class-based components

- hooks (useEffect, useState)
- context 

# Section 15: sending http requests
- fetching and saving user places 

# Section 16: building custom react hooks
repetition: rules of hooks
- only call hooks inside of component or other hook (custom hook) functions
- only call hooks on the top level 

why custom hooks?
- to enhance reusability

hooks
- conventionally starts with "use" prefix. Eventually, all hooks are also just functions, thus, can be called anywhere. However, React project structure enforces these functions that start with "use" prefix to be only used following rules of hooks

# Section 17: working-with-forms&user-input
form data extraction and validation
There are various strategies to extract user input such as
- useRef
- useState
- FormData Object

As we extract data, we implement validation as desired and needed

# Section 18: handling-forms via form actions
useStateAction
- given a custom function which likely extracts and handle form data
- return form state and form action as values which can be used during form submission 

useFormStatus
- has to be used seperately in an isolated component to provide form status data

useOptimistic
- used to optimistically update data that can be displayed to users ahead of data update
- roll back if data update fails


