import { Container, Row } from 'reactstrap'



export default function ImageGallery(props) {
  const renderImages = () => {
    return props.images.map(img => <ImageThumbNail props={img} />)
  }
  
  return (
    <Container className="mt-3">
				<Row className="d-flex justify-content-center align-items-stretch">
					<div className="mt-3 mb-3"><h1 className="text-primary">Pictures</h1></div>
				</Row>
					<Row className="d-flex justify-content-start align-items-stretch">
					{renderImages()}
				</Row>
			</Container>
  )
}