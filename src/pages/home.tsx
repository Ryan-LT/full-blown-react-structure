import React, { FunctionComponent } from 'react';
import './styles/home.scss';

const Home: FunctionComponent = () =>
  (
    <div className="page-home">
      <div className="search-box">
        <input list="browsers" name="browser" id="browser" />
        <datalist id="browsers">
          <option label="browser" value="Edge" />
          <option label="browser" value="Firefox" />
          <option label="browser" value="Chrome" />
          <option label="browser" value="Opera" />
          <option label="browser" value="Safari" />
        </datalist>
      </div>
      <div className="data-list">
        <div className="data-item">1</div>
        <div className="data-item">2</div>
        <div className="data-item">3</div>
        <div className="data-item">4</div>
        <div className="data-item">5</div>
      </div>
    </div>
  );
export default Home;
