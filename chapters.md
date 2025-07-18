
# Chapter 3: Introduction to React

useState

### The core take-away in Chapter 3
    - React is component-based framework which means it pursues a reusability of objects
    - uses jsx extension that describes and create HTML elements in JS declarative way
        - However, jsx is not supported by browsers, so it transforms into browser-readable elements by returning HTML(ish) code
    - Styles are applied, as one of options, by passing ids to your component elements

# Chapter 4: Tic-tac-toe Game

useState

### The core take-away in Chapter 4
    - You can pass a function which handles a state value to a lower component which will pass the value to the passed function that will then update the value of its component
    - Changes made with useState will re-render a component always whenever changes happen
    - It is important to use as little hooks as possible to optimize performance and complexity


# Chapter 5: Investment Calculator

useState

### The core take-away in Chapter 5
    - In input field, you can receive typed text as a argument and assign it to some desinated function


# Chapter 6: Styling React Components

useState    
styled-components


### Vanilla CSS

- convenient, but broadly applied to children components

### Scoping Styles with CSS moduels
- require specific styling for every component which can lead to too many styling file

### CSS-in-JS styling with "Styled Components" library
Advantages
- styles are scoped to components
- no sperate css files or inline styling

Disadvantage
- No clear seperation of React and CSS
- end up with many relatively small "wrapper" components

### Tailwind CSS
Adavantages
- you don't need to know CSS


# Chapter 7: Debugging react apps

<StrictMode>

### Browser Sources Tab:
    - can create a breakpoint on browser in Sources tab

### Strict Mode component
    - provided by react package
    - executes every component twice during development phase

### Browser Developer Extension
    - profiler to estimate rendering time
    - components to inspect structure


# Chapter 8: Working with refs & portal buidling Timer Challenge

- useRef
- useImperativeHandle
- createPortal

### The core take-away in Chapter 8
    useRef
        - needed especially when you need a state that doesn't re-render everytime
        - not shared between component instances
        - can be used to gain direct DOM element access (-> great for reading values or accessing certain browser APIs)
        - ref is a way to access a DOM node or React element instance directly
    useImperativeHandle
        - connects two ref objects and define methods that both refs value can call
        - createPortal
        - connects two elements which of the first is the element and the second is the location element to be displayed
    Implemented result page of a timer. The method of prompting result page is called in higher-level component where its lower component defines method behavior and decides location of resul page to 
    

# Chapter 9: Project management application

- useRef
- useImperativeHandle
- createPortal

### Chapter 9 implements project management app applying the concepts that has been covered in the previous chapters such as
    -   useRef, useImperativeHandle, createPortal
    -   use useState value collectively by inserting dictionary that contains various data


# Chapter 10: Providing API context for shopping cart

- createContext
- useReducer
- useContext

### The key take-away in Chapter 10
    - API context
        - createContext paired with useReducer provides global data and API to manage the data
        - useContext allows each component to fetch the data and API methods
 
 
# Chapter 11: Place Picker App handling side effect

- useEffect
- useCallback

### The key take-away in Chapter 11
    useEffect
        - handle a side effect that needs to be managed after component renders
        - specify dependency that defines which values trigger re-rendering
        - useEffect needs to handle cleaning up side-effect when the component is unmounted

    useCallback
        - memoize an object that prevents re-creation in the event of re-rendering
        - used to prevent re-creation of some object or variable that is used as a dependency of some other hooks

    localStorage
        - used to locally store and manage data

# Chapter 12: Building quiz app

### Chapter 12 uses the concepts that have been covered in the previous chpaters
    - useEffect
    - useCallback


# Chapter 13: Counter App with Optimization Techniques

### The core key-away in Chapter 13
    memo
        -   prevents re-rendering of entire component by comparing props
        -   don't use it on components where its props will change often
    useMemo
        -   used to cache expensive calculations and prevent them from running every render
        -   caches the result of computation and uses the result again whenever the componenet renders for other reasons
        -   only recaulculate when its dependency changes
    useCallback
        - when some functions are passed as props to a component, this will preventing passing new functon object everytime when components are rendered

### DOM update process
    1 : creating a component tree (partial tree)
    2 : creating a virtual snapshot of the target HTML code
    3 : compares old snapshot with new snapshot
    4 : identify and apply changes to the real DOM

### State Scheduling and Batching
    - state scheduling
        - state update is scheduled which means the to-be-updated value is not instantly available
    - state batching
        - multiple state update within the same function only triggers the component to render once

### million.js
    -   react optimization package by just configuring into any react project
        -   refer to the documentation for performance optimization

# Chapter 14: class-based components

No note

# Chapter 15: Place Picker App sending HTTP requests
npm install
node app.js

    
    - More detail in useEffect
        - state changes inside useEffect will re-render the component, but useEffect won't be called again
    - State update ensuring to handle the latest value
        - you can also pass anonymous function into state set function that receives old state value and return some specific value
    - Optimistic Update with HTTP requests
        - Display updated value optimistically, then revert back when http request fails

# Chapter 16: Place Picekr App building custom react hooks

