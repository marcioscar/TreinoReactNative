import { Text, Pressable, IPressableProps } from "native-base";

type Props = IPressableProps & {
	name: string;
	isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
	return (
		<Pressable
			mr={3}
			w={24}
			h={10}
			bg='gray.200'
			rounded='md'
			justifyContent='center'
			alignItems='center'
			overflow='hidden'
			isPressed={isActive}
			_pressed={{
				borderColor: "blue.300",
				borderWidth: 1,
			}}
			{...rest}>
			<Text
				color={isActive ? "blue.600" : "gray.800"}
				textTransform='uppercase'
				fontSize='xs'
				fontWeight='extrabold'
				fontFamily='heading'>
				{name}
			</Text>
		</Pressable>
	);
}
