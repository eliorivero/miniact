import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';

class DaleReact extends React.Component {
	constructor() {
		super();
		this.state = { items: [] };
	}
	componentWillMount() {
		fetch( `${Miniact.wpRestApi}wp/v2/posts?per_page=5` )
			.then( response => response.json() )
			.then( items => this.setState( { items } ) );
	}
	render() {
		return (
			<ul>
				{ this.state.items.map( item => <li key={ `post-${item.id}` }>{ item.title.rendered }</li> ) }
			</ul>
		);
	}
}

ReactDOM.render(<DaleReact app="Miniact" />, document.getElementById( 'miniact' ) );