import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/search" className={({isActive}) => isActive ? classes.active : ''}>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" className={({isActive}) => isActive ? classes.active : ''} >
              History
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
