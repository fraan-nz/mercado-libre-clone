import React from "react";
import { StyledWrapper } from "../../styles/StyledWrapper";
import { StyledSection, StyledList } from "./StyledList";
import Product from "../product/Product";

function ProductList({ prods }) {
	const { results } = prods;

	return (
		<StyledSection>
			<StyledWrapper>
				<StyledList>
					{results.map((prod) => (
						<Product
							key={prod.id}
							id={prod.id}
							currency={prod.currency_id}
							price={prod.price}
							title={prod.title}
							thumbnail={prod.thumbnail_id}
							shipping={prod.shipping.free_shipping}
						/>
					))}
				</StyledList>
			</StyledWrapper>
		</StyledSection>
	);
}

export default ProductList;
