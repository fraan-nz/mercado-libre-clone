import React from "react";
import { useRouter } from "next/router";
import { StyledButton } from "../../styles/StyledButton";
import { StyledForm } from "./StyledForm";
import { bgButton } from "../../models/button.styles";

function Form() {
	const { pathname } = useRouter();
	return (
		<StyledForm>
			{pathname === "/login" && <h1>¡Hola! Ingresá tu e-mail y contraseña</h1>}
			{pathname === "/registration" && (
				<h1>Registrate con tu e-mail y contraseña</h1>
			)}
			<label>
				<span>E-mail</span>
				<input type="email" />
			</label>
			<label>
				<span>Contraseña</span>
				<input type="password" />
			</label>
			<div className="form__buttons">
				{pathname === "/login" && (
					<>
						<StyledButton color={bgButton.blue}>Continuar</StyledButton>
						<StyledButton color={bgButton.white}>Crear cuenta</StyledButton>
					</>
				)}
				{pathname === "/registration" && (
					<>
						<StyledButton color={bgButton.blue}>Registrarse</StyledButton>
					</>
				)}
			</div>
		</StyledForm>
	);
}

export default Form;
