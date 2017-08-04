import React, { Component } from 'react';

class Knob extends Component {
	
	render(){

		return (
				<svg viewBox="0 0 135 135" height="135" className="knobsvg">

					<g id="Layer_2" data-name="Layer 2">
						<g id="Layer_1-2" data-name="Layer 1">
							<circle class="cls-1" cx="67.5" cy="67.5" r="67.5"/>
							<circle cx="67.43" cy="67.57" r="63.17"/>
							<line class="cls-2" x1="67.43" y1="67.57" x2="67.43" y2="13.07" stroke="white" strokeWidth="3" transform={`rotate(${this.props.rotation},67,67)`}/>
							<circle class="cls-3" cx="67.48" cy="67.31" r="25.77" fill="#F7F900"/>
						</g>
					</g>

				</svg>
		)
	}
}

export default Knob;