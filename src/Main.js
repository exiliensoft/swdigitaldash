import React, {Component} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class Main extends React.Component {
	render() {
		return (
		<div>
			<div className="Header">
				<Header />
			</div>
			<div className="Content">
				<Content />
			</div>
			<div className="Footer">
				<Footer />
			</div>
		</div>
		);
	}
}

export default Main;