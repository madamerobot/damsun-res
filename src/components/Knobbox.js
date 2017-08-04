import React, { Component } from 'react';

//CUSTOM COMPONENTS
import './style.css';
import Result from './Result';
import Knob from './Knob';
import DATA from '../sunspots'



class Knobbox extends Component {

	handleChange(event){
		const value = event.target.value;
		this.props.onChange(value);
	}
	
	render() {
		return (
			
			<div className="Knobbox">
								
				<Knob name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
				
				<div className="label">Rainproof</div>
				
				<div className="Slider">
					<input type="range" value={this.props.value} min="0" max="5" onChange={this.handleChange}/>
				</div>

			</div>
		);
	}
}

export default Knobbox;
