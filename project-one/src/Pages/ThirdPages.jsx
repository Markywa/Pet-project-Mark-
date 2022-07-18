import React from "react";
import pic1 from '../Pages/Rectangle 11.png'
import pic2 from '../Pages/Rectangle 12.png'
import pic3 from '../Pages/Rectangle 13.png'

function ThirdPages() {


    return (
<section className='bodysecond-area2'>
      <hr className='bodysecond-area2-line'/>
        <div className='bodysecond'>
          <div className='bodysecond-area2-leftbox'>
          <span className='leftbox-collection'> Новинки коллекции</span>
          <h2 className='leftbox-headname'>Март 1980 <br/>
           Урожай Марселя</h2>
           <hr className='leftbox-line'/>
           <span className='leftbox-uppertable'>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Feugiat enim 
            tortor in hac id imperdiet adipiscing. 
            Pellentesque nisi, mi sit non sit sed fermentum. 
            Felis adipiscing morbi sodales ac. </span>
            <table className='leftbox-table'>
              <tr>
                <td className='table-noneline'>1980</td>
                <td className='table-noneline2'><p className='table-uptext'>Colli Euganei Bianco Ca' Lustra 1980</p>
                <p className='table-downtext'>Красочная бутылка вина из Марселя</p>
                </td>
              </tr>
              <tr>
                <td className='table-noneline3' >1980</td>
                <td className='table-noneline4'><p className='table-uptext'>Colli Euganei Bianco Ca' Lustra 1980</p>
                <p className='table-downtext'>Красочная бутылка вина из Марселя</p></td>
              </tr>
              <tr>
                <td className='table-noneline5'>1980</td>
                <td className='table-noneline6'><p className='table-uptext'>Colli Euganei Bianco Ca' Lustra 1980</p>
                <p className='table-downtext'>Красочная бутылка вина из Марселя</p></td>
              </tr>
            </table>
            <span className='leftbox-undertable_text'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Feugiat enim tortor in hac 
              id imperdiet adipiscing. Pellentesque nisi, 
              mi sit non sit sed fermentum. Felis adipiscing 
              morbi sodales ac. </span>
              <button className='leftbox-undertable_button'>УЗНАТЬ ПОДРОБНЕЕ</button>
          </div>
          
        <div className='bodysecond-area2-rightbox'>
         <div className='rightbox-headpic'>
          <img src={pic1} alt={pic1} className="Rectandle11"></img>
        </div>
        <div className='rightbox-wrap'>
          <img src={pic2} alt={pic2} className="Rectandle12"></img>
          <img src={pic3} alt={pic3} className="Rectandle13"></img>
        </div>
      </div>
      </div>
      <hr className='bodysecond-area2-line'/>
    </section>
    )
}

export default ThirdPages