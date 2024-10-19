import './App.css'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='h-screen bg-black'>

      <Navbar/>

      <div className="container mx-auto">
        <div  className="bg-red-500 ">
        <h1>Your ToDos </h1>
        
        </div>
      </div>
    </div>
  )
}

export default App
