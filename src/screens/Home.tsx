import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, HStack, Text, VStack, FlatList, Heading } from "native-base";
import { useState } from "react";

export function Home() {
	const [groups, setGroups] = useState([
		"Costas",
		"Ombros",
		"Triceps",
		"Bíceps",
	]);
	const [exercises, setExercises] = useState([
		"Puxada Aberta Pronada",
		"Puxada com estribus",
		"Remada Articulada Pronada",
		"Bíceps",
	]);
	const [groupSelected, setGroupSelected] = useState("Costas");
	const navigation = useNavigation<AppNavigatorRoutesProps>();

	function handleOpenExercise() {
		navigation.navigate("exercise");
	}

	return (
		<VStack flex={1} bg='gray.100'>
			<HomeHeader />
			<FlatList
				data={groups}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Group
						name={item}
						onPress={() => setGroupSelected(item)}
						isActive={
							groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
						}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				_contentContainerStyle={{ px: 2 }}
				my={4}
				maxH={10}
				minH={10}
			/>
			<VStack flex={1} px={4}>
				<HStack justifyContent='space-between' mb={5}>
					<Heading color='gray.600' fontSize='md'>
						Exercícios
					</Heading>
					<Text color='gray.500' fontSize='sm'>
						{exercises.length}
					</Text>
				</HStack>

				<FlatList
					data={exercises}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<ExerciseCard onPress={handleOpenExercise} />
					)}
					showsVerticalScrollIndicator={false}
					_contentContainerStyle={{ paddingBottom: 20 }}
				/>
			</VStack>
		</VStack>
	);
}
