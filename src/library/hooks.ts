import { useContext } from "react";
import { TodosContext } from "../Contexts/TodosContextProvider";

export function useTodoContext(){
    const context=useContext(TodosContext);

    if(!context){
        throw new Error("Forgot to add provider")
    }
    return context;
}