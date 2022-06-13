import { FC } from "react";
	 
type BioProps = { bio: string };

const Bio: FC<BioProps> = ({bio}) => (
	<div>Short biography:
		<p>{bio}</p>
		<hr />
	</div>
);

export default Bio
