import './App.css';
import Costs from "./companents/UI/Costs";
import NewCost from "./companents/NewCost/NewCost";
import React,{useState} from 'react';



const INITIAL_COSTS = [
  {
    id:"c1",
    date: new Date(2021,2,12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id:"c2",
    date: new Date(2021,1,16),
    description: "Телевизор",
    amount: 88.99,
  },
  {
    id:"c3",
    date: new Date(2020,2,12),
    description: "стул",
    amount: 9.99,
  },
  {
    id:"c4",
    date: new Date(2020,2,14),
    description: "марковка",
    amount: 1.99,
  }
]


function App() {

  const [costs,setCosts] = useState(INITIAL_COSTS);

  const addCostsHandler = (cost) =>{
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    })
  }

  return (
  <div>
    <NewCost onAddCost = {addCostsHandler}/>
    <Costs costs = {costs}/>
  </div>
  );
}

export default App;
