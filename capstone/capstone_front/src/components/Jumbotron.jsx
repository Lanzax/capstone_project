import Container from "react-bootstrap/esm/Container"

const Jumbotron = () => {
    return (
        <Container fluid style={{ position: 'relative' }}>
            <Container fluid className="background-image ">
                    <div className="d-flex justify-content-center">
                        <div>
                            <img className='m-3' src="https://placekitten.com/450" alt="" />
                        </div>

                        <div className=' d-flex flex-column justify-content-between'>
                            <img className='m-3' src="https://placekitten.com/200" alt="" />
                            <img className='m-3' src="https://placekitten.com/200" alt="" />
                        </div>
                    </div>
            </Container>
        </Container>
    )
}
export default Jumbotron