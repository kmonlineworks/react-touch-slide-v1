import { useCallback, useEffect, useRef, useState } from 'react';
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
	const [currentPage, setCurrentPage] = useState(10);

	let observer = useRef();
	const lastObservElement = useCallback(
		(node) => {
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						if (products.length === currentPage) return;
						setCurrentPage((currentPage) => currentPage + 10);
					}
				},
				{ root: null, rootMargin: '0px', threshold: 0.25 }
			);
			if (node) observer.current.observe(node);
		},
		[currentPage, products]
	);

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
			<div className="grid-4">
				{products?.slice(0, currentPage).map((product, index) =>
					currentPage === index + 1 ? (
						<CardContainer key={product.id} ref={lastObservElement}>
							<CardMediaContainer>
								<CardMedia src={product.thumbnail} atl={product.title} />
								<CardCategory>{product.category}</CardCategory>
							</CardMediaContainer>
							<CardTitle>{product.title}</CardTitle>
							<CardDesc>{product.description}</CardDesc>
						</CardContainer>
					) : (
						<CardContainer key={product.id}>
							<CardMediaContainer>
								<CardMedia src={product.thumbnail} atl={product.title} />
								<CardCategory>{product.category}</CardCategory>
							</CardMediaContainer>
							<CardTitle>{product.title}</CardTitle>
							<CardDesc>{product.description}</CardDesc>
						</CardContainer>
					)
				)}
			</div>
			{products.length === currentPage && (
				<h2
					style={{ fontSize: '16px', textAlign: 'center', marginTop: '20px' }}
				>
					No more products..!
				</h2>
			)}
		</div>
	);
}

export default App;
