import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
    const {login,register}=useKindeAuth();

    return (
        <section className="flex flex-col col-[2/3] row-[2/3] bg-[#f0edea] border-l border-black/[0.08] w-[264px] h-[376px]">
            <AddTodoForm/>
            <div className="mt-auto space-y-2">
                <Button onClick={login} buttonType="secondary">Login in</Button>
                <Button onClick={register} buttonType="secondary">Register</Button>
            </div>

        </section>
    )
}
