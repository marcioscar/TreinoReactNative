import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { Feather } from "@expo/vector-icons";
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
	return (
		<HStack bg='orange.400' pt={16} pb={5} px={8} alignItems='center'>
			<UserPhoto
				source={{ uri: "https://github.com/marcioscar.png" }}
				size={16}
				alt='Imagem usuario'
				mr={4}
			/>
			<VStack flex={1}>
				<Text fontSize='md'>Olá,</Text>
				<Heading fontSize='md'>Márcio</Heading>
			</VStack>
			<TouchableOpacity>
				<Icon as={Feather} name='log-out' color='gray.500' size={7} />
			</TouchableOpacity>
		</HStack>
	);
}
