import React from 'react';
import 'msg-notify/dist/notify.css';

export default class Main extends React.Component {

  render () {
    const {isLogin, inputName, handleSubmit, handleChange} = this.props;
    return (
      <div className='row'>
        <form className="col s12 m5 transparent space" onSubmit={handleSubmit}>
          {
            !isLogin ?
              <div className='scale-transition scale-in'><div className="input-field col s12 m6">
                <input
                  onChange={handleChange('email')}
                  placeholder="john@example.com" id="email" type="email" className="validate" />
              </div>
              <div className="input-field col s12 m6">
                <input
                  onChange={handleChange('username')}
                  placeholder="username" id="username" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <input
                  onChange={handleChange('key_point')}
                  placeholder="key point" id="keyPoint" type="text" className="validate" />
              </div>
              <div className="input-field col s6">
                <input
                  onChange={handleChange('location')}
                  placeholder="location" id="location" type="text" className="validate" />
              </div></div>
              : <div className='space'></div>
          }
          <div className="input-field col s9">
            <input
              placeholder={inputName}
              onChange={handleChange(inputName)}
              id="username"
              type="text"
            />
          </div>
          <div className="input-field col s9">
            <input
              onChange={handleChange('password')}
              placeholder="password"
              id="password"
              type="password" />
          </div>
          <div className="input-field col offset-s4">

          </div>
          <div className="input-field col offset-s4">
            <button 
              type="submit"
              className="waves-effect waves-light btn-large amber darken-3">SUBMIT</button>
          </div>
        </form>
      </div>
    );
  }
}
