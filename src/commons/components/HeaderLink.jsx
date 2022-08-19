import { NavLink } from "react-router-dom";

function HeaderLink(props) {
  const { text, path, isLastLink } = props;

  return (
    <>
    <NavLink to={ path } className={ ({ isActive }) => 
      isActive ? 'header__link-active' : 'header__link' 
    }>
      { text }
    </NavLink>
    {
      isLastLink ? 
      <></> :
      <span style={{ margin: '0 10px', color: '#2B78E4', textDecoration: 'none', }}>
        |
      </span>
    }
    </>
  )
}

export default HeaderLink;
