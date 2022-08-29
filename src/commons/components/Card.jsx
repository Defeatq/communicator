import { useEffect, useState } from 'react';
import { FaCross } from 'react-icons/fa';
import store from '../../store/store';
import { addToFavourites, removeFromFavourites } from '../../store/actions';
import '../assets/styles/card.css';
import { playSound } from '../audio';
import LOCAL_STORAGE from '../../store/localStorage';

function Card(props) {
  const { id, name, image, isAddable, onClick } = props;
  const [checked, setChecked] = useState( false );

  function handleFavourite() {
    if ( !checked ) {
      store.dispatch( addToFavourites({
        id,
        name,
        image,
      }) )
    } else {
      store.dispatch( removeFromFavourites({
        id,
        name,
        image,
      }) )
    };

    setChecked( !checked );
  }

  useEffect(() => {
    const newState = store.getState()?.favourites || LOCAL_STORAGE.getFavouriteCards() || [];

    LOCAL_STORAGE.saveFavouriteCards( newState );
  }, [checked]);

  useEffect(() => {
    const isInStorage = LOCAL_STORAGE.getFavouriteCards().some( card => card.id === id );

    setChecked( isInStorage );
  }, [id]);

  return (
    <div className="card" onClick={ onClick }>
      <div className="card__interaction">
        <button className="card__sound" onClick={ () => playSound( name ) } />
        <img className="card__image" src={ image } alt={ name } />
        {
          isAddable ?
          <></> :
          <input className="card__favourite" type="checkbox" checked={ checked } onChange={ handleFavourite } />
        }
      </div>
      <h4 className="card__name">
        { name }
      </h4>
    </div>
  );
}

export default Card;
