import React from "react";
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKeys => {
			return <li key={igKeys}><span style={{textTransform: 'capitalize'}}>{igKeys}</span>: {props.ingredients[igKeys]}</li>
		});
	return (
		<>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to checkout?</p>
			<Button clicked={props.purchaseCanceled} btnType="Danger">CANCEL</Button>
			<Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
		</>
	)
}



export default orderSummary;