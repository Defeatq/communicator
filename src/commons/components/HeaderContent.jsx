import homePageIcon from '../assets/images/house.png';
import HeaderLink from './HeaderLink';
import { LINK_PATHS } from '../../pages/home/links-info';
import { LINKS_NAME } from '../pages-links-name';

function HeaderContent() {
  return (
    <div className="wrapper header__content">
      <nav className="header__navigation">
        <img className="header__icon" src={ homePageIcon } alt="home" />
        <HeaderLink path={ LINK_PATHS.COMMUNICATOR } text={ LINKS_NAME.COMMUNICATOR } />
        |
        <HeaderLink path={ LINK_PATHS.CARDS } text={ LINKS_NAME.CARDS } />
      </nav>
    </div>
  )
}

export default HeaderContent;
