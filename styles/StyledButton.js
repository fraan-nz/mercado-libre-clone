import styled from "styled-components";

export const StyledButton = styled.button`
	width: 100%;
	height: 48px;
	border-radius: 6px;
	margin-top: 8px;
	border: none;
	outline: none;
	cursor: pointer;
	font-weight: 600;
	font-size: 1rem;
	transition: background 0.4s ease;
	${({ theme, color }) => {
		if (color === "blue") {
			return `
      background: ${theme.bg.blue};
      color: ${theme.text.white};
      &:hover {
        background: ${theme.bg.darkBlue};
      }
      `;
		}
		if (color === "white") {
			return `
      background: ${theme.bg.white};
      color: ${theme.text.blue};
      &:hover {
        background: ${theme.bg.lightBlue};
      }
      `;
		}
	}};
`;
