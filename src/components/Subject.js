import React, { Component } from 'react';

class Subject extends Component{
  render(){
    return(
      <div className='subject'>
        <h1><a href="/" onClick={function(ev){
          ev.preventDefault();
          this.props.onClick();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </div>
    );
  }
}

export default Subject;