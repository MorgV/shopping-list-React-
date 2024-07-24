

function CostDate(props){
    const month = props.date.toLocaleString('ru-RU', {month: "long"});

    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("ru-RU", {day: "2-digit"});
    return( 
    <div className="cost-item__date">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div>
    );
}

export default CostDate;