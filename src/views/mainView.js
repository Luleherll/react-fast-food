import React from 'react';
import {connect} from 'react-redux';
import * as AllActions from '../redux/Thunks';
import { bindActionCreators } from 'redux';
import M from 'materialize-css';
import Main from '../components/main';
import { getAllNewOrders, getAllPendingOrders, getArchivedOrders } from '../redux/actions/AllOrdersActions';
import { login, signUp, getMenu, pendingOrders, orderHistory } from '../redux/actions/UserActions';

export class HomeView extends React.Component {
    state = {
      isLogin: true,
      loader: 'hide',
      inputName: 'username',
      formName: 'Create Account',
      email: '',
      key_point: '',
      location: '',
      tel: '',
      username: '',
      password: '',
    }

    componentDidMount(){
      const user = localStorage.getItem('user');
      if(user){
        this.setState({loader: ''});
        setTimeout(() => {
          this.getUserData();
        }, 3000);
        
      }
    }
  
  navigateTo = url => this.props.history.push(url)
  
  getUserData = () =>{
    const admin = localStorage.getItem('Admin');
    const {getDataThunk} = this.props.actions;
    let data;
    let url;
    if (admin==='true') {
      data = [
        {url: 'orders/', action:getAllNewOrders},
        {url: 'orders/pending', action: getAllPendingOrders},
        {url: 'orders/archive', action:getArchivedOrders}
      ];
      url = '/admin';
    }else if(admin==='false'){
      data = [
        {url: 'menu', action: getMenu},
        {url: 'users/orders', action: pendingOrders},
        {url: 'users/history', action: orderHistory}
      ];
      url = '/user';
    }
    data.forEach(dataType => getDataThunk(dataType.url, dataType.action));
    this.navigateTo(url);
  }
  
  handleChange = param => e =>{
    e.preventDefault();
    this.setState({[param]: e.target.value });};
  signIn = (url, data, actionCreator) => {
    const { actions: { postDataThunk }} = this.props;
    postDataThunk(url, data, actionCreator, 'post');
    this.setState({loader: ''});
    setTimeout(() => {
      const error = localStorage.getItem('error');
      if(!error){
        this.getUserData();
      }else{
        this.setState({loader: 'hide'});
        M.toast({html: error, classes: 'red'});
        localStorage.removeItem('error');
      }
    }, 8000);
  }
    signupForm = () =>{
      const {isLogin, inputName, formName} = this.state;
      this.setState({
        isLogin: !isLogin,
        inputName: inputName === 'tel' ? 'username' : 'tel',
        formName: formName === 'Create Account' ? 'SignIn': 'Create Account',
      });
    }

    handleSubmit = e =>{
      e.preventDefault();
      const {isLogin, email, key_point, location, tel, username,password} = this.state;
      
      if(!isLogin){
        const data = {email, 'key point': key_point, location, tel, username, password};
        this.signIn('auth/signup', data, signUp );
      }
      setTimeout(() => {
        const error = localStorage.getItem('error');
        if(!error){
          this.signIn('auth/login', {username, password}, login );
        }else{
          this.setState({loader: 'hide'});
          M.toast({html: error, classes: 'red'});
          localStorage.removeItem('error');
        }
      }, 5000);
    }
    render () {
      const {isLogin, inputName, formName, loader} = this.state;
      const props = {
        isLogin, inputName, 
        handleSubmit: this.handleSubmit, 
        handleChange: this.handleChange,
      };
      
      return (
        <div id="home">
          <div id='overlay' className={loader}>
            <div className='container'>
              <div className="progress">
                <div className="indeterminate amber"></div>
              </div>
            </div>
          </div>
           
          <Main {...props}/>
          <div className="row">
            <div className="input-field col offset-s2">
              <button id="signup" className="waves-effect waves-light btn-large amber darken-3" onClick={this.signupForm}>
                {formName}
              </button>
            </div>
          </div>
        </div>
            
      );
    }
}

const mapStateToProps = ()=>{};
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(AllActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
