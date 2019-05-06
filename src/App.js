import React, { Component } from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Contents from "./components/Contents";




class App extends Component {
  state = {
    mode : 'welcome',
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

  getConetentComponent(){
    if(this.state === 'read'){
      return <Contents data={this.getSelectedContent()}></Contents>
    }else if(this.state === 'welcome'){
      return <Contents data={{
        title : 'welcome',
        mode : 'read'
      }}></Contents>
    }
    
  }

  render() {
    return (
      <div className="App">
        <Subject onClick={function(){
          this.setState({mode : 'Weclome'})
        }.bind(this)} title='WEB' sub='World wide web'></Subject>

        

        <TOC onSelect={function(id){
          console.log('App', id);
          this.setState({//이렇게 해줘야 리액트가 일을한다.
            selected_content_id : id
          })
        }.bind(this)} data={this.state.contents}></TOC>

        <Contents data={this.getSelectedContent()}></Contents>
        
      </div>
    );
  }
}

export default App;
// Sever Start : npm start; 테스트 할때
// npm run build : 배포시 이걸로 빌드해서 배포해야함 배포해야함
// 실행법 : npx serve -s build (npx : 패키지 설치후 실행한뒤 설치한패키지 삭제)
