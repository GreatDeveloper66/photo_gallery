export default function ImageThumbnail(props) {
  <Card style={this.cardStyle()}>
				{this.renderDeleteButton()}
					<CardImg top width="100%" src={require(`${props.phot}`)} alt="phot" />
					<CardBody className="text-center">
						<CardTitle className="text-primary">Author</CardTitle>
						<CardSubtitle></CardSubtitle>
							
							{this.renderMoveButton()}
					</CardBody>
					{this.renderCues()}
						
				</Card>
  return <img src={props.phot} alt="phot"></img>
}