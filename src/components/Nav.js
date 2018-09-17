import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

const menus = [
    {
        to: '/',
        name: 'ABOUT',
        exact: true
    },
    {
        to: '/experience',
        name: 'EXPERIENCE',
        exact: false
    },
    {
        to: '/education',
        name: 'EDUCATION',
        exact: false
    },
    {
        to: '/skill',
        name: 'SKILLS',
        exact: false
    },
    {
        to: '/interest',
        name: 'INTEREST',
        exact: false
    }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
			let active = match ? 'active' : ''
            return (
                <li className={'nav-item ' + active} >
                    <Link className="nav-link" to={to}>{label}</Link>
                </li>
			)			
        }} />
    )
}

class Nav extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top sideNav">
					<div className="text-font">
						<img className="img-fluid img-profile rounded-circle mx-auto mb-2 avt" alt="" src="https://static.topcv.vn/avatars/IXYHq3CymQGDJ2IUVxNN_5b3cd402814ba_cvtpl.jpg?1533132459" />
						<ul >
							{this.showMenus(menus)}
						</ul>
					</div>
				</nav>				
			</React.Fragment>
		)
	}

	showMenus = menus => {
        let result = null
        if(menus.length > 0){
            result = menus.map((menu, index)=>{
                return (<MenuLink label={menu.name} activeOnlyWhenExact={menu.exact} key={index} to={menu.to}/>)
            })
        }
        return result
	}
	
}

export default Nav
