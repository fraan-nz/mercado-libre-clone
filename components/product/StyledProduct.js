import styled from "styled-components";

export const StyledArticle = styled.article`
	width: 100%;
	max-width: 224px;
	height: 330px;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
	background: ${({ theme }) => theme.bg.white};
	cursor: pointer;
	transition: height 0.05s ease, box-shadow 0.05s ease;

	&:hover {
		height: 365px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}
	&:hover .prod__bottom > .prod_desc {
		display: block;
	}

	a {
		text-decoration: none;
	}

	.prod__image {
		width: 100%;
		height: 224px;
		position: relative;
	}
	.prod__bottom {
		width: 100%;
		height: 100%;
		padding: 24px;
		border-top: 1px solid ${({ theme }) => theme.text.lightGrey};

		.prod__price {
			font-size: 1.5rem;
			font-weight: 300;
			color: ${({ theme }) => theme.text.darkGrey};
		}
		.prod__shipping {
			font-size: 0.87rem;
			font-weight: 600;
			margin-top: 8px;
			color: ${({ theme }) => theme.text.green};
		}
		.prod_desc {
			width: 100%;
			height: 45px;
			display: none;
			overflow: hidden;
			text-overflow: ellipsis;
			font-size: 0.87rem;
			font-weight: 300;
			margin-top: 8px;
			color: ${({ theme }) => theme.text.grey};
			transition: display 0.05s ease;
		}
	}
`;
