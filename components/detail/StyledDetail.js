import styled from "styled-components";

export const StyledSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 50px;

	.detail {
		width: 100%;
		min-height: 100vh;
		padding: 16px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px;
		background: ${({ theme }) => theme.bg.white};
		display: flex;

		.detail__row--left {
			width: 100%;
		}
	}
`;
