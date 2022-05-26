import styled from "styled-components";

export const StyledNavbarLogin = styled.nav`
	width: 100%;
	height: 238px;
	background: ${({ theme }) => theme.bg.yellow};
	padding-block: 11px;
	padding-inline: 8px;
	display: flex;
	justify-content: center;
`;

export const StyledWrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	padding-inline: 2px;
`;
