import { FC } from "react";
	 
type BioProps = { bio: string };

const Bio: FC<BioProps> = (props) => (
	<div>Short biography:
		<p>{props.bio}</p>
		<hr />
	</div>
);

export default Bio
