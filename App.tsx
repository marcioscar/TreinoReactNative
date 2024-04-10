import { StatusBar } from "react-native";
import { NativeBaseProvider, Center } from "native-base";
import { THEME } from "src/theme";
import {
	useFonts,
	Montserrat_400Regular,
	Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

export default function App() {
	const [fontLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_700Bold,
	});
	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			{fontLoaded ? <Routes /> : <Loading />}
		</NativeBaseProvider>
	);
}
