import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
  	return (
  		<div id='buttons'>
  		<button onClick={this.props.handleClick}>New Quote!</button>
  		<a class="twitter-share-button" href={`https://twitter.com/intent/tweet?text="${this.props.quote}" ~ ${this.props.author}`} target='_blank' title="Post this quote on twitter!" data-size="large">
  		Share this tweet 
  		</a>
		<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  		</div>
  		);
  }
}

export default Button;