import styled from "styled-components";

export const StyledForm = styled.form`
	width: 296px;
	height: 409px;
	padding-inline: 64px;
	padding-block: 32px;
	border-radius: 6px;
	background: ${({ theme }) => theme.bg.white};
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
	box-sizing: content-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transform: translateY(-95px);

	h1 {
		font-size: 1.5rem;
		color: ${({ theme }) => theme.text.darkGrey};
		font-weight: 600;
		margin-bottom: 40px;
		line-height: 27px;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 10px;
		color: ${({ theme }) => theme.text.darkGrey};
		font-weight: 400;

		span {
			font-size: 0.87rem;
			margin-left: 6px;
		}

		input {
			width: 100%;
			height: 48px;
			padding: 13px 12px;
			font-size: 1rem;
			border-radius: 6px;
			border: 1px solid ${({ theme }) => theme.text.lightGrey};

			&:focus {
				border-color: transparent;
				outline: 2px solid ${({ theme }) => theme.text.blue};
			}
		}
	}

	.form__buttons {
		margin-top: 25px;
	}
`;
