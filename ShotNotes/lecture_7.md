# React Component Lifecycle (Class Components)

The React Component Lifecycle defines the different stages a class component goes through from the moment it is created until it is removed from the DOM.

There are **three lifecycle phases**:

1. Mounting
2. Updating
3. Unmounting

---

# 1. Mounting Phase

The mounting phase occurs when a component is created and inserted into the DOM for the first time.

## Execution Order

```
constructor()
      ↓
render()
      ↓
React updates the DOM
      ↓
componentDidMount()
```

---

## constructor()

### Purpose

The constructor is called when the component is instantiated.

### Responsibilities

- Initialize the component state
- Bind event handlers
- Perform one-time setup

### Syntax

```jsx
constructor(props) {
    super(props);

    this.state = {
        count: 0,
    };
}
```

### Important Notes

- Runs only once during the component's lifetime.
- Always call `super(props)` before using `this`.
- Do **not** make API calls here.
- Avoid calling `setState()` inside the constructor.

---

## render()

### Purpose

The `render()` method returns the JSX that React converts into HTML.

### Example

```jsx
render() {
    return (
        <div>
            <h1>Hello React</h1>
        </div>
    );
}
```

### Characteristics

- Pure function
- No side effects
- Can execute multiple times
- Returns JSX

---

## React Updates the DOM

After `render()` returns JSX:

1. React creates the Virtual DOM.
2. Compares it with the previous Virtual DOM.
3. Updates only the changed parts of the Real DOM.
4. The UI becomes visible.

---

## componentDidMount()

This method executes immediately after the component has been mounted to the DOM.

### Common Uses

- Fetch API data
- Start timers
- Add event listeners
- Open WebSocket connections
- Initialize third-party libraries

### Example

```jsx
componentDidMount() {
    fetch("/api/users")
        .then(response => response.json())
        .then(data => {
            this.setState({
                users: data,
            });
        });
}
```

### Important Notes

- Runs only once.
- Best place for API calls.

---

# What Happens After an API Call?

Suppose:

```jsx
componentDidMount() {
    fetch("/users")
        .then(res => res.json())
        .then(data => {
            this.setState({
                users: data,
            });
        });
}
```

When `setState()` is executed:

```
setState()

↓

React schedules an update

↓

render()

↓

DOM updates

↓

componentDidUpdate()
```

This begins the **Updating Phase**.

---

# 2. Updating Phase

The updating phase occurs whenever the component needs to re-render.

This happens when:

- State changes
- Props change
- `forceUpdate()` is called

---

## Update Lifecycle Order

```
State Change / Props Change

↓

render()

↓

React compares Virtual DOM

↓

DOM updates

↓

componentDidUpdate()
```

---

## render()

Runs again using the latest props and state.

Example:

Before API response:

```
Loading...
```

After API response:

```
Krishna
```

React updates only the changed elements instead of rebuilding the entire page.

---

## componentDidUpdate()

Called immediately after the DOM has been updated.

### Syntax

```jsx
componentDidUpdate(prevProps, prevState) {

}
```

### Common Uses

- Compare previous and current state
- Compare previous and current props
- Trigger another API call if required
- Synchronize data with external systems

### Example

```jsx
componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
        console.log("Users Updated");
    }
}
```

---

## Infinite Loop Warning

Never write:

```jsx
componentDidUpdate() {
    this.setState({
        count: 1,
    });
}
```

This causes:

```
setState()

↓

render()

↓

componentDidUpdate()

↓

setState()

↓

render()

↓

Infinite Loop
```

Correct approach:

```jsx
componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        // Safe logic
    }
}
```

---

# 3. Unmounting Phase

This phase occurs when the component is removed from the DOM.

Execution Order:

```
componentWillUnmount()
```

---

## componentWillUnmount()

Called immediately before the component is destroyed.

### Purpose

Clean up everything created inside `componentDidMount()`.

