import { useState } from 'react';

import styles from './Header.module.css';

import logo from '../../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu-icon.svg';
import BurgerMenu from '../Menu/Menu';

const Header = () => {
  const [menuOptions, setMenuOptions] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('More');

  const categoryList = ['World', 'Regions', 'Opinion'];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="ABS-CBN News Logo" />
          </div>
          <nav className={styles.navmenu}>
            <ul>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Entertainment</a>
              </li>
              <li>
                <a href="/">Lifestyle</a>
              </li>
              <li>
                <a href="/">Sports</a>
              </li>
              <li>
                <a href="/">Business</a>
              </li>
              <li>
                <a href="/">Weather</a>
              </li>
              <li className={styles.menuoptions}>
                <a
                  href="/"
                  onClick={e => {
                    e.preventDefault();
                    setMenuOptions(!menuOptions);
                  }}
                >
                  {selectedCategory}{' '}
                  <MenuIcon className={styles.menuoptionsicon} />
                </a>
                {menuOptions && (
                  <ul
                    className={`${styles.dropdownMenu} ${
                      menuOptions ? styles.show : ''
                    }`}
                  >
                    {categoryList.map((item, index) => (
                      <li
                        key={index}
                        onClick={e => {
                          e.preventDefault();
                          setSelectedCategory(item);
                          setMenuOptions(false);
                        }}
                      >
                        <a
                          href="/"
                          className={`${menuOptions ? styles.show : ''}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
          <div className={styles.search}>
            <SearchIcon className={styles.searchicon} />
            <input type="text" placeholder="Search" />
          </div>
          <BurgerMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
