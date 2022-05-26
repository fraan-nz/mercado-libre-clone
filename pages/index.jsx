import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { load } from "../redux/features/categoriesSlice";

export default function Home({ categories }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(load(categories));
	});
	return (
		<>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
			<h1>Panda</h1>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://api.mercadolibre.com/sites/MLA/categories");
	const categories = await res.json();

	return {
		props: {
			categories,
		},
	};
}
