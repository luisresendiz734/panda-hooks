# useKeyPress
This hook makes it easy to detect when the user is pressing a specific key on their keyboard.

## Usage

```jsx
import { useKeyPress } from "panda-hooks";

const App = () => {
    const isPandaPressed = useKeyPressed("p");

    return (
        <div>
            {isPandaPressed && "🐼"}
        </div>
    )
}
```

## API

```jsx
const state = useKeyPressed(letter);
```

- **`state`**: *boolean*
- **`letter`**: *string*