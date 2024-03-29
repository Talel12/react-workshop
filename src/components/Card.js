import Button from "./Button"

const Card = ({nom , age="500" }) => {

  return (
    <div className="card">
        <div className="hero">
            <h1>...</h1>
            <img src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                alt="avatar"/>
                <h2>{nom}</h2>
        </div>
        <div className="info">
            <div >
                <h1>{age}</h1>
            </div>
            <Button >
                <a href="https://www.linkedin.com/in/asus-sahin-11977b192/">
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                </a>
            </Button>
        </div>
    </div>
  )
}

export default Card
