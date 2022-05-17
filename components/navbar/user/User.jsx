import Link from "next/link";
import React from "react";
import Icon from "../icon/Icon";
import { StyledUser } from "./StyledUser";
import cart from "../../../public/cart.png";

function User() {
	return (
		<StyledUser>
			<Link href="/registration">
				<a>Creá tu cuenta</a>
			</Link>
			<Link href="/login">
				<a>Ingresá</a>
			</Link>
			<Link href="/my_purchases">
				<a>Mis compras</a>
			</Link>
			<Link href="/cart">
				<a>
					<Icon src={cart} alt="Imagen carro de compras" />
				</a>
			</Link>
		</StyledUser>
	);
}

export default User;
