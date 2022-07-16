import React, { useState } from "react";


const MyBytton = () => {
    const butName  = [{ name: "Каталог", id: "1"},
        { name: 'Доставка', id: '2'},
        { name: 'Коллекция', id: '3'},
        { name: 'Контакты', id: '4'}]
        console.log(butName);
    // const [text, setText] = useState()
    // const qwer = (props) => {
       const Mybutton = butName.map(function(butName) {
        return <div key={butName.id}>
            <button className='headbutton'>{butName.name}</button>
        </div>
       });
    // const newText = {
    //     id: Date.now,
    //     text,
    // }
//     function btutton(props) {
//   return <button>{props.name}</button>
//  }}
    return (
        <div className='headline-button'>
    {Mybutton}
    </div>
    )
}

export default MyBytton;


