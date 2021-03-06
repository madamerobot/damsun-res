import React, { Component } from 'react';

//CUSTOM COMPONENTS
import './style.css';
import Result from './Result';
import Knob from './Knob';
import Knobbox from './Knobbox';
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

						<div className="introtext">
							<p>This is your personal assistant to optimise each day of sun you'll get (we know they are precious).
							Just change the settings below and enjoy it while it lasts.
							</p>
						</div>

						<div className="results">
							<Result data={DATA} tourist={this.state.tourist} price={this.state.price} proof={this.state.proof} />
						</div>
					</div>

					<div className="machine">
							<Knobbox name="Touristzone" value={this.state.tourist} onChange={this.changeTourist}/>
						
							<Knobbox name="Price" value={this.state.price} onChange={this.changePrice}/>

							<Knobbox name="Rainproof" value={this.state.proof} onChange={this.changeProof}/>															
					</div>

				</div>

				<div className="logo">
					<svg viewBox="0 0 49.7 49.7" className="sunsvg">
						 <g>
								<title>Sun Logo</title>							
								<circle cx="24.85" cy="24.85" r="24.85" fill="#ffff00"/>
						 </g>
						 <g>
							<foreignObject width="49.7" height="49.7">
								<p className="logotitle">The Amsterdam Sun Machine</p>
							 </foreignObject>
						 </g>
					</svg>

				</div>

			</div>
		);
	}
}

export default App;
