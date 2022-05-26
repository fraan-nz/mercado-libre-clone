import React from "react";
import ProductList from "../../components/productList/ProductList";

function Category({ prods }) {
	return <ProductList prods={prods} />;
}

export default Category;

export async function getServerSideProps({ query }) {
	const { category } = query;
	const res = await fetch(
		`https://api.mercadolibre.com/sites/MLA/search?category=${category}`
	);
	const prods = await res.json();
	return {
		props: { prods }, // will be passed to the page component as props
	};
}
