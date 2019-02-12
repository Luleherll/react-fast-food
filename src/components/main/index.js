import React from 'react';

export default class Main extends React.Component {

  render () {
    const {isLogin, inputName, handleSubmit, handleChange} = this.props;
    return (
      <div className='row'>
        <form id="submit" className="col s12 m5 transparent space" onSubmit={handleSubmit}>
          {
            !isLogin ?
              <div className='scale-transition scale-in'><div className="input-field col s12 m6">
                <input
                  onChange={handleChange('email')}
                  required
                  placeholder="john@example.com" id="email" type="email" className="validate" />
              </div>
              <div className="input-field col s12 m6">
                <input
                  required
                  onChange={handleChange('username')}
                  placeholder="username" id="username" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <input
                  required
                  onChange={handleChange('key_point')}
                  placeholder="key point" id="keyPoint" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <input
                  required
                  onChange={handleChange('location')}
                  placeholder="location" id="location" type="text" className="validate" />
              </div></div>
              : <div className='space'></div>
          }
          <div className="input-field col s9">
            <input
              required
              placeholder={inputName}
              onChange={handleChange(inputName)}
              id="username"
              type="text"
            />
          </div>
          <div className="input-field col s9">
            <input
              required
              onChange={handleChange('password')}
              placeholder="password"
              id="password"
              type="password" />
          </div>
          <div className="input-field col offset-s4">

          </div>
          <div className="input-field col offset-s4">
            <button 
              required
              type="submit"
              className="waves-effect waves-light btn-large amber darken-3">SUBMIT</button>
          </div>
        </form>
        <div className="sp-container">
          <div className="sp-content">
            <div className="sp-globe"></div>
            <h5 className="frame-1">Hunger can</h5>
            <h5 className="frame-2">not wait</h5>
            <h5 className="frame-3">We</h5>
            <h5 className="frame-4">have</h5>
            <h5 className="frame-5">
              <span>Chicken,</span>
              <span>burgers,</span>
              <span>and more.</span>
            </h5>
            <a className="sp-circle-link" href="/">Order Now</a>
          </div>
        </div>
      </div>
    );
  }
}
