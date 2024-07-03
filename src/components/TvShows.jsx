import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const TvShows = () => (

    <>
    <div className='tv-shows d-flex'>
      <BrowserRouter>
            <div className='d-flex ms-3'>
    <h2>TV Shows</h2>
    <Dropdown className='ms-3'>
      <Dropdown.Toggle variant="dark"  id="dropdown-basic">
        Genres
      </Dropdown.Toggle>
      <Dropdown.Menu data-bs-theme="dark">
            <Dropdown.Item href="#/action-2" className='bg-black'>Action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Science Fiction</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Romatic</Dropdown.Item>
        
      </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="ms-auto d-flex flex-row align-items-center">
                
          <Image
            src="/assets/bars-solid.svg"
            alt="search"
            style={{ height: '1.2rem' }}
            id="search-icon"
            className="me-3"
          />
          <Image
            src="/assets/ellipsis-solid.svg"
            alt="notification menu"
            style={{ height: '1.2rem' }}
            id="notification"
            className="me-3"
          />
        </div>
      </BrowserRouter>
    </div>
    
    </>

)

export default TvShows;