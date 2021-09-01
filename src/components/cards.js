/** 
* @author: Alexander Chi
* @description: 
* @date: 01/Septiembre/2021
**/  

export function Card(props) {
    const { color, icon, title, description, butons } = props
  return ( 
    <div className={`card card__${color}`}>
        <span className="card__icon">
            <img alt={title} width="45" heigth="45" src={icon} ></img>
        </span>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <div className="card__footer">
            {butons.map((button, index) => {
                return <Button key={`btn-${index}`} text={button.text} color={color}/>
            })}
        </div>
    </div>
  );
}

export function Button(props) {
    const { text, color, onClick} = props;
    return (
        <button 
            onClick={onClick}
            className={`btn btn__${color}`}>
            {text}
        </button>
    );
}

export default Card;
