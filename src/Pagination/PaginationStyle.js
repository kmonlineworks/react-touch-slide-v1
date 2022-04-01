import styled from 'styled-components';
import {
	BiChevronLeft,
	BiChevronRight,
	BiChevronsLeft,
	BiChevronsRight,
} from 'react-icons/bi';

export const PaginationContainer = styled.ul`
	margin-top: 20px;
	list-style: none;
	display: inline-flex;
	gap: 5px;
`;

export const PaginationItem = styled.li`
	font-weight: bold;
	padding: 3px 8px;
	color: ${(props) => (props.active ? 'white' : '#333')};
	background-color: ${(props) => (props.active ? '#333' : 'white')};
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	&:hover {
		background-color: ${(props) => (props.active ? '#333' : '#eee')};
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const PaginationFirstItem = styled(BiChevronLeft)`
	content: ${(<BiChevronLeft />)};
	font-size: 26px;
	color: #333;
	background-color: ${(props) => (props.disabled ? '#eee' : 'white')};
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	&:hover {
		background-color: ${(props) => (props.active ? '#333' : '#eee')};
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const PaginationLastItem = styled(BiChevronRight)`
	content: ${(<BiChevronRight />)};
	font-size: 26px;
	color: #333;
	background-color: ${(props) => (props.disabled ? '#eee' : 'white')};
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	&:hover {
		background-color: ${(props) => (props.active ? '#333' : '#eee')};
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const PaginationPrevItem = styled(BiChevronsLeft)`
	content: ${(<BiChevronsLeft />)};
	font-size: 26px;
	color: #333;
	background-color: ${(props) => (props.disabled ? '#eee' : 'white')};
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	&:hover {
		background-color: ${(props) => (props.active ? '#333' : '#eee')};
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const PaginationNextItem = styled(BiChevronsRight)`
	content: ${(<BiChevronsRight />)};
	font-size: 26px;
	color: #333;
	background-color: ${(props) => (props.disabled ? '#eee' : 'white')};
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	&:hover {
		background-color: ${(props) => (props.active ? '#333' : '#eee')};
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
	}
`;
