import PropTypes from "prop-types";
function Header({coin}) {
  const navLists = ["Home", "Fixture", "Teams", "Schedules"];
  return (
    <header>
      <div className="navbar py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLists.map((list, id) => (
                <li key={id}>
                  <a href="#">{list}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text- md:block hidden">
            <img src="/src/assets/images/logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLists.map((list, id) => (
              <li key={id}>
                <a href="#">{list}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline font-bold"><span>{coin}</span>Coin<img src="/src/assets/images/dollar.png" alt="" /></button>

        </div>
      </div>
    </header>
  );
}

Header.propTypes={
  coin:PropTypes.number.isRequired
}

export default Header;
