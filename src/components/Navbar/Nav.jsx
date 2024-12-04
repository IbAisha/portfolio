import { NavLink } from 'react-router-dom'

export function Logo() {

  return (
  <>
    <nav>
      <img src="../src/assets/img/Logodw.png" width='190px' alt="logo Ibrahima Aicha" />
    </nav>
  </>
  )
  
}

export function Nav() {
 
    return (
      <>
          <nav>
            <ul>
              <li><NavLink to="/" className="selected">//Home</NavLink></li>
              <li><NavLink to="/aboutme">//About Me</NavLink></li>
              <li><NavLink to="/projets">//Projects</NavLink></li>
            </ul>
          </nav>
    </>
    )
}