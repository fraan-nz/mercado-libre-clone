import React from "react";
import Image from "next/image";
import { StyledNavbarLogin } from "./StyledNavbarLogin";
import { StyledWrapper } from "../../styles/StyledWrapper";
import logo from "../../public/ml-logo.png";

function NavbarLogin() {
	return (
		<StyledNavbarLogin>
			<StyledWrapper>
				<Image src={logo} alt="Mercado Libre Logo" layout="fixed" />
			</StyledWrapper>
		</StyledNavbarLogin>
	);
}

export default NavbarLogin;
