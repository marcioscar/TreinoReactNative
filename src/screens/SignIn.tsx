import { VStack, Image, Center, Heading, Text, ScrollView } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { AuthNavigatorRoutesProp } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

import LogoSvg from "@assets/logoQuattor.svg";
import BackgroundImg from "@assets/backapp.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
	registration: string;
};

export function SignIn() {
	const navigation = useNavigation<AuthNavigatorRoutesProp>();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataProps>();

	function handleLogin({ registration }: FormDataProps) {
		console.log({ registration });
	}

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}>
			<VStack flex={1} bg='orange.400' px={8}>
				<Image
					source={BackgroundImg}
					defaultSource={BackgroundImg}
					alt='background'
					resizeMode='contain'
					position='absolute'
				/>
				<Center my={24}>
					<LogoSvg width={200} height={50} />
				</Center>
				<Center>
					<Heading fontSize='2xl' mb={8} fontFamily='heading'>
						Acesse seus Treinos
					</Heading>
					<Controller
						control={control}
						name='registration'
						rules={{
							required: "Informe a Matrícula, pegue o número com o professor",
						}}
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder='Número da Matrícula'
								keyboardType='numeric'
								onChangeText={onChange}
								value={value}
								onSubmitEditing={handleSubmit(handleLogin)}
								returnKeyType='send'
								errorMessage={errors.registration?.message}
							/>
						)}
					/>

					<Button title='Acessar' onPress={handleSubmit(handleLogin)} />
				</Center>
				{/* <Center>
					<Text color={"gray.500"} fontSize={"md"} mt={3} fontFamily='mono'>
						Pegue o número com o Professor
					</Text>
				</Center> */}
			</VStack>
		</ScrollView>
	);
}
