import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/Layout";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<GlobalStyles />
			</Provider>
		</ThemeProvider>
	);
}

export default MyApp;
