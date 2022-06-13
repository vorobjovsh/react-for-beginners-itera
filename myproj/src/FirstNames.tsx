import { FC } from "react";
	 
type NameProps = { frName: string };

const FirstName: FC<NameProps> = ({frName}) => (
	<div>First Name: {frName}</div>
);

export default FirstName
