/** 
* @author: Alexander Chi
* @description:
* @date: 01/Septiembre/2021
**/ 
import './App.scss';
import {Card} from './components/cards';
import {cards} from './utils/information'

function App() {
  return (
    <div className="container">
       <div className="content">
          {cards.map((card, index) => {
            return(
              <Card 
                key={`card-${index}`}
                color={card.color}
                icon={card.icon}
                title={card.title} 
                description={card.description} 
                butons={card.butons} />
            )
          })}
       </div>
    </div>
  );
}

export default App;
