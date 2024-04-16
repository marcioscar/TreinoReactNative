import { Center, ScrollView, VStack, Skeleton, Text } from "native-base";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";

export function Profile() {
	const [phtoIsLoading, setPhotoIsLoading] = useState(false);
	const [userPhoto, setUserPhoto] = useState(
		"https://github.com/marcioscar.png"
	);

	async function handleUserPhotoSeclect() {
		setPhotoIsLoading(true);
		try {
			const photoSelected = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 1,
				aspect: [4, 4],
				allowsEditing: true,
			});
			if (photoSelected.canceled) {
				return;
			}
			if (photoSelected.assets[0].uri) {
				setUserPhoto(photoSelected.assets[0].uri);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setPhotoIsLoading(false);
		}
	}

	return (
		<VStack flex={1}>
			<ScreenHeader title='Perfil' />
			<ScrollView>
				<Center mt={6} px={10}>
					{phtoIsLoading ? (
						<Skeleton
							w={33}
							h={33}
							rounded='full'
							startColor='orange.200'
							endColor='orange.400'
						/>
					) : (
						<UserPhoto
							source={{ uri: userPhoto }}
							alt='foto de perfil'
							size={32}
						/>
					)}
					<TouchableOpacity onPress={handleUserPhotoSeclect}>
						<Text
							color='gray.600'
							fontWeight='bold'
							fontSize='md'
							mt={2}
							mb={8}>
							Alterar Foto
						</Text>
					</TouchableOpacity>
					<Input value='Nome' color='gray.900' bg='gray.50' isDisabled />
					<Input value='Matrícula' color='gray.900' bg='gray.50' isDisabled />
				</Center>
			</ScrollView>
		</VStack>
	);
}
