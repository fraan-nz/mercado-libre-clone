import React from "react";
import Detail from "../../components/detail/Detail";

function ProductDetail({ prod }) {
	return <Detail {...prod[0].body} />;
}

export default ProductDetail;

export async function getServerSideProps({ query }) {
	const { id } = query;
	const res = await fetch(`https://api.mercadolibre.com/items?ids=${id}`);
	const prod = await res.json();
	return {
		props: { prod },
	};
}
