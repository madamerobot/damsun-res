import React, { Component } from 'react';

class Knob extends Component {
	
	render(){

		return (
				<div className="svg">
					<svg width="202" height="202" className="knobsvg">
						<g>
						  <title>Biggest Circle</title>
						  <circle 	id="svg_1" 
									r="80" 
									cy="100.81073" 
									cx="100.81073" 
									strokeLinecap="null" 
									strokeLinejoin="null" 
									strokeDasharray="null" 
									strokeWidth="3" 
									stroke="#848372" 
									fill="black" 
									/>
						 </g>
						 <g display="inline">
						  <title>Smaller Circle plus Indicator</title>
						   <line 	id="svg_12" 
						  			x1="102.81073" 
						  			y1="6.810728" 
						  			x2="102.81073" 
						  			y2="97.81073"
						  			strokeLinecap="null" 
						  			strokeLinejoin="null" 
						  			strokeDasharray="null" 
						  			strokeWidth="3" 
						  			stroke="white" 
						  			fill="none"
						  			//102,97 defines x/y of the indicator's center point
						  			transform={`rotate(${this.props.rotation},102,97)`}
						  	/>
						  <circle 	id="svg_6" 
						  			stroke="#f7f714" 
						  			fill-opacity="0" 
						  			r="32.027023" 
						  			cy="101.310732" 
						  			cx="101.81073" 
						  			strokeLinecap="null" 
						  			strokeLinejoin="null" 
						  			strokeDasharray="null" 
						  			strokeWidth="3" 
						  			fill="#f7f714"/>
						</g>
					</svg>
				</div>
		)
	}
}

export default Knob;