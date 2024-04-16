import { HStack, Heading, Text, VStack } from "native-base";

export function HistoryCard() {
	return (
		<HStack
			w='full'
			px={5}
			py={4}
			mb={3}
			bg='white'
			rounded='xl'
			alignItems='center'
			justifyContent='space-between'>
			<VStack mr={5} flex={1}>
				<Heading
					fontSize='md'
					fontFamily='heading'
					textTransform='capitalize'
					numberOfLines={1}>
					Costas
				</Heading>
				<Text color='gray.500' fontSize='lg' numberOfLines={1}>
					Puxada Aberta Pronada{" "}
				</Text>
			</VStack>
			<Text color='gray.400' fontSize='sm'>
				11/04/2024
			</Text>
		</HStack>
	);
}
