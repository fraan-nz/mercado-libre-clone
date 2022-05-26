import styled from "styled-components";

export const StyledNavbar = styled.nav`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	background: ${({ theme }) => theme.bg.yellow};
	padding-top: 8px;
	padding-inline: 8px;
	position: relative;
`;

export const StyledWrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding-inline: 10px;

	.navbar__row--top {
		width: 100%;
		display: flex;
		align-items: flex-start;

		.navbar__logo {
			margin-top: 3px;
		}

		form {
			width: 598px;
			display: flex;
			box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
			margin-right: auto;
			margin-left: 52px;

			input {
				width: 100%;
				height: 39px;
				padding: 7px 15px 9px 15px;
				font-size: 1rem;
				border: none;
				border-top-left-radius: 2px;
				border-bottom-left-radius: 2px;
				color: ${({ theme }) => theme.text.darkGrey};
				outline: none;
				&::placeholder {
					font-size: 1rem;
					color: ${({ theme }) => theme.text.lightGrey};
				}
			}

			button {
				width: 46px;
				height: 39px;
				border: none;
				background: ${({ theme }) => theme.bg.white};
				border-top-right-radius: 2px;
				border-bottom-right-radius: 2px;
				display: grid;
				place-content: center;
				position: relative;

				&::after {
					content: "";
					width: 1px;
					height: 29px;
					background-color: ${({ theme }) => theme.bg.grey};
					position: absolute;
					left: -1px;
					top: 5px;
				}
			}
		}
	}

	.navbar__row--bottom {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;

		.location {
			display: flex;
			gap: 2px;
			width: 185px;
			padding-bottom: 8px;

			.location__text {
				display: flex;
				flex-direction: column;
				margin-top: 2px;
				line-height: 1;
				gap: 2px;

				& > p:first-child {
					font-size: 0.75rem;
					color: ${({ theme }) => theme.text.grey};
				}

				& > p:last-child {
					font-size: 0.87rem;
					color: ${({ theme }) => theme.text.darkGrey};
				}
			}
		}
	}
`;
