import {Nav} from './Navbar/Nav'

export function Menu() {

    return (
    
        <div className="menu"><a href='#'>
            <div className="burger-menu"></div>
            <div className="burger-menu"></div>
            <div className="burger-menu"></div>
            </a>
        </div>
        

    )
    
}

export function OpenMenu() {
    const open = document.getElementsByClassName('menu');

    return (
        

        <div id="sideMenu" className="sidenav">
            <Nav/>

            <span on onClick={'open'}></span>
        </div>

        
    )
}

