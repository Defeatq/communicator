import Card from '../../../commons/components/Card';

function FoundCardList(props) {
  const { cardList } = props;

  return (
    <section className="cards">
      <div className="wrapper cards__list">
        { 
          cardList.map((cardItem, index) => {
            return <Card key={ index } 
                         name={ cardItem?.name } 
                         image={ cardItem?.image }
                         id={ cardItem?.id } />
          })
        }
      </div>
    </section>
  );
}

export default FoundCardList;
