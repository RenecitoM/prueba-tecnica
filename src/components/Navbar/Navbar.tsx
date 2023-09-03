import React, { useState } from 'react';
import Payment from '../Payment/Payment';

const Navbarstep = () => {
    
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    return (
        <div>
            <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                <div className="bg-dark p-4">
                    <h5 className="text-body-emphasis h4">This is my technical test, I hope you like it ❤</h5>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button className="navbar-brand btn bg-light" onClick={()=>{handleOpenModal()}}>
                    <svg className="a-center" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                        </svg>
                        <span className='text-black mx-2'>Shopping cart</span>
                    </button>
                </div>
            </nav>
            {showModal && (
          <Payment onClose={handleCloseModal} />
        )}
        </div>
        
    )
}

export default Navbarstep;

