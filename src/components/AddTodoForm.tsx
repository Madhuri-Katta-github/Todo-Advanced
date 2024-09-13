import { useState } from "react";
import Button from "./Button";
import { useTodoContext } from "../library/hooks";

export default function AddTodoForm() {
    const [todoText, setTodoText] = useState("");
    const {handleAddTodo}=useTodoContext();
    return (
        <form className="flex flex-col" onSubmit={(e) => {
            e.preventDefault();

            handleAddTodo(todoText);
            setTodoText("");
        }}>
            <h2 className=" text-[#231d15] font-bold">Add a todo</h2>
            <div className="flex items-center flex-col">
                <input type="text" className="h-[45px] border rounded-[5px] my-[9px] text-[14px] p-2 w-[260px] outline-none bg-white text-slate-950"
                    value={todoText}
                    onChange={(e) => {
                        setTodoText(e.target.value);
                    }}
                />
                <Button buttonType="">Add to list</Button>
            </div>
        </form>
    )
}
