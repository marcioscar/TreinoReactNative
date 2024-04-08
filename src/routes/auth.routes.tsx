import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";

type AauthRouts = {
	signIn: undefined;
};

export type AuthNavigatorRoutesProp = NativeStackNavigationProp<AauthRouts>;

const { Navigator, Screen } = createNativeStackNavigator<AauthRouts>();

export function AuthRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='signIn' component={SignIn} />
		</Navigator>
	);
}
