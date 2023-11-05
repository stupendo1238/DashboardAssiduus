import './App.css'
import Sidebar from "./components/Sidebar"
import RightSide from "./components/RightSide"
export default function App() {
  return (
    <div style={{display:"flex"}} className="home">
      <Sidebar/>
      <RightSide/>
    </div>
  )
}
