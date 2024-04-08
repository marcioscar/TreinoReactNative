import { VStack, Image, Center, Heading, Text, ScrollView } from "native-base";
import LogoSvg from "@assets/logoQuattor.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}>
			<VStack flex={1} bg='gray.700' px={8}>
				<Image
					source={BackgroundImg}
					alt='background'
					resizeMode='contain'
					position='absolute'
				/>
				<Center my={24}>
					<LogoSvg width={200} height={50} />
				</Center>
				<Center>
					<Heading fontSize='xl' mb={6} fontFamily='heading' color='gray.100'>
						Acesse seus Treinos
					</Heading>
					<Input placeholder='Número da Matrícula' keyboardType='numeric' />
					<Button title='Acessar' />
				</Center>
				<Center>
					<Text color={"gray.200"} fontSize={"sm"} mt={5} fontFamily='body'>
						Pegue o número da Matrícula com o Professor
					</Text>
				</Center>
			</VStack>
		</ScrollView>
	);
}
