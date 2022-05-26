import styled from "styled-components";

export const StyledStars = styled.div`
	display: inline-block;
	font-size: 1.3rem;
	font-family: Times;
	line-height: 0.5;

	&::before {
		content: "★★★★★";
		letter-spacing: 1px;
		background: ${({ theme, rating }) => {
			return `
      linear-gradient(90deg, ${theme.text.blue} calc(${rating} * 100%), ${theme.text.lightGrey} calc(${rating} * 100%))`;
		}};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export const StyledColumn = styled.div`
	width: 350px;
	padding: 24px 16px;
	border: 1px solid ${({ theme }) => theme.text.lightGrey};
	border-radius: 6px;
	display: flex;
	flex-direction: column;

	.condition {
		display: flex;
		gap: 10px;
		font-size: 0.87rem;
		color: ${({ theme }) => theme.text.grey};

		& > p:last-child {
			padding-left: 10px;
			border-left: 1px solid ${({ theme }) => theme.text.lightGrey};
		}
	}

	.title {
		font-size: 1.37rem;
		font-weight: 600;
		line-height: 1.18;
		word-break: break-word;
		padding-block: 10px;
		color: ${({ theme }) => theme.text.darkGrey};
	}

	.price {
		width: min-content;
		font-size: 2.25rem;
		margin-top: 20px;
		color: ${({ theme }) => theme.text.darkGrey};
		position: relative;

		span {
			font-size: 1.12rem;
			color: ${({ theme }) => theme.text.grey};
			position: absolute;
			top: 4px;
			right: -25px;
		}
	}
`;
