import { Link } from "react-router-dom";

function HeaderLink(props) {
  const { text, path } = props;

  return (
    <Link to={ path } className="header__link">
      { text }
    </Link>
  )
}

export default HeaderLink;
