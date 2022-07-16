import React from "react";
import MyBytton from "../content/MyButton";

const FirstPage = () => {

    return (
        <section className="first-section">
        <div className='headline'>
        <div className="headline-text">
          <span>Новокузнечный переулок 4/1</span>
          <span>8 (812) 123-45-67</span>
        </div>
        <div className='headline-button'>
          <MyBytton/>
          {/* <button className='headbutton'>Доставка</button>
          <button className='headbutton'>Коллекция</button>
          <button className='headbutton'>Контакты</button> */}
        </div>
        <div className='body-button'>
        <button className='body-button-center'>ВИННАЯ КАРТА</button>
        <button className='body-button-center'>ДЕГУСТАЦИЯ</button>
        </div>
        </div>
        </section>
    )
}

export default FirstPage;