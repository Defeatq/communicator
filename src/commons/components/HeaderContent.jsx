import homePageIcon from '../assets/images/house.png';
import HeaderLink from './HeaderLink';
import { PATHS } from '../pages-links-name';
import { Link } from 'react-router-dom';

function HeaderContent() {
  return (
    <div className="wrapper header__content">
      <nav className="header__navigation">
        <Link to="/">
          <img className="header__icon" src={ homePageIcon } alt="home" />
        </Link>
        {
          PATHS.map((page, index) => 
            <HeaderLink key={ index } path={ page.path } text={ page.name } isLastLink={ PATHS.length - 1 === index } />
          )
        }
      </nav>
    </div>
  )
}

export default HeaderContent;
