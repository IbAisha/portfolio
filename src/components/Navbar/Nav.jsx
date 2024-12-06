import { NavLink } from 'react-router-dom'


export function Logo() {

  return (
  <>
    <nav className='Logo'>
      <img src="../src/assets/img/Logodw.png" width='120px' alt="logo Ibrahima Aicha" />
    </nav>
  </>
  )
  
}

export function Nav() {
 
    return (
      <>
          <nav>
            <ul className='navlink'>
              <li><NavLink to="/">//Home</NavLink></li>
              <li><NavLink to="/aboutme">//About Me</NavLink></li>
              <li><NavLink to="/projets">//Projects</NavLink></li>
            </ul>
          </nav>
    </>
    )

}