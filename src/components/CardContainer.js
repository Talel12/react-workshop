import Card from "./Card"
import "./card.css"

const CardContainer = () => {
  return (
    <div className="card-container">
        <Card nom="Talel" age={22}/>
        <Card nom="khaled" age={26}/>
        <Card nom="salim"/>
        <Card nom="salim" age={77}/>

    </div>
  )
}

export default CardContainer