import { useEffect, useRef, useState } from 'react';
import {
	CardCategory,
	CardContainer,
	CardDesc,
	CardMedia,
	CardMediaContainer,
	CardTitle,
} from '../src/Card/CardStyle';

function App() {
	const [products, setProducts] = useState([]);
	const [currentPage] = useState(10);

	const sliderOuter = useRef();
	const sliderInner = useRef();
	const [isPressed, setIsPressed] = useState(false);
	const [cursorXPosition, setCursorXPosition] = useState();
	const [cardPosition, setCardPosition] = useState();

	function dragMouseLeave() {
		if (isPressed) setIsPressed(false);
	}

	function drag(e) {
		e.preventDefault();
		setIsPressed(true);
		setCursorXPosition(parseInt(e.clientX - sliderInner.current.offsetLeft));
	}

	function dragMouseMove(e) {
		if (!isPressed) return;
		e.preventDefault();
		setCardPosition(parseInt(e.clientX - cursorXPosition));
		let sliderOuter_x = sliderOuter.current.getBoundingClientRect();
		let sliderInner_x = sliderInner.current.getBoundingClientRect();
		if (cardPosition > 0) {
			setIsPressed(false);
			setCardPosition(0);
		} else if (sliderInner_x.right < sliderOuter_x.right) {
			setIsPressed(false);
			setCardPosition(-(sliderInner_x.width - sliderOuter_x.width));
		}
	}

	function drop() {
		setIsPressed(false);
	}

	useEffect(() => {
		const data = () => {
			fetch(`https://dummyjson.com/products?limit=100`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setProducts(data.products);
				});
		};
		data();
	}, []);

	return (
		<div className="container">
			<div className="touch-slider">
				<div
					ref={sliderOuter}
					className="touch-outer-slider"
					onMouseDown={drag}
					onMouseUp={drop}
					onMouseLeave={dragMouseLeave}
					onMouseMove={dragMouseMove}
					style={{ cursor: isPressed ? 'grabbing' : 'grab' }}
				>
					<div
						ref={sliderInner}
						className="touch-inner-slider"
						style={{ left: `${cardPosition}px` }}
					>
						{products?.slice(0, currentPage).map((product, index) => (
							<CardContainer key={index}>
								<CardMediaContainer>
									<CardMedia src={product.thumbnail} atl={product.title} />
									<CardCategory>{product.category}</CardCategory>
								</CardMediaContainer>
								<CardTitle>{product.title}</CardTitle>
								<CardDesc>{product.description}</CardDesc>
							</CardContainer>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
