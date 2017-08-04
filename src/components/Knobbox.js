import React, { Component } from 'react';

//CUSTOM COMPONENTS
import './style.css';
import Result from './Result';
import Knob from './Knob';
import DATA from '../sunspots'

class Knobbox extends Component {

	constructor(){
		super();
		this.state = {
			x: 296,
			y: 69,
			min: 0,
			max: 5,
			radius: 125,
			size: 100,
			fullAngle: 360,
			step: 1,
			rotation: 40
		} 
		this.handleChange = this.handleChange.bind(this);
	}

	//HELPER FUNCTIONS
	_coordToDeg(x,y) {
	
		const center = this.state.size / 2;
		const dX = x - center;
		const dY = y - center;
		const teta = Math.atan(dY / dX) * 180 / Math.PI + 90
		console.log('Teta: '+teta);
		  
		if ((dX < 0 && dY >= 0) || (dX < 0 && dY < 0)) {
		  return teta
		} else {
		  return teta + 180
		}
	}

	/**
   * helper that returns the range
   * @return {Number} - the difference between `min` and `max`
   */
	get range() {
	return this.state.max - this.state.min
	}

	/**
   * helper that returns the steps
   * @return {Number} returns the number of steps from `min` to `max`
   */
	get steps() {
	return Math.round(this.state.range / this.state.step)
	}

	/**
   * returns the rest angle which is half of the difference between
   * `fullAngle` and 360
   * @return {Number} [description]
   */
	get rest() {
	return (360 - this.state.fullAngle) / 2
	}

	updateValue(event) {
	
		const deg = this._coordToDeg(event.clientX, event.clientY);
				
		const boundDeg = Math.max(0, Math.min(this.state.fullAngle, deg - this.rest));
		
		const rawValue = (boundDeg / this.state.fullAngle * this.range + this.state.min)
		
		const value = Math.round(rawValue / this.state.step) * this.state.step;

		this.setState({rotation: deg})
	}

	_onMouseMove(event){		
		this.updateValue(event);
	}

	handleChange(event){
		const value = event.target.value;
		this.props.onChange(value);
	}

	render() {
		const {min, max, step, size, fullAngle} = this.state
    	const baseAngle = fullAngle / this.range

    	//As soon as handleChange is being triggered, this.props.value changes and thus indicator moves.
    	//handleChange is hooked up with slider input value (see line 107)
    	const rotation = this.rest + (this.props.value - min) * baseAngle

		return (
			
			<div className="Knobbox">

				<div className="svg">				
					<Knob name={this.props.name} value={this.props.value} onChange={this.props.onChange} rotation={rotation}/>
				</div>

				<div className="label">{this.props.name}</div>
					
				<div className="Slider">
					<input type="range" value={this.props.value} min="0" max="5" onChange={this.handleChange} className="Slider"/>
				</div>

			</div>
		);
	}
}

export default Knobbox;
