import {
	PaginationContainer,
	PaginationFirstItem,
	PaginationItem,
	PaginationLastItem,
	PaginationNextItem,
	PaginationPrevItem,
} from './PaginationStyle';

function Pagination({ products, paginate, currentPage, limit }) {
	let shortPage = 5;
	let items = [];

	for (let i = 1; i <= products.length / limit; i++) {
		items.push(i);
	}

	return (
		<PaginationContainer>
			<PaginationFirstItem
				onClick={() => paginate(1)}
				disabled={currentPage === 1 ? true : false}
			/>
			<PaginationPrevItem
				onClick={() =>
					currentPage !== 1 ? paginate(currentPage - 1) : currentPage
				}
				disabled={currentPage === 1 ? true : false}
			/>
			{currentPage > 1 ? <PaginationItem>...</PaginationItem> : ''}
			{items?.slice(currentPage - 1, currentPage + shortPage).map((item) => (
				<PaginationItem
					key={item}
					active={currentPage === item ? true : false}
					onClick={() => paginate(item)}
				>
					{item}
				</PaginationItem>
			))}
			{currentPage < items.length - shortPage ? (
				<PaginationItem>...</PaginationItem>
			) : (
				''
			)}
			<PaginationNextItem
				onClick={() =>
					currentPage !== items.length ? paginate(currentPage + 1) : currentPage
				}
				disabled={currentPage === items.length ? true : false}
			/>
			<PaginationLastItem
				onClick={() => paginate(items.length)}
				disabled={currentPage === items.length ? true : false}
			/>
		</PaginationContainer>
	);
}

export default Pagination;
