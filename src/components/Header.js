import { MENU_LIST } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <div className="logo">Samarth Physiotherapy Rehab Center</div>
      <div className="menu-container">
        <ul>
          {MENU_LIST.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))}
          <li>
            <button>Book Appointment</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
