import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [ToDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const savedToDos = JSON.parse(localStorage.getItem("toDos"));
    if (savedToDos) {
      setToDos(savedToDos);
    }
  }, []);

  const handleAdd = () => {

    const updatedToDos = [{ id: uuidv4(), toDo, isCompleted: false }, ...ToDos];
    setToDos(updatedToDos);
    setToDo("");
    localStorage.setItem("toDos", JSON.stringify(updatedToDos));
  };

  const handleEdit = (id) => {
    const newToDo = prompt("Edit your ToDo", ToDos.find(todo => todo.id === id).toDo);
    if (newToDo) {
      const updatedToDos = ToDos.map(todo =>
        todo.id === id ? { ...todo, toDo: newToDo } : todo
      );
      setToDos(updatedToDos);
      localStorage.setItem("toDos", JSON.stringify(updatedToDos));
    }
  };

  const handleDelete = (id) => {
    let confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      const filteredToDos = ToDos.filter(todo => todo.id !== id);
      setToDos(filteredToDos);
      localStorage.setItem("toDos", JSON.stringify(filteredToDos));
    }
  };

  const handleChange = (e) => {
    setToDo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    const updatedToDos = ToDos.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setToDos(updatedToDos);
    localStorage.setItem("toDos", JSON.stringify(updatedToDos));
  };

  const toggleFinished = () => {
    setShowFinished(prev => !prev);
  };

  return (
    <div className='h-screen bg-gradient-to-r from-violet-200 to-pink-200 overflow-auto'>
      <Navbar />
      <div className="container mx-auto my-5 p-5 rounded-lg backdrop-blur-lg bg-white bg-opacity-50 shadow-md border border-white border-opacity-30 h-[88vh] overflow-y-auto w-1/2">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a ToDo</h2>
          <div className='flex m-5'>
            <input onChange={handleChange} value={toDo} className='w-full p-2 rounded-md' type="text" autoFocus />
            <button onClick={handleAdd} className='bg-gradient-to-r from-violet-400 to-pink-400 font-bold m-4 p-1 px-2 text-white rounded-md mx-6 text-sm hover:bg-[#5d37a0]'>Save</button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input onChange={toggleFinished} type="checkbox" checked={showFinished} />
          <label className='m-3'>Show Finished ToDos</label>
        </div>
        <h2 className='text-lg font-bold my-4'>Your ToDos</h2>
        <div className="toDos flex flex-col">
          {ToDos.length === 0 && <div className='m-5'>No ToDos to Display</div>}
          {ToDos.map(item => (
            (showFinished || !item.isCompleted) && (
              <div className="toDo flex justify-between items-center w-full p-2 my-2" key={item.id}>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={`flex-1 ml-2 w-1 ${item.isCompleted ? "line-through" : ""} break-words`}>{item.toDo}</div>
                <div className="buttons flex h-full">
                  <button onClick={() => handleEdit(item.id)} className='bg-gradient-to-r from-pink-400 to-pink-400 font-bold p-1 px-2 text-white rounded-md mx-1 text-sm hover:bg-[#5d37a0]'>Edit</button>
                  <button onClick={() => handleDelete(item.id)} className='bg-gradient-to-r from-violet-400 to-violet-400 font-bold p-1 px-2 text-white rounded-md mx-1 text-sm hover:bg-[#5d37a0]'>Delete</button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
