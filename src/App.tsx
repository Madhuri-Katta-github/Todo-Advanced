import BackgroundHead from "./components/BackgroundHead";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";


// const initialTodos = [
//   {
//       id: 1,
//       text: "JavaScript",
//       isDone: true,
//   },
//   {
//       id: 2,
//       text: "TypeScript",
//       isDone: true,

//   },
//   {
//       id: 3,
//       text: "Reactjs",
//       isDone: false,

//   },
// ]

export default function App() {
 
  return (
    <div className=" flex justify-center items-center flex-col font-sans bg-[#f1d4b3]    min-h-screen">
      <BackgroundHead />

      <main className="relative w-[972px] h-[436px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden ">
        <Header/>
        <div className="flex justify-between">
          <TodoList />
          <Sidebar  />
        </div>
      </main>
      <Footer />
    </div>
  );
}