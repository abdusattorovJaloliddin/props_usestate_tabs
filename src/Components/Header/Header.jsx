import './Header.css';
import Person from './images/image.png';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          <a href="#" className="header-logo">
            <img src={Person} alt="" className="header-img" />
          </a>
          <ul className="header-list">
            <li className="header-item"><a href="#" className="header-link">Bosh sahifa</a></li>
            <li className="header-item"><a href="#" className="header-link">Xizmatlar</a></li>
            <li className="header-item"><a href="#" className="header-link">Aloqa</a></li>
            <li className="header-item"><a href="#" className="header-link">Blog</a></li>
            <li className="header-item"><a href="#" className="header-link">Kontaktlar</a></li>
          </ul>
          <div className="header-btns">
            <button className="header-btn">Login</button>
            <select className="header-select">
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;