### Common Uses

- Remove event listeners
- Clear intervals
- Clear timeouts
- Abort fetch requests
- Disconnect WebSockets
- Remove subscriptions

### Example

```jsx
componentWillUnmount() {
    clearInterval(this.timer);
}
```

---

# Complete Lifecycle Flow

```
Component Created

↓

constructor()

↓

render()

↓

React creates Virtual DOM

↓

Real DOM updated

↓

componentDidMount()

↓

API Call

↓

Data Received

↓

setState()

↓

-----------------------
Updating Phase
-----------------------

render()

↓

Virtual DOM Comparison

↓

Real DOM Updated

↓

componentDidUpdate()

↓

User leaves page

↓

-----------------------
Unmounting Phase
-----------------------

componentWillUnmount()

↓

Component Removed
```

---

# Visual Lifecycle Diagram

```
                 Mounting
                     │
                     ▼
            constructor()
                     │
                     ▼
                render()
                     │
                     ▼
          React updates DOM
                     │
                     ▼
         componentDidMount()
                     │
                     ▼
             API Call / Timer
                     │
                     ▼
                setState()
                     │
                     ▼
               Updating Phase
                     │
                     ▼
                render()
                     │
                     ▼
          React updates DOM
                     │
                     ▼
        componentDidUpdate()
                     │
                     ▼
             Component Removed
                     │
                     ▼
        componentWillUnmount()
```

---

# Example

```jsx
import React from "react";

class User extends React.Component {

    constructor(props) {
        super(props);

        console.log("Constructor");

        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        console.log("Component Did Mount");

        fetch("https://api.github.com/users/octocat")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    user: data,
                });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {

        console.log("Render");

        return (
            <div>
                <h1>
                    {
                        this.state.user
                        ? this.state.user.login
                        : "Loading..."
                    }
                </h1>
            </div>
        );
    }
}

export default User;
```

---

# Console Output

### Initial Render

```
Constructor

↓

Render

↓

Component Did Mount
```

After API completes:

```
Render

↓

Component Did Update
```

When component is removed:

```
Component Will Unmount
```

---

# Lifecycle Methods Summary

| Lifecycle Method | Phase | Called | Primary Use |
|------------------|--------|--------|-------------|
| constructor() | Mounting | Once | Initialize state |
| render() | Mounting & Updating | Multiple Times | Return JSX |
| componentDidMount() | Mounting | Once | API calls, timers, subscriptions |
| componentDidUpdate() | Updating | After Every Update | Compare previous props/state |
| componentWillUnmount() | Unmounting | Once | Cleanup resources |

---

# Lifecycle Flow in One Line

```
constructor()

↓

render()

↓

componentDidMount()

↓

setState()

↓

render()

↓

componentDidUpdate()

↓

componentWillUnmount()
```

---

# Interview Points

### constructor()

- Runs only once.
- Used to initialize state.
- Never perform API calls here.

---

### render()

- Must be a pure function.
- Returns JSX.
- Executes multiple times.

---

### componentDidMount()

- Executes once.
- Best place for API calls.
- Best place for subscriptions.

---

### setState()

- Does not immediately update state.
- Schedules a re-render.
- Triggers the Updating Phase.

---

### componentDidUpdate()

- Executes after every update.
- Compare previous state before calling `setState()`.
- Avoid infinite loops.

---

### componentWillUnmount()

- Cleanup method.
- Prevents memory leaks.
- Remove listeners and timers.

---

# Memory Trick

```
Mounting

constructor()
↓

render()
↓

componentDidMount()

------------------------

Updating

setState()
↓

render()
↓

componentDidUpdate()

------------------------

Unmounting

componentWillUnmount()
```

---

# Quick Revision

```
Mounting
---------
constructor()
render()
componentDidMount()

Updating
---------
State / Props Change
render()
componentDidUpdate()

Unmounting
----------
componentWillUnmount()
```