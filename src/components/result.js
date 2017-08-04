import React, { Component } from 'react';

class Result extends Component {	
	
	render() {
		
		const findResults = this._findResults();

		return (
			<div>
				{findResults}
			</div>
		);
	}

	_findResults() {

	//FETCHING ALL PROPS I NEED
	const { data, price, tourist, proof } = this.props;
	
	//EMPTY ARRAY FOR RESULTS
	const results = [];

		data.map((data) => {
			if(data.Price <= price && data.Touristfactor <= tourist && data.Weatherproof <= proof){				
				results.push(data.Place);
				console.log('Results: '+results);
			}
		});
		if(results.length<=0){
			return <h1>Sorry, you are too picky. No results found.</h1>
		}
		return results.map ((results) => {
			return (
				<div>
					<h1>Finding your hangoutspot within the blink of an eye</h1><br>
					<h1>Your match:</h1><br>
					<h1 key={results}>{results}📍</h1>
				</div>
			)
		});
	}
}


export default Result;