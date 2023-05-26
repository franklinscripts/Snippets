import './App.css'
import Customizable from './components/Customizable'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {


  return (
   <div className='w-full'>
    <div className="sm:h-[100%] h-[100vh] bg-no-repeat ">
     <Navbar />
     
    <Customizable />
    <Footer />
    </div>
   </div>
  )
}

export default App
