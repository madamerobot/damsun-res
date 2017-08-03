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
									
									<text xml:space="preserve" textAnchor="middle" fontFamily="Raleway" 
										fontSize="24" id="svg_3" y="162.64204" x="253.46022" 
										strokeOpacity="0" strokeLinecap="null" 
										strokeLinejoin="null" strokeDasharray="null" 
										strokeWidth="0" stroke="#000000" 
										fill="#000000">The Amsterdam
									</text>

									<ellipse strokeOpacity="0" ry="93" rx="92" id="svg_1" cy="173.64204" 
									cx="251.46022" strokeLinecap="null" strokeLinejoin="null" 
									strokeDasharray="null" strokeWidth="5" stroke="#000000" 
									fill="#ffff00"/>
									
									<text id="svg_4" xml:space="preserve" textAnchor="middle" 
									fontFamily="Sans-serif" fontSize="24" y="174.82314" x="250.47512" 
									strokeOpacity="0" strokeLinecap="null" strokeLinejoin="null" 
									strokeDasharray="null" strokeWidth="0" stroke="#000000" 
									fill="#000000">The Amsterdam
									</text>

									<text xml:space="preserve" textAnchor="middle" 
									fontFamily="Sans-serif" fontSize="24" id="svg_5" 
									y="198.64204" x="247.46022" strokeOpacity="0" 
									strokeLinecap="null" strokeLinejoin="null" 
									strokeDasharray="null" strokeWidth="0" 
									stroke="#000000" fill="#000000">Sun Machine
									</text>
							 </g>
						</svg>
				</div>

				</div>
			</div>
		);
	}
}

export default App;
