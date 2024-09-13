type props = {
  id: number;
  onDeleteTodo:(id:number)=>void
}
export default function DeleteBtn({ id,onDeleteTodo }: props) {
  return (
    <button onClick={(e) => {
      e.stopPropagation();
      onDeleteTodo(id)
    }}>❌</button>
  )
}
