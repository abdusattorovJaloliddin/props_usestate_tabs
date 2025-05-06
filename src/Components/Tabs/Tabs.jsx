import './Tabs.css';
import { useState } from 'react';

function Tabs() {
    const [number , setNumber] = useState(1);
    const changeImage = (num) => {
        setNumber(num);
    }
  return (
    <div className="tabs">
        <div className="container">
            <div className="tabs-container">

                <div className="tabs-left">
                    <button onClick={() => changeImage(1)} className='tabs-btn'>Card 1</button>
                    <button onClick={() => changeImage(2)} className='tabs-btn'>Card 2</button>
                    <button onClick={() => changeImage(3)} className='tabs-btn'>Card 3</button>
                    <button onClick={() => changeImage(4)} className='tabs-btn'>Card 4</button>
                </div>

                <div className="tabs-center">
                    {number === 1 && <img src="https://picsum.photos/id/2/200/300" alt=""  className='tabs-img'/>}
                    {number === 2 && <img src="https://picsum.photos/id/10/200/300" alt="" className='tabs-img' />}
                    {number === 3 && <img src="https://picsum.photos/id/7/200/300" alt=""  className='tabs-img'/>}
                    {number === 4 && <img src="https://picsum.photos/id/20/200/300" alt="" className='tabs-img' />}
                </div>

                <div className="tabs-right">
                    {number === 1 && <p className='tabs-text'>Bu yerda birinchi tabs karta ma'lumotlari</p> }
                    {number === 2 && <p className='tabs-text'>Bu yerda ikkinchi tabs karta ma'lumotlari</p> }
                    {number === 3 && <p className='tabs-text'>Bu yerda uchinchi tabs karta ma'lumotlari</p> }
                    {number === 4 && <p className='tabs-text'>Bu yerda to'rtinchi tabs karta ma'lumotlari</p> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabs