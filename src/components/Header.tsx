import Counter from "./Counter";

export default function Header() {
        return (
        <header className="flex justify-between items-center px-[38px] py-3 col-[1/3] row-[1/2] bg-[#eee5d9] border-black/[0.08]">
            Madhuri's-todo
            <Counter/>
        </header>
    )
}
