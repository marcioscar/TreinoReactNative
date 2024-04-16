import {
	HStack,
	Heading,
	Icon,
	Text,
	VStack,
	Image,
	Box,
	ScrollView,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepeitionSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export function Exercise() {
	const navigation = useNavigation<AppNavigatorRoutesProps>();
	function handleGoBack() {
		navigation.goBack();
	}
	return (
		<VStack flex={1}>
			<ScrollView>
				<VStack px={8} pt={12} bg='orange.400'>
					<TouchableOpacity onPress={handleGoBack}>
						<Icon as={Feather} color='gray.700' name='arrow-left' size={6} />
					</TouchableOpacity>
					<HStack
						justifyContent='space-between'
						mt={4}
						mb={8}
						alignItems='center'>
						<Heading color='gray.600' fontSize='lg' flexShrink={1}>
							Puxada Frente Pronada
						</Heading>
						<HStack alignItems='center' color='gray.700'>
							{/* <BodySvg /> */}
							<Image
								alt='icone exercicio'
								w={8}
								h={8}
								source={require("../assets/exe.png")}
							/>
							<Text color='gray.600' ml={1} textTransform='capitalize'>
								Costas
							</Text>
						</HStack>
					</HStack>
				</VStack>

				<VStack p={8}>
					<Image
						w='full'
						h={80}
						source={require("../assets/puxador_frente.gif")}
						alt='imagem exercicio'
						mb={3}
						resizeMode='cover'
						rounded='lg'
						overflow='hidden'
					/>
					<Box bg='gray.50' rounded='lg'>
						<HStack
							alignItems='center'
							justifyContent='space-around'
							mb={6}
							mt={5}>
							<HStack>
								<SeriesSvg />
								<Text color='gray.700' ml='2'>
									Pesado
								</Text>
							</HStack>
							<HStack>
								<RepeitionSvg />
								<Text color='gray.700' ml='2'>
									3 X 15 Repetições
								</Text>
							</HStack>
						</HStack>
						<Button title='Marcar como Realizado' />
					</Box>
				</VStack>
			</ScrollView>
		</VStack>
	);
}
