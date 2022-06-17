import HomeNavigationLink from './HomeNavigationLink';
import { LINK_NAMES, LINK_PATHS } from '../links-info';
import communicatorImage from '../assets/images/communicator.png';
import pictogramsImage from '../assets/images/pictograms.png';

function HomeNavigationList() {
  return (
    <nav className="home__navigation">
      <div className="home__navigation__wrapper">
        <HomeNavigationLink image={ communicatorImage } text={ LINK_NAMES.COMMUNICATOR } path={ LINK_PATHS.COMMUNICATOR } />
        <HomeNavigationLink image={ pictogramsImage } text={ LINK_NAMES.CARDS } path={ LINK_PATHS.CARDS } />
      </div>
    </nav>
  )
}

export default HomeNavigationList;
