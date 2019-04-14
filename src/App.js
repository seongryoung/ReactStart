import React, { Component } from 'react';

class Subject extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </div>
    );
  }
}

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

class App extends Component {
  state = {
    selected_content_id : 1,
    contents : [
      {id:1, title:'HTML', desc: "html is for information"},
      {id:2, title:'CSS', desc: "CSS is for design"},
      {id:3, title:'REACT', desc: "REACT is for interaction"}
    ]
  }
  getSelectedContent(){
    for(var i = 0 ; i < this.state.contents.length ; i ++){
      var data = this.state.contents[i];
      if(this.state.selected_content_id === data.id){
        return data;
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title='WEB' sub='World wide web'></Subject>

        <TOC onSelect={function(id){
          console.log('App', id);
          this.setState({
            selected_content_id : id
          })
        }.bind(this)} data={this.state.contents}></TOC>

        <Contents data={this.getSelectedContent()}></Contents>
        
      </div>
    );
  }
}

export default App;
