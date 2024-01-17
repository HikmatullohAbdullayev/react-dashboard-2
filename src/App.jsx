import MainLayout from './layout/main-layout/mainLayout'
import './App.css'
import SidebarNav from "./components/aside/sitebar-nav"

function App() {

  return (
    <>
      <div className="flex">
      <SidebarNav/>
      <MainLayout/>
      </div>


    </>
  )
}

export default App
