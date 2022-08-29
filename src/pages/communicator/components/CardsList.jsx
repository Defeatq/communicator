import Card from "../../../commons/components/Card";
import LOCAL_STORAGE from "../../../store/localStorage";

function CardsList() {
  const cards = LOCAL_STORAGE.getFavouriteCards();

  return (
    <section className="cards">
      <div className="wrapper cards__list">
        {
          cards?.map((card, index) =>
            <Card key={ index }
                  name={ card.name }
                  id={ card.id }
                  image={ card.image }
                  isAddable={ true } />
          )
        }
      </div>
    </section>
  )
}

export default CardsList;
