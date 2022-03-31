import Card from './Card/Card';
import { useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';

function App() {
	let limit = 10;
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	let lastPage;
	if (currentPage === 0) {
		lastPage = 0;
	} else {
		lastPage = currentPage * limit;
	}

	const paginate = (item) => {
		setCurrentPage(item);
	};

	useEffect(() => {
		const data = () => {
			fetch(`https://dummyjson.com/products?skip=${lastPage}&limit=${limit}`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setProducts(data.products);
				});
		};
		data();
	}, [lastPage, limit]);

	return (
		<div className="container">
			<div className="grid-4">
				{products.map((item, index) => (
					<Card key={index + 1} product={item} />
				))}
			</div>
			<Pagination
				products={products}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</div>
	);
}

export default App;
