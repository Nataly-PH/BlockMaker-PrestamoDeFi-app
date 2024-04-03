import { Link } from 'react-router-dom';

export default function CustomNavbar() {
  return (
    <nav className=" ">
      <ul className="flex">
        <li className="px-6">
          <Link to="/">Inicio y Autenticación</Link>
        </li>
        <li className="px-6">
          <Link to="/usuarios">Gestión de Usuarios</Link>
        </li>
        <li className="px-6">
          <Link to="/prestamos">Operaciones de Préstamos</Link>
        </li>     
      </ul>
    </nav>
  );
}

