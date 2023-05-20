import "./style.css";
import { NavLink, Outlet } from "react-router-dom";
function HeaderHandel() {
  return (
    <header>
      <nav class="nav"></nav>
      <Outlet />
    </header>
  );
}
export default HeaderHandel;
