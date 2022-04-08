import {
	CardCategory,
	CardContainer,
	CardDesc,
	CardMedia,
	CardMediaContainer,
	CardTitle,
} from './CardStyle';

function Card({ product, isPressed, onDrag }) {
	if (product.description.length > 50) {
		product.description = product.description.substring(0, 50) + '...';
	}
	if (product.title.length > 25) {
		product.title = product.title.substring(0, 25) + '...';
	}

	return (
		<CardContainer draggable={true} isPressed={isPressed} onDrag={onDrag}>
			<CardMediaContainer>
				<CardMedia src={product.thumbnail} atl={product.title} />
				<CardCategory>{product.category}</CardCategory>
			</CardMediaContainer>
			<CardTitle>{product.title}</CardTitle>
			<CardDesc>{product.description}</CardDesc>
		</CardContainer>
	);
}

export default Card;
