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
			return <p>Nee, you are too picky. No results found. 😭</p>
		}
		return results.map ((results) => {
			return (
					<p key={results}>{results}📍</p>
			)
		});
	}
}


export default Result;