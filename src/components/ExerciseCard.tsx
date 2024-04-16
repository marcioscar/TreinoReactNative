import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
	return (
		<TouchableOpacity {...rest}>
			<HStack bg='white' alignItems='center' rounded='2xl' pr={4} p={2} mb={3}>
				<Image
					source={{
						uri: "https://www.fiqueinforma.com/wp-content/uploads/2008/12/puxadas-m%C3%BAsculos.png",
					}}
					alt='exercicio'
					w={16}
					h={16}
					rounded='2xl'
					mr={4}
					resizeMode='cover'
				/>
				<VStack flex={1}>
					<Heading fontSize='sm' fontFamily='heading'>
						PUXADA ABERTA PRONADA
					</Heading>
					<Text
						fontSize='md'
						mt={1}
						numberOfLines={2}
						color='blue.600'
						fontWeight='extrabold'>
						🔁 3 x 30
					</Text>
				</VStack>

				<Icon as={Entypo} name='chevron-thin-right' color='gray.300' />
			</HStack>
		</TouchableOpacity>
	);
}
