import homePageIcon from '../assets/images/house.png';
import HeaderLink from './HeaderLink';
import { PATHS } from '../pages-links-name';

function HeaderContent() {
  return (
    <div className="wrapper header__content">
      <nav className="header__navigation">
        <img className="header__icon" src={ homePageIcon } alt="home" />
        {
          PATHS.map((page, index) => 
            <HeaderLink key={ index } path={ page.PATH } text={ page.NAME } isLastLink={ PATHS.lenght - 1 === index } />
          )
        }
      </nav>
    </div>
  )
}

export default HeaderContent;
