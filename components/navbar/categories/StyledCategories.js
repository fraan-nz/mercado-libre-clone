import styled from "styled-components";

export const StyledCategories = styled.ul`
	height: 100%;
	display: flex;
	align-items: flex-end;
	line-height: 1.5;
	list-style: none;
	font-size: 0.87rem;
	color: ${({ theme }) => theme.text.grey};
	gap: 18px;
	position: relative;

	li {
		padding-bottom: 8px;
		cursor: pointer;

		&:first-child:not(.categories > li) {
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

			&:hover ~ .categories {
				display: block;
			}
		}
	}

	.categories {
		width: 260px;
		padding-block: 22px;
		background: ${({ theme }) => theme.bg.darkGrey};
		list-style: none;
		position: absolute;
		top: 43px;
		left: -65px;
		display: none;
		border-radius: 4px;

		&:hover {
			display: block;
		}

		li {
			padding-bottom: 0;

			a {
				line-height: 36.26px;
				text-decoration: none;
				font-size: 0.87rem;
				font-weight: 600;
				padding-inline: 36px;
				color: ${({ theme }) => theme.text.white};
				display: flex;
				align-items: center;
				&:hover {
					background: ${({ theme }) => theme.bg.blue};
				}
			}
		}
	}
`;
