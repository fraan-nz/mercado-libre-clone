import styled from "styled-components";

export const StyledUser = styled.ul`
	display: flex;
	gap: 20px;
	align-items: flex-end;
	list-style: none;
	margin-left: auto;
	padding-bottom: 5px;

	a {
		text-decoration: none;
		font-size: 0.87rem;
		color: ${({ theme }) => theme.text.darkGrey};
	}
	button {
		background-color: transparent;
		border: none;
		text-decoration: none;
		font-size: 0.87rem;
		color: ${({ theme }) => theme.text.darkGrey};
		cursor: pointer;
	}
`;
