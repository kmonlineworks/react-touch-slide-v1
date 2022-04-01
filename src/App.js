import Card from './Card/Card';
import { useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';

function App() {
	const limit = 10;
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	let lastPage = currentPage * limit;
	let firstPage = lastPage - limit;

	const paginate = (item) => {
		setCurrentPage(item);
	};

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
				{products?.slice(firstPage, lastPage).map((item, index) => (
					<Card key={index + 1} product={item} />
				))}
			</div>
			{products && (
				<Pagination
					products={products}
					paginate={paginate}
					currentPage={currentPage}
					limit={limit}
				/>
			)}
		</div>
	);
}

export default App;
