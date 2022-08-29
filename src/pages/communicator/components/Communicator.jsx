import { FaPlay, FaTrash, FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { playSound } from '../../../commons/audio';
import Card from '../../../commons/components/Card';
import { COMMUNICATOR_ACTION_GENERATORS } from '../../../store/actions';

function Communicator() {
  const communicatorQueue = useSelector(store => store.communicator);

  const dispatch = useDispatch();

  function playPhrase() {
    const phrase = communicatorQueue.map(card => card.name).join(' ');
console.log(phrase);
    playSound( phrase );
  }

  return (
    <section className="communicator">
      <div className="wrapper">
        <div className="communicator__actions">
          <div className="communicator__cards">
            {
              communicatorQueue?.map((card, index) =>
              <Card key={ index }
                name={ card.name }
                id={ card.id }
                image={ card.image }
                isAddable={ true } />
              )
            }
          </div>
          <div className="communicator__control">
            <button className="communicator__play-button" onClick={ playPhrase }>
              <FaPlay />
            </button>
            <div className="communicator__delete">
              <button className="communicator__remove-button" onClick={ () => dispatch( COMMUNICATOR_ACTION_GENERATORS.removeCommunicatorWord() ) }>
                <FaArrowLeft />
              </button>
              <button className="communicator__clear-button" onClick={ () => dispatch( COMMUNICATOR_ACTION_GENERATORS.clearCommunicatorQueue() ) }>
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Communicator;
