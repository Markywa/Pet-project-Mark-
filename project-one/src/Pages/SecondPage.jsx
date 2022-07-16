import React from "react";
import logo from '../Pages/image.png'

const SecondPage = () => {
 
    return (
<section className="body-area">
       <div className='body-area-box'>
        <div className='body-area-head'>
        <h2>Лучший вкус, это вкус долголетнего вина</h2>
        </div>
        <hr className='body-area-line'/>
        <div className='body-area-text'>
<span className='area-text-color'>
  Lorem ipsum dolor sit amet, consectetur
   adipiscing elit. Feugiat enim tortor in hac 
   id imperdiet adipiscing. Pellentesque nisi, 
   mi sit non sit sed fermentum. Felis adipiscing 
   morbi sodales ac. Mauris dictumst risus pulvinar 
   blandit elit. Vestibulum quam ultrices nascetur et 
   viverra suscipit. Proin vitae aliquet leo aliquam amet 
   rutrum. Lectus auctor purus ultrices enim ultrices. 
   Augue fringilla tellus tortor orci ultrices sed. 
   Viverra cras sapien, pellentesque viverra malesuada. 
   Tellus dolor, eget vitae dignissim molestie eget sit
    duis. Vitae dui vel pretium euismod diam. 
    Pellentesque amet, lacus, amet, quis risus. 
    Pellentesque scelerisque nunc, orci aliquam quis.</span>
        </div>
        <img src={logo} alt={logo} className="logo2"/>
       </div>
     </section>
    )
}

export default SecondPage;