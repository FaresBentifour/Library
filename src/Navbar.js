import "./Navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
   
        <div className="header">
           <h3>WELCOME</h3>
           <h3 className="admin">Admin</h3>
       </div>
        <div className="links">
          <a className="but" href="/">Book <br /> List</a>
          <a className="but"  href="/book">USER <br /> List</a>
          <a className="but" href="/">ADD <br /> Book</a>
          <a  href="/" className="logout">LogOut</a>
        </div>
        
      </nav>
    );
  };
  
  export default Navbar;
  