### The core take-away in Chapter 16
    - custom hook
        - starts with "use" prefix which react recognizes and enforces rules of hooks to your custom hook
        - rules of hooks
            - only called inside component or inside other hook functions
            - only called in the top level
        - why use custom hooks?
            - custom hook generalizes functionality, which enhances reusability
            - in this chapter, we implement useFetch hook that generalizes http request to fetch user places
        

# Chapter 17: working with forms & user input for Login Page

### There are numerous strategies to extract user input
    useRef
        - extract and validate input when user submits
        - has to manually reset data which is discouraged
    useState
        - actively validates user input every time they enter
        - shows validation result onBlur
        - here custom hook to outsource validation logics, states to achieve adaptability and efficiency
    browser-provided FormData object
        - built-in browser objects
        - extract and validate input when user submits
        - easy to reset data


# Chapter 18: handling forms data via form actions - Signup Form

# Chapter 18: handling forms data via form actions - Share Opinion App

### The key take-away in Chapter 18
    Context API and useActionState
    - API method is defined within Provider component
    useActionState
        - facilitates extracting user submitted form data and its validation
        - takes a function action that handles form data
        - returns form state, and form action
        - useActionState also provides pending state
    useFormStatus
        - used to provide status of form submission to represent pending state when user submits form
    useOptimistic
        - hook that takes initial value and returns optimistic update state
        - used before action function, then, if the action function returns error, revert back the update state

# Chapter 19: Building Food Order App

### Chapter 19 reiterate in-depth examples of context API and custom hooks
    - Context API and Custom Hook
        Context API
            - managing userProgress status through context API
            - through passing userProgress status to modal component, manage displaying modal component
        Custom Hook
            - custom hook to facilitate HTTP requests to fetch or update meal data with context data
    - Custom hook can be implmeneted in an individual component, but can prevent repetition

# Chapter 20, 21: Shopping cart with redux

- npm install redux
- redux toolkit

### Redux Toolkit
    createSlice
        - define a slice of state with its actions and reducers in Redux store
        - this connects to hooks (useDispatch, useSelector)
    useSelector
        - subscribes to Redux store that checks shallow comparison
        - to read values from the Redux store
        - re-renders the component if the selected state changes
    useDispatch
        - send action to the store to trigger reducer function
    configureStore
        - manage redux store

### Differences between Context API and Redux
    - Redux is more powerful and optimized for performance and scalability
    - Redux offers selective re-rendering that only components which use the specific part of state will re-render when that changes

### More about Redux
    Action and Reducer
        Action
            - is a plain object that contains type and payload
            - used with dispatch that sends action to reducer
        Reducer
            - is a pure function that contains logic to update state
            - must follow immutability
            - can't handle side effect and async behavior, which is why it needs Thunk action
        Dispatch
            - comes from Redux Thunk middleware which intercepts flow between action and reducer
    
    Async and side effect
        - Since redux store can't contain async or side-effect functions, we need to decide which of each needs to be distributed. Options are
            - inside components
            - action creators
            
    Redux Thunk middleware
        - allows you to write action creators that returns functions instead of plain action objects
        - intercepts dispatched action
            - if yo dispatch a plain object, it goes straight to the reducer
            - if  wyou dispatch a function, Redux Thunk calls that function and passes dispatch and getState as arguments to the function
    
      
# Chapter 22: React Router building SPA Introduction

So far, we have built only a single page React component. However, it is not ideal to display all components in the same path as the project gets bigger

npm install react-router-dom

### createBrowserRouter
    - craete the main structure of path directory
    - you specify the root path, Root component, error page, and children path and components
### Outlet
    - used in Root component which you can specify where its child components can be rendered
### RouterProvider
    - the main wrapper that provides routing logic and structu
### Link
    - lets you navigate within your single-page application using react-router. No server request is made when changing routes
    - renders <a> element
    - maintain component state
### useNavigate
    - hook that allows you to nativate in response to an event or inside logic
### useParams
    - hook that lets you read route parameters from the current URL
### NavLink
    - is a special version of Link that can automatically apply styles or classes when the link is active, meaning the current URL matches its "to" prop
### SPA upside
    - fewer page reloads
    - preserved state
### SPA downside comparede to MPA
    - can be slow for initial load
    - SEO unfriendly by default
    - social sharing can be tricky
    - sometimes full page load is desired (clearning state after logout), but SPAs must handle these manually
    
### Distinction between pages and components
    - pages
        - Components directly mapped to a route
    - components
        - Resuable building blocks used inside pages or other components

# Chapter 22: React router advanced

### useNavigation
    - gives you information about the current navigation state
    - state value can be idle, loading, or submitting, etc
### useRouterError
    - holds an error thrown from Router
### useLoaderData
    - React router can take loader function which promises to load data before page is rendered
    - useLoaderData loads that data and allows access to it through component
### useRouterLoaderData
    - requires Route ID to access specific data
    - allows you to access loader data from parent route
    - used when that loaded data is shared with other route
### Suspense
    - while loader fetches data, Suspense renders a waiting status component
### Await
    - Await waits for loader to fetch data, then, when it arrives it feeds to-be-displayed component the data
