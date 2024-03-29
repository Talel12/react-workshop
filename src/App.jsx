import "./App.css"
import Button from "./components/Button"
import Card from "./components/Card"
import CardContainer from "./components/CardContainer"

const App = () => {

  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
      <div>
         <div className="cover">
          <Button>
          <h1>Click me</h1>
          </Button>
       <form className="formulaire" id="formul">
        <input onChange={handleChange} type="text" placeholder="Your Name" name="firstName" id="firstName"/>
        <input type="text" placeholder="Profile Image" name="image"/>
        <input type="Number" placeholder="Age" min="16" name="age"/>
        <input type="submit" value="Submit"/>
       </form>
    </div>
    <CardContainer/>

      </div>
   
  )
}

export default App

