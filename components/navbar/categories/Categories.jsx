import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { StyledCategories } from "./StyledCategories";
import { categoriesTitles } from "../../../models/categories.titles";

function Categories() {
	const { categories } = useSelector((state) => state.categories);
	console.log(categories);

	return (
		<StyledCategories>
			<li>Categorías</li>

			<ul className="categories">
				{categoriesTitles.map((cat) =>
					cat.sub ? (
						<li key={cat.title}>
							<a>{cat.title}</a>
							<ul>
								{cat.sub.map((sub) => (
									<li key={sub.title}>
										<Link href={`category/${sub.id}`}>
											<a>{sub.title}</a>
										</Link>
									</li>
								))}
							</ul>
						</li>
					) : (
						<li key={cat.title}>
							<Link href={`category/${cat.id}`}>
								<a>{cat.title}</a>
							</Link>
						</li>
					)
				)}
			</ul>

			<li>Ofertas</li>
			<li>Historial</li>
			<li>Supermercado</li>
			<li>Moda</li>
			<li>Vender</li>
			<li>Ayuda</li>
		</StyledCategories>
	);
}

export default Categories;
