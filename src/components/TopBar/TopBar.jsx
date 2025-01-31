import css from './TopBar.module.css'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import { Outlet } from 'react-router-dom'

const TopBar = () => {
    return (
    <>
           <header className={css.header}>
                  <Logo/>
                  <Navigation/>
          </header>
             <main>
                <Outlet />
             </main>
     
        </>
  )
}
export default TopBar