import React,{useState} from "react";
import "./NewCost.css";
import CostForm from "./CostForm";
import "../UI/Costs.css";
import Card from "../UI/Card";
import { Match } from "@testing-library/react";
const NewCost = (props) => {
    
    const saveCostDateHandler = (inputCostData) =>
    {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        setFormVisible(false);
        props.onAddCost(costData);
    }

    const [isFormVisible,setFormVisible] = useState(false);

    const inputCostDataHandler = () => {
        setFormVisible(true);
    }

    const cancelCostVisible = () =>{
        setFormVisible(false);
    }

    return <Card className="new-cost costs main">
         {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>}
        {isFormVisible && <CostForm onCancel ={cancelCostVisible} onSaveCosData = {saveCostDateHandler} />}
    </Card>
}

export default NewCost;