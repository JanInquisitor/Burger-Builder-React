import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import './BuildControls.css'

const controls = [
	{label: 'Salad', type: 'salad'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat', type: 'meat'}
];


const buildControls = (props) => {
	return(
		<div className={'BuildControls'}>
			<p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
			{controls.map(ctrl => {
			 return	<BuildControl
				 	key={ctrl.label}
				 	label={ctrl.label}
				 	added={() => props.add(ctrl.type)}
					removed={() => props.remove(ctrl.type)}
			 		disabled={props.disabled[ctrl.type]} />
			})}
			<button
				className={'OrderButton'}
				disabled={!props.purchasable}
				onClick={props.ordered}>ORDER NOW</button>
		</div>
	)
}

export default buildControls