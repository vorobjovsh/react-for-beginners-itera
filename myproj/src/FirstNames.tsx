import { FC } from "react";
	 
type NameProps = { frName: string };

const FirstName: FC<NameProps> = (props) => (
	<div>First Name: {props.frName}</div>
);

export default FirstName
