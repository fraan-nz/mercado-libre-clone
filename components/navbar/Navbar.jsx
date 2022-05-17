import React from "react";
import Image from "next/image";
import { StyledNavbar, StyledWrapper } from "./StyledNavbar";
import logo from "../../public/ml-logo.png";
import lupa from "../../public/lupa.png";
import navTop from "../../public/nav-top.webp";
import pin from "../../public/pin.png";
import Icon from "./icon/Icon";
import Categories from "./categories/Categories";
import User from "./user/User";

function Navbar() {
	return (
		<StyledNavbar>
			<StyledWrapper>
				<div className="navbar__row--top">
					<Image src={logo} alt="Mercado Libre Logo" layout="fixed" />

					<form>
						<input
							type="text"
							placeholder="Buscar productos, marcas y más..."
						/>
						<button>
							<Icon src={lupa} alt="Icono buscar" />
						</button>
					</form>

					<Image
						src={navTop}
						alt="Imagen promoción nivel 6"
						height={39}
						width={340}
						layout="fixed"
						className="navbar__suscribe-img"
					/>
				</div>
				<div className="navbar__row--bottom">
					<div className="location">
						<Icon src={pin} alt="Pin ubicación" />
						<div className="location__text">
							<p>Enviar a Franco</p>
							<p>Capital Federal</p>
						</div>
					</div>
					<Categories />
					<User />
				</div>
			</StyledWrapper>
		</StyledNavbar>
	);
}

export default Navbar;
