import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import Icon from "../icon/Icon";
import { StyledUser } from "./StyledUser";
import cart from "../../../public/cart.png";
import { auth } from "../../../services/firebase";
import { logout } from "../../../redux/features/userSlice";

function User() {
	const dispatch = useDispatch();
	const { logged, name } = useSelector((state) => state.user);
	const hrefPurchases = logged ? "/my_purchases" : "/login";
	const hrefCart = logged ? "/my_purchases" : "/login";

	const handleLogout = () => {
		signOut(auth);
		dispatch(logout());
	};

	return (
		<StyledUser>
			{logged ? (
				<button onClick={handleLogout}>{name}</button>
			) : (
				<>
					<Link href="/registration">
						<a>Creá tu cuenta</a>
					</Link>
					<Link href="/login">
						<a>Ingresá</a>
					</Link>
				</>
			)}
			<Link href={hrefPurchases}>
				<a>Mis compras</a>
			</Link>
			<Link href={hrefCart}>
				<a>
					<Icon src={cart} alt="Imagen carro de compras" />
				</a>
			</Link>
		</StyledUser>
	);
}

export default User;
