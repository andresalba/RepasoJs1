import React from 'react';

const HolaMundo = () => {
	const Hello = 'hola mundo';
	const isTrue = false;
	return(
		<div className="HolaMundo">
			<h1>{Hello}</h1>
			<h2>React Basico</h2>
			<img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />
			{isTrue ? <h4>verdadero</h4> : <h5>falso</h5>}
			{isTrue && <h4>verdadero nuevamente</h4>}
		</div>
	);
};

export default HolaMundo;