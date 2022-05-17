import React from "react";
import { useRouter } from "next/router";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import NavbarLogin from "../navbar/NavbarLogin";

function Layout({ children }) {
	const { pathname } = useRouter();

	return (
		<>
			{pathname === "/" ? <Navbar /> : <NavbarLogin />}
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
