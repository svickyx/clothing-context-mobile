import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {GlobalStyle} from './global-style';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import Header from './components/header/header';
import AccountPage from './pages/account-page/account-page';
import CheckOutPage from './pages/check-out/check-out';

import {auth} from './firebase/firebase.utils';
import {createUserProfileDocument} from './firebase/firebase.utils';

import CurrentUserContext from '../src/context/current-user/current-user-context';

class App extends React.Component {
  constructor(){
    super();

      this.state = {
        currentUser: null
      }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
           this.setState ({currentUser: {
                id: snapShot.id,
                ...snapShot.data()
           }})  
          })
        }
        this.setState({currentUser: userAuth} );
    })
};

  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <GlobalStyle />
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component= {HomePage} />
          <Route  path='/shop' component= {ShopPage} />
          <Route exact path='/checkout' component= {CheckOutPage} />
          <Route exact path='/signin' render={
            ()=> this.state.currentUser ?
            (<Redirect to='/' />
            ):(
              <AccountPage />
            )
          }/>
        </Switch>
      </div>
    );
  }
}


export default App;
