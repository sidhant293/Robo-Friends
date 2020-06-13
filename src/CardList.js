import React from 'react';
import Card from './Card';

const CardList = ({Robots}) => {

    const cardComponent= Robots.map((user,i)=>{
        return (<Card key={Robots[i].id} 
            id={Robots[i].id} 
            name={Robots[i].name} 
            email={Robots[i].email} />);
    }
    );

    return (
        <div>{cardComponent}</div>
    );
}
export default CardList;