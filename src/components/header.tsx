import { useState } from 'react';
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg'; 

const Header = () => {
    const [isMoon, setIsMoon] = useState(true); 

    const switching = () => {
        setIsMoon(!isMoon); 
        document.body.classList.toggle("back")
    };

    return (
        <>
            <div className="todo">
                <div>
                    <h1>TODO</h1>
                </div>
                <div>
                    <img
                        src={isMoon ? moon : sun} 
                        alt=""
                        style={{ color: 'black' }}
                        id='changes'
                        onClick={switching}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
