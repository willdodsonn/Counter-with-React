//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

const SimpleCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="counter mx-auto py-4 counter container d-flex flex-row justify-content-evenly bg-dark">
				<div className="clock">
					<FontAwesomeIcon icon={faClock} />
				</div>
				<div className="five">{props.numberFive % 10}</div>
				<div className="four">{props.numberFour % 10}</div>
				<div className="three">{props.numberThree % 10}</div>
				<div className="two">{props.numberTwo % 10}</div>
				<div className="one">{props.numberOne % 10}</div>
			</div>
		</div>
	);
};
SimpleCounter.propTypes = {
	numberFive: PropTypes.string,
	numberFour: PropTypes.string,
	numberThree: PropTypes.string,
	numberTwo: PropTypes.string,
	numberOne: PropTypes.string,
};

//render your react application
let i = 0;
setInterval(() => {
	i++;
	const five = Math.floor(i / 10000);
	const four = Math.floor(i / 1000);
	const three = Math.floor(i / 100);
	const two = Math.floor(i / 10);
	const one = Math.floor(i / 1);

	ReactDOM.render(
		<SimpleCounter
			numberOne={one}
			numberTwo={two}
			numberThree={three}
			numberFour={four}
			numberFive={five}
		/>,
		document.querySelector("#app")
	);
}, 1000);
