import styled from 'styled-components';

export const PaginationContainer = styled.ul`
	margin-top: 20px;
	list-style: none;
	display: inline-flex;
	gap: 5px;
`;

export const PaginationItem = styled.li`
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
