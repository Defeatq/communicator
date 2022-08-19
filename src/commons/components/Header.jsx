import '../assets/styles/header.css';
import HeaderContent from './HeaderContent';

function Header(props) {
  const { content } = props;

  return (
    <header className='header'>
      { content || <HeaderContent /> }
    </header>
  )
}

export default Header;
