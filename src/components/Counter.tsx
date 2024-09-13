import { useTodoContext } from "../library/hooks";

export default function Counter() {
    const {countCompletedTodos,todos}=useTodoContext();
    return (
        <p>
            <b>{countCompletedTodos}</b>
            /{todos.length} todos completed
        </p>
    )
}
