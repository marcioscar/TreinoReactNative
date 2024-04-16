import { Button as ButtonNative, IButtonProps, Text } from "native-base";
type Props = IButtonProps & {
	title: string;
};

export function Button({ title, ...rest }: Props) {
	return (
		<ButtonNative
			{...rest}
			w='full'
			h={14}
			bg='green.600'
			rounded={"md"}
			_pressed={{
				bg: "green.500",
			}}>
			<Text color='white' fontFamily={"heading"} fontSize={"md"}>
				{title}
			</Text>
		</ButtonNative>
	);
}
