import { Link } from 'react-router-dom';

function HomeNavigationLink(props) {
  const { image, text, path } = props;

  return (
    <Link to={ path } className="link">
      <img className="link__image" src={ image } alt={ text } />
      <h2 className="link__text">
        { text }
      </h2>
    </Link>
  )
}

export default HomeNavigationLink;