### useSubmit
    - follow Action Resolution Rule which follows up the hierarchy of actions through Route
    - Then, uses the action that is the closest.
### useActionData
    - hook that returns data from the most recently exected action function
    - especially designed for handling form submission results
    - can handle any type of action function, not only form submission
    - since any route can have only one action, there is no ambiguity of which action it is tied to

### useFetcher vs regular form
    - use regular form when
        - Action belongs to the current route
        - It's the primary action of the page
    - More on regular form
        - router intercepts the submission and calls the closest action based on path
        - data via useActionData(), and form state via useNavigation()
    - use Fetcher when
        - Action belongs to a different route - You specify which route in the fetcher form
        - You want background operations
        - You need multiple simulataneous actions
    - More on fetcher form
        - data via fetcher.data, and form state via fetcher.state
        - you still can redirect if you want though
    

# Chapter 23: Authentication

### useSearchParams
    - used to query optional parameters of url
    - useful when you are using the same page resource, but changes the content

### authentication approaches
    - server-side sessions (tight-coupled application)
    - authentication tokens (decoupled application)

# Chapter 24: Deployment

### The key take-away in Development Chapter
### Optimazation
    - without lazy loading, the user downloads the entire components

### Steps
- test code,
- optimize code
    - lazy loading
- build
    - npm run build
- upload app
    - firebase hosting
- configure

# Chapter 25: React query: tanstack 3rd library

### Tanstack is data-fetching library for handling server-side data in React apps that helps you
    - fetch data from APIs
    - cache it automatically
    - keep it fresh (refetching, background updates)
    - handling loading/error states
    - sync data across components

### Navigate
    - used for jsx rendering
### QueryClient
    - is a centralized cache store
    - maps query keys to cached data
    - tracks which components are using which queries
    - metadata about each query
### useQuery
    - creates an 'observer' for a specified query key
    - QueryClient maintains a list of observers for each query key
    - when the component querying specific data unmounts, that observer is also removed
    - automatically provides AbortSignal to query function to handle request
    - initially, fetches data when first loaded
### useMutation
    - hook that is designed to handle data mutations (craete, update, delete)
    - used to call function action, invalidate cache, and handle form state and error
### QueryClientProvider
    - wraps the component that you want to provide react query functionalities
    - This is very similar to how Context API is used, but has some more advantages
        - Cache storage
        - Background refetching
        - Cache invalidation
        - Optimistic Update
### useIsFetching
    - catches any state that is being loaded and show its state
    
npm install @tanstack/react-query


# Section 26: nextjs fullstack

npx create-next-app@latest [project-name]
npm install better-sqlite3
npm install slugify xss

### NextJS
    - React fullstack framework
    - provides router logic via file-based routing system
    - very aggressive caching
            
### Page router app
    - uses client components
    - pre-rendering + hydration (SSR & SSG)
        - pre-render HTML and hydrate (attaching JS event handlers) to make it interactive on client side
        - React originally build everything on client side
    - functions that handles backend operations reside in api folder
    - manually have to handle layout
    - getStaticProps and getStaticPaths (SSR)
        - enables to load data before pre-rendering HTML to display the full HTML content
        - can't use React hooks inside
    - getServerSideProps (SSG)
        - executed on every request and regenerate HTML with updated data
        - can't use React hooks inside
    - useRouter
        - allows you access to routing path

### App router app
    - uses server components
    - components can stay server-only and avoid hydration entirely
    - only hydrates the components that use "use client" directive
    - since all components initially rendered on server-side, it is allowed to use server-side function inside components
    - use "use server" directive for actions funtions which are used on client-side
    - provides layout
    - useFormState
        - same as useActionState
    - usePathname
        - gives you path query string
        
### Without NextJS, you can't use
    - react server component
    - server actions
    - use() with Promise
    
### Deployment
    - vercel
        - git commit
        - npm run build

# Section 27: RSC & Server Actions

### React Server Components (RSC) vs Client Components
    - RSC can directly include client-components in their JSX code, but client-components can only include server component as children since it is already completed on server side
    
# Section 28: animating-react-apps
- npm install framer-motion
- framer-motion 

# Chapter 29: Best patterns & practices

### Compound Component
    - multiple components that only work together
    - restrict components to be used only within its compound
    - restrict access to its Context API

### Render Props
    - allows to pass different types of data as props
    
### Debouncing
    - used for search feature that both delays or cancel HTTP requestsetSearchTerm

# Chapter 31: testing

npm test

### Unit test
    - individual building blocks (functions, components) in isolation
    - easily end up hundrends
### Integration test
    - test combination of building blocks
### end-to-end test
    - test complete scenarios/user-flows 

### how to test
    - success, error, and edge cases
    - Arrange, Act, and Assert
        - Set up data, conditions, and environment
        - Run logic that should be tested
        - Compare execution results with expected results
### Jest
    - tool for running test and asserting the results
### React Testing Library

    - simulating (rendering) app / components
    
# Chapter 32: typescript
npx create-react-app <project> --template typescript

npx tsc <filename>

Type-based javascript

