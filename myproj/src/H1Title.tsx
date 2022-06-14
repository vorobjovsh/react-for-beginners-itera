import { PureComponent } from "react";
	 
type H1Props = { title: string };
	class H1Title extends PureComponent<H1Props> {
	  render() {
	    return <h1>{this.props.title}</h1>;
	  }
	}

	export default H1Title