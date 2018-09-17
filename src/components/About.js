import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<React.Fragment>
                <main className="float-right d-flex">		
					<div className="my-auto ml-5">
						<h1 className="name text-font">NGUYỄN <span className="text-primary">HỮU LAI</span></h1>
						<h3 className="mb-4"><span className='text-font'>District 9, HO CHI MINH City - (+84)97 111 2946 -</span> huulai2510@gmail.com</h3>
						<p className="mb-4 text-font">I seek challenging opportunities where I can fully use my skills for the success of the organization.</p>
						<ul className="list-inline list-social-icons mb-0">
							<li className="list-inline-item">
								<a href="https://www.facebook.com/yobboaaa">
									<img src="http://icons.iconarchive.com/icons/martz90/circle/256/fb-icon.png" alt="" className="icon"/>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="https://github.com/huulai2510">
									<img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Github_icon-icons.com_66788.png" alt="" className="icon"/>
								</a>
							</li>
						</ul>
					</div>
                </main>		
			</React.Fragment>
		);
	}
}

export default About;