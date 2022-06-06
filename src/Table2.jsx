import React, { useState } from 'react';

const Table2 =()=>{


 const toppings = [
        {
          name: "Capsicum",
          price: 2.0
        },
        {
          name: "Paneer",
          price: 2.0
        },
        {
          name: "Red Paprika",
          price: 3.0
        },
        {
          name: "Onions",
          price: 3.0
        },
        {
          name: "Extra Cheese",
          price: 4.0
        },
        {
          name: "Baby Corns",
          price: 3.0
        },
        {
          name: "Mushroom",
          price: 2.0
        }
      ];

      const [checkedState,setCheckedState] = useState(new Array(toppings.length).fill(false));
      const [price,setPrice] = useState(0);

const handleChange =(position)=>{
    const newCheckedState = checkedState.map((item,Index)=>{
        return Index === position ? !item : item;
    })
    setCheckedState(newCheckedState);

    const totalPrice = newCheckedState.reduce((sum,currentState,Index)=>{
          if(currentState === true){
             return sum = sum + toppings[Index].price;
          }
          return sum;
    },0);

    setPrice(totalPrice)
}
    return(
        <div style={{width:"290px",margin:"auto"}}>
            <h1>Select toppings</h1>
            {
                toppings.map((item,Index)=>{
                   
                   return( 
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                type="checkbox"
                                checked={checkedState[Index]}
                                onChange={()=>handleChange(Index)}
                                 />
                            </td>
                            <td>
                               <span style={{margin:"50px"}}>{item.name}</span>
                            </td>
                            <td>
                                <span>{item.price}</span>
                            </td>
                            
                        </tr>
                    </tbody>
                   )
                })
            }

            <div style={{textAlign:"center",marginTop:"20px"}}>
                <span>Total :</span>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default Table2;