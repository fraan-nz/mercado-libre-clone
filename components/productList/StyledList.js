import styled from "styled-components";

export const StyledSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 50px;
`;

export const StyledList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
	grid-auto-rows: 380px;
	justify-items: center;
`;
