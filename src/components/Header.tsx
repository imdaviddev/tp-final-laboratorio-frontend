import '../css/Header.css'
import ListaNav from './ListaNav';


export default function Header() {
  return (
    <header>
      <div className="nav-header">
        <img src="./Imagenes/LogoAmazona.png" alt="Amazona" className="Logo"/>
      </div>
      <ListaNav/>
    </header>
  );
}
