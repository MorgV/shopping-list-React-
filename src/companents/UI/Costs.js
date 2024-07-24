import CostItem from "../Costs/CostItem";
import "./Costs.css"
import Card from "./Card";
import CostsFilter from "../Costs/CostsFilter";
import React, {useState} from "react";
import CostsList from "../Costs/CostsList";
import CostsDiagram from "../Costs/CostsDiagram";

function Costs(props){

    const costs = props.costs;

    const [selectedYear,setSelectedYear] = useState("2022");

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter(cost => 
    {
        return cost.date.getFullYear().toString() === selectedYear; 
    })

    
    return (
    <Card className="costs">

    <CostsFilter year = {selectedYear} onYearChangeHandler = {yearChangeHandler}></CostsFilter>
    <CostsDiagram costs = {filteredCosts} />
    <CostsList costs = {filteredCosts}></CostsList>
   
    </Card>
    );
}

export default Costs;
