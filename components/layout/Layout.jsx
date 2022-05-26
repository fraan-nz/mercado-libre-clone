import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import { login, logout } from "../../redux/features/userSlice";
import { useRouter } from "next/router";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import NavbarLogin from "../navbar/NavbarLogin";

function Layout({ children }) {
	const { pathname } = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						id: userAuth.uid,
						name: userAuth.displayName,
						email: userAuth.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<>
			{pathname === "/registration" ? (
				<NavbarLogin />
			) : pathname === "/login" ? (
				<NavbarLogin />
			) : (
				<Navbar />
			)}

			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
