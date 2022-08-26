import { FaPlay, FaTrash, FaArrowLeft } from 'react-icons/fa';

function Communicator() {
  return (
    <section className="communicator">
      <div className="wrapper">
        <div className="communicator__actions">
          <div className="communicator__cards">

          </div>
          <div className="communicator__control">
            <button className="communicator__play-button">
              <FaPlay />
            </button>
            <div className="communicator__delete">
              <button className="communicator__remove-button">
                <FaArrowLeft />
              </button>
              <button className="communicator__clear-button">
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
