import React, { Component } from 'react';

//CUSTOM COMPONENTS
import './style.css';
import Result from './Result';
import Knob from './Knob';
import DATA from '../sunspots'

class App extends Component {

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
			<div className="machinewrapper">

				<div className="machinearea">
					
					<div className="resultpaper">
						<div className="results">
							<Result data={DATA} tourist={this.state.tourist} price={this.state.price} proof={this.state.proof} />
						</div>
					</div>

					<div className="machine">
							<div className="Knobbox">
								<Knob name="Rainproof" value={this.state.proof} onChange={this.changeProof}/>
								<Knob name="Touristzone" value={this.state.tourist} onChange={this.changeTourist}/>
								<Knob name="Pricelevel" value={this.state.price} onChange={this.changePrice}/>
							</div>
					</div>

					<div className="logo">
						<svg width="640" height="480" className="sunsvg">
							 <g>
									<title>Sun Logo</title>							
									<ellipse stroke-opacity="0" ry="93" rx="92" id="svg_1" cy="153.64204" cx="268.46022" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="5" stroke="#000000" fill="#ffff00"/>
							 </g>
						</svg>
				</div>

				</div>
			</div>
		);
	}
}

export default App;
