import React from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { FaTh, FaThLarge } from 'react-icons/fa'; // Importa icone alternative da react-icons

const MyHero = () => {
  return (
    <div className="d-flex justify-content-between mb-4 ms-1 me-1">
      <div className="d-flex">
        <h2 className=" text-white">TV Shows</h2>
        <div className="btn-group" role="group">
          <Dropdown as={ButtonGroup} className="ms-4 mt-1">
            <Button 
              variant="secondary" 
              size="sm" 
            
              style={{ backgroundColor: '#221f1f' }}
            >
              Genres
            </Button>
            <Dropdown.Toggle 
              split 
              variant="secondary" 
              id="dropdown-split-basic" 
              size="sm" 
              style={{ backgroundColor: '#221f1f' }} 
            />
            <Dropdown.Menu >
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <FaTh size={24} className="icons m-2" color="white" />
        <FaThLarge size={24} className="icons m-2" color="white" />
      </div>
    </div>
  );
};

export default MyHero;

