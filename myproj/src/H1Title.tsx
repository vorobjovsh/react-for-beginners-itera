import { FC } from "react";
	 
type H1Props = { title: string };

const H1Title: FC<H1Props> = ({title}) => (
	<h1>{title}</h1>
);

export default H1Title
