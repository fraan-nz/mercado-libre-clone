import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledArticle } from "./StyledProduct";
import { currency } from "../../utils/currency";

function Product(props) {
	const { title, price, thumbnail, shipping, id } = props;
	return (
		<StyledArticle>
			<Link href={`/product/${id}`} replace>
				<a>
					<div className="prod__image">
						<Image
							src={`https://http2.mlstatic.com/D_${thumbnail}-E.jpg`}
							alt={title}
							layout="fill"
							objectFit="contain"
							objectPosition="center"
						/>
					</div>
					<div className="prod__bottom">
						<p className="prod__price">{currency(price)}</p>
						{shipping === true ? (
							<p className="prod__shipping">Envío gratis</p>
						) : null}
						<p className="prod_desc">{title}</p>
					</div>
				</a>
			</Link>
		</StyledArticle>
	);
}

export default Product;
