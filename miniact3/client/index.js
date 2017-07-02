import React from 'react';
import ReactDOM from 'react-dom';

class DaleReact extends React.Component {
  render() {
    return <div>{ this.props.app } listo en React!</div>;
  }
}

ReactDOM.render(<DaleReact app="Miniact" />, document.getElementById( 'miniact' ) );