import { Center, Heading } from "native-base";

type Props = {
	title: string;
};

export function ScreenHeader({ title }: Props) {
	return (
		<Center bg='orange.400' pb={6} pt={16}>
			<Heading color='gray.700' fontSize='xl' fontFamily='heading'>
				{title}
			</Heading>
		</Center>
	);
}
