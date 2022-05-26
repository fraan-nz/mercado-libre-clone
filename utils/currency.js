export const decimal = (num) => {
	const number = (num + "").split(".")[1];
	if (parseInt(number) > 0) return number;
};

export const currency = (num) => {
	const number = num.toFixed();
	return Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
		minimumFractionDigits: 0,
	}).format(number);
};
