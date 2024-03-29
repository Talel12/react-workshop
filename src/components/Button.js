import { handleClick } from "../utils/eventHandler"

const Button = ({children=<span>Click me</span>}) => {
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button