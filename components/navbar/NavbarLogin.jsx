import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StyledNavbarLogin } from "./StyledNavbarLogin";
import { StyledWrapper } from "./StyledNavbarLogin";
import logo from "../../public/ml-logo.png";

function NavbarLogin() {
	return (
		<StyledNavbarLogin>
			<StyledWrapper>
				<Link href="/">
					<a>
						<Image src={logo} alt="Mercado Libre Logo" layout="fixed" />
					</a>
				</Link>
			</StyledWrapper>
		</StyledNavbarLogin>
	);
}

export default NavbarLogin;
