import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { schema } from "../../models/validation.schema";
import { StyledButton } from "../../styles/StyledButton";
import { StyledForm } from "./StyledForm";
import { bgButton } from "../../models/button.styles";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";

function Form() {
	const dispatch = useDispatch();
	const { pathname, replace } = useRouter();

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={(values) => {
				if (pathname === "/registration") {
					createUserWithEmailAndPassword(auth, values.email, values.password)
						.then((userAuth) => {
							updateProfile(userAuth.user, {
								displayName: "panda",
							}).catch((error) => {
								console.log(error);
							});
							replace("/");
						})
						.catch((err) => {
							console.log(err);
						});
				}
				if (pathname === "/login") {
					signInWithEmailAndPassword(auth, values.email, values.password)
						.then((userAuth) => {
							dispatch(
								login({
									id: userAuth.uid,
									name: userAuth.displayName,
									email: userAuth.email,
								})
							);
							replace("/");
						})
						.catch((err) => {
							console.log(err);
						});
				}
			}}
			validationSchema={schema}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => (
				<StyledForm onSubmit={handleSubmit}>
					{pathname === "/login" && (
						<h1>¡Hola! Ingresá tu e-mail y contraseña</h1>
					)}
					{pathname === "/registration" && (
						<h1>Registrate con tu e-mail y contraseña</h1>
					)}
					<label>
						<span>E-mail</span>
						<input
							type="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.email && touched.email ? (
							<span className="error">{errors.email}</span>
						) : null}
					</label>
					<label>
						<span>Contraseña</span>
						<input
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.password && touched.password ? (
							<span className="error">{errors.password}</span>
						) : null}
					</label>
					<div className="form__buttons">
						{pathname === "/login" && (
							<>
								<StyledButton color={bgButton.blue}>Continuar</StyledButton>
								<Link href="/registration">
									<a>
										<StyledButton color={bgButton.white} type="submit">
											Crear cuenta
										</StyledButton>
									</a>
								</Link>
							</>
						)}
						{pathname === "/registration" && (
							<>
								<StyledButton color={bgButton.blue} type="submit">
									Registrarse
								</StyledButton>
								<Link href="/login">
									<a>
										<StyledButton color={bgButton.white}>Ingresá</StyledButton>
									</a>
								</Link>
							</>
						)}
					</div>
				</StyledForm>
			)}
		</Formik>
	);
}

export default Form;
