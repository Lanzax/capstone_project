import { Container } from "react-bootstrap"

const Jumbotron =()=>{
  return(
    <>
    <Container>
    <div className="jumboNav d-flex p-2 m-3 justify-content-center ">
      <div className="mx-5">Le mie ricette</div>
      <div className="mx-5">Menu'</div>
      <div className="mx-5">Profilo</div>
      <div className="mx-5">Contatti</div>
    </div>
    </Container>

    </>
  ) 
}
export default Jumbotron