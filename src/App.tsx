import React, {useState} from 'react';
import './App.css';
import { Message } from "./components/Message";
import {Activities, TasksType} from "./components/Activities"
import {v1} from "uuid";
import {List, NamesType} from "./components/List";


export type FilterValuesType = "all" | "low" | "middle" | "hight";




function App() {

    let [names,setNames ] = useState<Array<NamesType>>(
        []);


    function addName(value:string) {
        let newName = {id:v1(), name: value};
        let newNames = [newName, ...names];
        setNames(newNames)
    }

    function removeNames(id:string) {
        let filteredNames = names.filter( el => el.id !== id)
        setNames(filteredNames);
    }

    function greeting(value:string) {
        alert("Welcome  " + value + " !!!" )
    }






  let [activities, setActivity] = useState<Array<TasksType>>([
    { id: v1(), n: "job",scale:6 },
    { id: v1(), n: "party",scale:6 },
    { id: v1(), n: "games", scale:2 },
    { id: v1(), n: "react", scale: 10 },
    { id: v1(), n: "html", scale: 5 },
    { id: v1(), n: "js", scale: 8 },
    { id: v1(), n: "family",scale: 10 },
  ]);

  let [filter, setFiler] = useState<FilterValuesType>("all")

   function removeActivity(id:string) {
     let filteredActivities = activities.filter( a => a.id !== id)
     setActivity(filteredActivities)
   }

   function changeFilter(value:FilterValuesType) {
    setFiler(value);
   }


   let activitiesForActivities = activities;
   if (filter === "low") {
     activitiesForActivities = activities.filter( a => a.scale >= 0 && a.scale <=3 );
   }
   if (filter === "middle") {
     activitiesForActivities = activities.filter( a => a.scale >= 4 && a.scale <=6 );
   }
   if (filter === "hight") {
     activitiesForActivities = activities.filter( a => a.scale >= 7 && a.scale <=10 );
   }

  return (
    <div className="App">
     <div className={"Activity"}>
      <Activities activities={activitiesForActivities}
                  removeActivity = {removeActivity}
                  changeFilter={changeFilter}
      />
     </div>
      <div>
          <List  names={names}
                 removeNames={removeNames}
                 addName={addName}
                 greeting={greeting}
          />



        <Message
            name="Valerian Ehret"
                 text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit
    lobortis nisl ut aliquip ex ea commodo consequat."
                 time="12:05"
        />
      </div>
    </div>
  );
}

export default App
