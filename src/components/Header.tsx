import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface Props {
  title: string;
  menuItems: string[];
}

const Header: FC<Props> = ({ title, menuItems }) => {
  const menuLinks = menuItems.map((item, index) => (
   
    item === 'Home' ?
    <Link key={index} to="/" className="menu-item">
        {item}
    </Link>
    :
    
    <Link key={index} to={`/${item.toLowerCase()}`} className="menu-item">
      {item}
    </Link>
  ));

  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="header-menu">
        <nav>
          {menuLinks}
        </nav>
      </div>
    </header>
  );
};

export default Header;