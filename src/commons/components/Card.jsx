import { useEffect, useState } from 'react';
import store from '../../store/store';
import { addToFavourites, COMMUNICATOR_ACTION_GENERATORS, removeFromFavourites } from '../../store/actions';
import '../assets/styles/card.css';
import { playSound } from '../audio';
import LOCAL_STORAGE from '../../store/localStorage';
import { useDispatch } from 'react-redux';

function Card(props) {
  const { id, name, image, isAddable, onClick } = props;
  const [checked, setChecked] = useState( false );
  const dispatch = useDispatch();

  function handleFavourite() {
    if ( !checked ) {
      dispatch( addToFavourites({
        id,
        name,
        image,
      }) )
    } else {
      dispatch( removeFromFavourites({
        id,
        name,
        image,
      }) )
    };

    setChecked( !checked );
  }

  function addCommunicatorWord() {
    dispatch( COMMUNICATOR_ACTION_GENERATORS.addCommunicatorWord({
      id,
      name,
      image,
    }) )
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
    <div className="card">
      <div className="card__interaction">
        <button className="card__sound" onClick={ () => playSound( name ) } />
        <img className="card__image" src={ image } alt={ name } />
        {
          isAddable ?
          <span className="card__add" onClick={ addCommunicatorWord }></span> :
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
