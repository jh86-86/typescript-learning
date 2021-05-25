import React, {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';
import LebronPic from './pictures/download.jpeg'


export interface IState{
  people:{
    name: string
    age: number
    img: string
    note?: string
  }[]
}

function App() {

  //never means typescript has no idea what is data type

  // const [people1, setPeople1] = useState <{age: number, name :string}[]> ([]);
  //defines the data, don't usually define datattype in complex objects,make interface



// const [peeps3, setPeeps3] = useState <IState["peeps"]>([]);
// //implements the above interface

const [people,setPeople]=useState <IState["people"]>([
  {
    name:"Lebron James",
    img:LebronPic,
    age:36,
    note: "allergic to same team"
  }
]);  




  return (
    <div className="App">
      <h1>People Invited to Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
