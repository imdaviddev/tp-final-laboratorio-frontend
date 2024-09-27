import '../css/Header.css'

export default function Header() {
  return (
    <header>
      <div className="nav-header">
        <img src="1.png" alt="Amazona" className="Logo"/>
        <img src="3.png" alt="Login" className="icon-login"/>
      </div>
      <div className='welcome-header'>Bienvenidos a Amazona</div>
    </header>
  );
}
