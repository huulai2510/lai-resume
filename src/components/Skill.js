import React, { Component } from 'react';

class Skill extends Component {
	render() {
		return (
			<React.Fragment>
				<main className="float-right d-flex">
					<div className="my-auto ml-5 text-font">
						<h1 className="name mb-3 text-success">SKILLS</h1>
						<div className="subheading mb-3 text-muted">PROGRAMMING LANGUAGES & TOOLS</div>
						<ul className="list-inline list-icons">
							<li className="list-inline-item">
								<a href="">
									<img src="https://cdn.iconscout.com/public/images/icon/free/png-512/html5-logo-341eda6a9876c66d-512x512.png" alt="" className="icon" />
								</a>
							</li>
							<li className="list-inline-item">
								<a href="">
									<img src="https://png.icons8.com/color/1600/css3.png" alt="" className="icon" />
								</a>
							</li>
							<li className="list-inline-item">
								<a href="">
									<img src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png" alt="" className="icon" />
								</a>
							</li>
							<li className="list-inline-item">
								<a href="">
									<img src="http://www.free-icons-download.net/images/jquery-icons-17842.png" alt="" className="icon" />
								</a>
							</li>
							<li className="list-inline-item">
								<a href="">
									<img src="https://cdn.freebiesupply.com/logos/large/2x/bootstrap-icon-logo-png-transparent.png" alt="" className="icon" />
								</a>
							</li>
							<li className="list-inline-item">
								<a href="">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeHBMBxfjrQPpqzdF9TN-mX34UWLS9nmEiPClDXs4ixffmZ3B" alt="" className="icon" />
								</a>
							</li>
							<li className="list-inline-item">
								<a href="">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMdkkSG_dhfQLXw9sYDdU1Bj7Dyup4cfyr5UCDpSBL9d-yr_p" alt="" className="icon" />
								</a>
							</li>
						</ul>
						<div className="subheading mb-3 text-muted">worked tools & service</div>
						<ul className="mt-2 ml-4 text-muted list-circle">
							<li>IDE: Sublime Text, Visual Studio Code</li>
							<li>API: Mockapi, Json Server</li>
							<li>GitHub</li>
							<li>Heroku</li>
						</ul>
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default Skill;