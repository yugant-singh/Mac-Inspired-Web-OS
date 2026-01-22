import DateTime from './DateTime'
import './navbar.scss'

const Navbar = () => {
  return (
 <nav className='nav'>
<div className="left">
    <div className="apple-logo">
        <img src="./navbar-icons/apple.svg" alt="" />
    </div>
    <div className="nav-items">
        <p>Yugant Singh</p>
    </div>
     <div className="nav-items">
        <p>File</p>
    </div>
    <div className="nav-items">
        <p>Window</p>
    </div>
     <div className="nav-items">
        <p>Terminal</p>
    </div>
</div>
<div className="right">
    <div className="wifi">
       <i className="ri-wifi-line"></i>
    </div>

    <div className="nav-items">
      <DateTime/>
    </div>
</div>
 </nav>
  )
}

export default Navbar