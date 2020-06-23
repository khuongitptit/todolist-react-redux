import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';


class App extends React.Component{
//   constructor(props){
//       super(props);
//       this.state={
//           listTask:[
//               {
//                   id:0,
//                   name:"Ngủ dậy",
//                   isDone:false
//               }
//           ],
//           taskText:""
//       };
//       this.inputElement = React.createRef();
//   }

  handleTextChange = taskText => {
      this.setState({
          taskText: taskText
      });
  }
//   handleAddTask = taskText => {
//       if(this.state.taskText==""){
//           alert("Bạn chưa nhập gì cả");
//       }
//       else{
//           let check = 0;
//           this.state.listTask.forEach(task => {
//               if(task.name===this.state.taskText) check++;
//           });
//           if(check){
//               alert("Công việc này đã được thêm từ trước rồi");
//           }
//           else{
//               let listTask = [];
//               this.state.listTask.forEach(task => {
//                   listTask.push(task);
//               });
//               let newtask = { 
//                   id: randomId(),
//                   name : this.state.taskText,
//                   isDone:false
//               };
//               console.log(newtask);
//               listTask.push(newtask);
//               localStorage.setItem("tasks",JSON.stringify(listTask));
//               let getListTask = JSON.parse(localStorage.getItem("tasks"));
//               this.setState({ listTask : getListTask});
//               this.setState({ taskText : "" });
//           }
//       }
      
//       this.setFocusOnInput();
      
//   }

  handleDoneClick = id => {
      let listTask = this.state.listTask;
      listTask.forEach(task => {
          if(task.id===id){
              task.isDone=true;
          }
      });
      this.setState({listTask : listTask});
      //this.setFocusOnInput();
  }
  handleDeleteClick = id => {
      console.log(id);
      let index = -1;
      let listTask = this.state.listTask;
      listTask.forEach(task => {
          if(task.id===id) index = listTask.indexOf(task);
      });
      listTask.splice(index,1);
      console.log(listTask);
      this.setState({listTask : listTask});
      //this.setFocusOnInput();
  }

//   setFocusOnInput = () => {
//       this.inputElement.current.focus();
//   }
  render(){
      return (
          <div className="container">
              <AddTask 
                  //onTextChange={this.handleTextChange}
                  //handleAddClick={this.handleAddTask}
                  //taskText={this.state.taskText}
                  //inputRef={this.inputElement}
              />
              <ListTask 
                  //listTask={this.state.listTask}
                  //onDoneClick={this.handleDoneClick}
                  //onDeleteClick={this.handleDeleteClick}
              />
          </div>
      );
  }
  
}

export default App;
