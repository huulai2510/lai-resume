import React, { Component } from 'react';

class Experience extends Component {
	render() {
		return (
			<React.Fragment>
                <main className="float-right d-flex">		
					<div className="my-auto ml-5 w-100">
						<h1 className='text-font'><span className='text-success'>resume: </span><a href='https://lairesume.herokuapp.com/' className='text-primary'>link heroku</a></h1>
						<h5 className='mb-4'><i className="fas fa-play"></i> Some skills work with react-router-dom and bootstrap </h5>
						<h1 className='text-font'><span className='text-success'>shopcart: </span><a href='https://laishop.herokuapp.com/' className='text-primary'>link heroku</a></h1>
						<h5 className='mb-4'><i className="fas fa-play"></i> Describe my ability to work with redux and local storage, using redux devtool to check data flow </h5>
						<h1 className='text-font'><span className='text-success'>todolist-redux: </span><a href='hhttps://laitodolist-redux.herokuapp.com/' className='text-primary'>link heroku</a></h1>
						<h5 className='mb-4'><i className="fas fa-play"></i> Describe my ability to work with redux, router params, using redux devtool to check data flow </h5>
						<h1 className='text-font'><span className='text-success'>todolist-api: </span><a href='https://github.com/huulai2510/todolist-api' className='text-primary'>link github</a></h1>
						<h5 className='mb-4'><i className="fas fa-play"></i> Describe my ability to work with redux, api</h5>
					</div>					
                </main>	
			</React.Fragment>
		);
	}
}

export default Experience;