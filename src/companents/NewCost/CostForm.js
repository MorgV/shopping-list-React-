import React, { useState } from 'react';
import CostDate from '../Costs/CostDate';
import './CostForm.css'

function CostForm(props){

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");


    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        
        const costData = {
            description: name,
            amount: amount,
            date: new Date(date),
        }

        console.log(costData.date);

        props.onSaveCosData(costData);

        setName("");
        setAmount("");
        setDate("");
        
    }

    return (
        <form>  
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type='text' onChange={nameChangeHandler} value={name} />
                </div>

                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type='text' onChange={amountChangeHandler} value={amount} />
                </div>

                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type='date' min='2020-11-09' step='2023-11-09' onChange={dateChangeHandler} value={date} />
                </div>

                <div className="new-cost__action">
                    <button type="submit" onClick={submitHandler}>Добавить Расходы</button>
                    <button type='button' onClick={props.onCancel}>Отмена</button>
                </div>
            </div>
        </form>
    );
}

export default CostForm;