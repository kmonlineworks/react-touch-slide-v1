import { PaginationContainer, PaginationItem } from './PaginationStyle';

function Pagination({ products, paginate }) {
	let items = [];
	for (let i = 0; i < products.length; i++) {
		items.push(i);
	}

	return (
		<PaginationContainer>
			{items?.map((item) => (
				<PaginationItem key={item} onClick={() => paginate(item)}>
					{item + 1}
				</PaginationItem>
			))}
		</PaginationContainer>
	);
}

export default Pagination;
