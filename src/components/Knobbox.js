import React, { Component } from 'react';

//CUSTOM COMPONENTS
import './style.css';
import Result from './Result';
import Knob from './Knob';
import DATA from '../sunspots'

class Knobbox extends Component {

	constructor(props){   
		super(props);

		this.state = {tourist: '4', 
									price: '4', 
									proof: '4'
								};

		this.changeTourist = this.changeTourist.bind(this);
		this.changePrice = this.changePrice.bind(this);
		this.changeProof = this.changeProof.bind(this);
	}

	changeTourist (value) {
		this.setState({ tourist: value })
	}

	changePrice (value) {
		this.setState({ price: value })
	}

	changeProof (value) {
		this.setState({ proof: value })
	}
	
	render() {
		return (
			
			<div className="Knobbox">
								
				<Knob name={this.props.name} value={this.state.value} onChange={this.props.onChange}/>
				
				<div className="label">Rainproof</div>
				
				<div className="Slider">
					<input type="range" value={this.state.value} min="0" max="5" onChange={this.handleChange}/>
				</div>

			</div>
		);
	}
}

export default Knobbox;
