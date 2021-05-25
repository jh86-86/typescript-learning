import React from "react";
import {IState as IProps} from '../App'; //bringing the interface down from App



//{ people }:IProps

const List: React.FC<IProps> = ({people}) => { //tells it that it is a react app

console.log(people);

const renderList = (): JSX.Element[] => { //returning an array of JSX elements
    return people.map((person)=>{
        return(   //needs this return in type script
        <li className="List">  
            <div className="List-header">
                <img className="List-img" src={person.img} alt="a person"/>
                <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            <p className="List-note">{person.note}</p>
        </li>
        );
    })
}



    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;