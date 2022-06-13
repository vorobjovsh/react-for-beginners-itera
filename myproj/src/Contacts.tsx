import { FC } from "react";
	 
type ContactsProps = { 
	email: string,
  phone: number
};

const Contacts: FC<ContactsProps> = (props) => (
	<div>Public contacts:
			<p>Email: {props.email}</p>
			<p>Phone: {props.phone}</p>
	</div>
);

export default Contacts
