import React from "react";
import { StyledColumn, StyledStars } from "./StyledColumn";
import { currency, decimal } from "../../../utils/currency";

function RightColumn(props) {
	const { condition, sold_quantity, title, health, price } = props;

	return (
		<StyledColumn>
			<div className="condition">
				<p>{condition === "new" ? "Nuevo" : "Usado"}</p>
				<p>{`${sold_quantity} Vendidos`}</p>
			</div>
			<h1 className="title">{title}</h1>
			<StyledStars
				rating={health}
				aria-label="Rating of this product is 2.3 out of 5."
			></StyledStars>
			<p className="price">
				{currency(price)}
				<span>{decimal(price)}</span>
			</p>
		</StyledColumn>
	);
}

export default RightColumn;
