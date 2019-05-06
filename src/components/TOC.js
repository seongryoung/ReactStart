import React, { Component } from 'react';

class TOC extends Component{
  render(){
    
    var list = [];
    var i = 0;
    while(i < this.props.data.length){
      var data = this.props.data[i]
      list.push(
        <li key={data.id}>
          <a href={data.id + '.html'} onClick={function(id, ev){
            ev.preventDefault();
            this.props.onSelect(id);
          }.bind(this, data.id)}>
            {data.title
          }</a>
        </li>
      );
      i++;
    }

    return(
      <nav>
        <ol>
          {list}
        </ol>
      </nav>
    );
  }
}

export default TOC;