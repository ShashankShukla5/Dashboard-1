import {NavBar, NavBarV, Content} from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBarV/>
      <NavBar/>
      <Outlet/>
    </div>
    
  )
}

export default App
