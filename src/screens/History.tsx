import { Center, Heading, Text } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

import { VStack, SectionList } from "native-base";
import { useState } from "react";

export function History() {
	const [exercise, setExercise] = useState([
		{
			title: "11/04/2024",
			data: ["Puxada Aberta Pronada", "Remada"],
		},
		{
			title: "12/04/2024",
			data: ["Puxada Aberta"],
		},
	]);

	return (
		<VStack flex={1}>
			<ScreenHeader title='Histórico de Exercícios' />
			<SectionList
				sections={exercise}
				keyExtractor={(item) => item}
				renderItem={({ item }) => <HistoryCard />}
				renderSectionHeader={({ section }) => (
					<Heading color='gray.500' pl={2} fontSize='md' mt={8} mb={3}>
						{section.title}
					</Heading>
				)}
				px={3}
				contentContainerStyle={
					exercise.length === 0 && { flex: 1, justifyContent: "center" }
				}
				ListEmptyComponent={() => (
					<Text
						color='gray.500'
						textAlign='center'
						fontSize='lg'
						fontFamily='heading'>
						Não há exercícios registrados
					</Text>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</VStack>
	);
}
