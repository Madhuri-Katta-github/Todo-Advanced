import DeleteBtn from "./DeleteBtn";
import { useTodoContext } from "../library/hooks";


export default function TodoList() {
    const {handleToggle,handleDeleteTodo,todos}=useTodoContext();

    return (
        <>
            <ul>
                {todos.length === 0 ? 
                   <li className="h-full flex justify-center items-center font-semibold ml-40 text-gray-500 ">Start by adding a todo</li>
                    : null}
                {todos.map((todo) => (
                    <li key={todo.id} className="flex flex-col justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer ">
                        <div className="flex flex-row justify-between items-center py-2 border-b border-black/[8%]">

                            {todo.isDone ? <s>{todo.text}</s> : <span>{todo.text}</span>}

                            <div className="absolute left-1/2">
                                <button className="ml-4" onClick={() => handleToggle(todo.id)}>✅</button>
                                <DeleteBtn id={todo.id} onDeleteTodo={handleDeleteTodo}/>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
