import React, { Component } from 'react';


class Contents extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.data.title}</h2>
        {this.props.data.desc}
      </article>
    );
  }
}

export default Contents