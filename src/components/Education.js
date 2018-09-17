import React, { Component } from 'react';

class Education extends Component {
	render() {
		return (
			<React.Fragment>
                <main className="float-right d-flex">		
					<div className="my-auto ml-5 text-font">
						<h1 className="name mb-5 text-primary">EDUCATION</h1>
						<div className="resume-item d-flex flex-column flex-md-row mb-5 edu-time">
							<div className="resume-content mr-auto">
								<h3 className="mb-1">FUNIX ONLINE UNIVERSITY</h3>
								<div className="subheading mb-3">CERTIFICATE 1: DIGITAL PASSPORT</div>
							</div>
							<div className="resume-date text-md-right">
								<span className="text-danger">MATCH 2018</span>
							</div>
						</div>
						<div className="resume-item d-flex flex-column flex-md-row mb-5 edu-time">
							<div className="resume-content mr-auto">
								<h3 className="mb-1">HỌC VỚI CHUYÊN GIA</h3>
								<div className="subheading">FRONT-END</div>
								<div className="subheading mb-3">REACT</div>
							</div>
							<div className="resume-date text-md-right">
								<span className="text-danger">APRIL 2018</span>
							</div>
						</div>
					</div>
                </main>		
			</React.Fragment>
		);
	}
}

export default Education;