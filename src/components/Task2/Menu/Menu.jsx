import { useState } from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { RxHamburgerMenu, RxCross1} from 'react-icons/rx';


import styles from './Menu.module.css';

const BurgerMenu = () => {
 const [menuOpen, setMenuOpen] = useState(false);
    
    const categoryList = [
        'News',
        'Entertainment', 'Lifestyle', 'Sports', 'Business', 'Weather',
    'World',
    'Regions',
    'Opinion',
  ];

 const handleStateChange = state => {
  setMenuOpen(state.isOpen);
 };

 const closeMenu = () => {
  setMenuOpen(false);
 };
    
    const BurgerMenuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '26px',
    height: '18px',
    right: '33px',
    top: '23px'
  },
  bmCrossButton: {
    height: '26px',
    width: '18px',
    top: '-48px',
    right: '32px',
    color: '#FFF',
  },
  bmMenuWrap: {
    height: '100vh',
    width: '100%',
    top: '80px',
  },
  bmMenu: {
    background: '#C41E25',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '225px',
    marginTop: '0px',
    position: 'absolute',
    top: '-80px',
    width: '100%'
  },
  bmOverlay: {
    display: 'none'
  }
};


 return (
     <div className={styles.burgermenucontainer}>
   <Menu
    customBurgerIcon={<RxHamburgerMenu />}
    customCrossIcon={<RxCross1 />}
    right
    isOpen={menuOpen}
    onStateChange={state => handleStateChange(state)}
    styles={BurgerMenuStyles}
   >
             <ul className={styles.menulist}>
                 {categoryList.map((item, index) => (
                     <li key={index} className={styles.menuitem}>
                         <a href="/" className={styles.menulink} >
                             {item}
                         </a>
                     </li>  ))}
    </ul>
   </Menu>
  </div>
 );
};

export default BurgerMenu;