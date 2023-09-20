import './Layout.css';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
    <header className="header">
      <h1>HI</h1>
      <p>header</p>
    </header>
    <Outlet/>
    <footer>
      <p>footer</p>
    </footer>
    </>

  );
}

export default Layout;
