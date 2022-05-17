import styled from "styled-components";

export const StyledCategories = styled.ul`
	height: 100%;
	display: flex;
	align-items: flex-end;
	line-height: 1.5;
	list-style: none;
	font-size: 0.87rem;
	color: ${({ theme }) => theme.text.lightGrey};
	gap: 18px;

	li {
		cursor: pointer;

		&:first-child {
			margin-right: 10px;
			position: relative;

			&::after {
				content: "ˇ";
				width: 12px;
				position: absolute;
				right: -12px;
				top: 0;
				font-size: 1.7rem;
				text-align: right;
			}
		}
	}
`;
