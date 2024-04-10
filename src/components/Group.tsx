import { Text } from "native-base";

type Props = {
	name: string;
};

export function Group({ name }: Props) {
	return (
		<Text
			color='gray.600'
			textTransform='uppercase'
			fontSize='xs'
			fontWeight='bold'>
			{name}
		</Text>
	);
}
