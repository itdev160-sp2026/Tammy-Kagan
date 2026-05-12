
# Activity 11 Reflection: React Tic-Tac-Toe

## Main Things I Learned

### 1. React Components

One of the biggest things I learned was how React uses components to organize code. Instead of putting everything into one large JavaScript file, the app is split into smaller pieces like the `Square`, `Board`, and `Game` components. This made the project easier to read and understand.

### 2. Using State with useState

The `useState` hook helped simplify tracking the game data. In my vanilla JavaScript version, I had to manually update the page whenever something changed. React automatically updates the screen when the state changes, which makes the code cleaner and easier to manage.

### 3. Props and Data Flow

I learned that props allow information to move from parent components to child components. For example, the `Game` component passes information down to the `Board`, and the `Board` passes values to each `Square`. This keeps the data organized and predictable.

### 4. Immutability

At first I did not fully understand why arrays needed to be copied instead of edited directly. After working through the project, I realized React depends on detecting changes in state, and creating a new array with `.slice()` helps React know when it should re-render the interface.

---

# Comparing React to Vanilla JavaScript

| Feature | Vanilla JavaScript | React |
|---|---|---|
| Updating the UI | Manual DOM updates | Automatic rendering |
| Organization | Mostly functions and event listeners | Separate reusable components |
| Managing State | Tracked manually | Managed with `useState` |
| Reusability | Harder to reuse code | Components can easily be reused |
| Adding Features | More complicated | Easier because state is centralized |
| Data Flow | Can get messy | One-way and organized |

One major difference I noticed was how much easier React makes advanced features like move history. In vanilla JavaScript, tracking previous game states would have required a lot more code and DOM manipulation.

---

# Challenges I Had

### Understanding “Lifting State Up”

This was probably the hardest concept for me at first. I did not understand why the state belonged in the `Game` component instead of the `Board`. After practicing with the code, I understood that putting the state in a common parent component allows multiple components to share the same information.

### JSX Syntax

JSX looked strange in the beginning because it mixes JavaScript and HTML together. I also had to remember to use `className` instead of `class`.

### Array Copying

Using `.slice()` instead of directly changing arrays felt unnecessary at first, but now I understand it is important for React state updates.

---

# What Worked Well

- The component structure made the code easier to follow.
- React handled updating the page automatically.
- The move history feature was much easier than it would have been in plain JavaScript.
- Breaking the project into smaller components helped keep everything organized.

---

# What I Want to Learn Next

Some React topics I want to continue learning are:

1. `useEffect` and how it works
2. React Router for multiple pages
3. Custom hooks
4. Better project structure for larger apps
5. More advanced state management tools like Redux

---

# Conclusion

This project helped me understand why React is popular for building interactive web applications. Compared to vanilla JavaScript, React keeps the code more organized and makes updating the UI much simpler. Even though some concepts were difficult at first, the overall structure made it easier to build features like move history and state tracking.