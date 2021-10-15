/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Nav from './components/Navbar/Navbar';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogContainer from './components/Dialog/DialogContainer';
import UsersContainer from "./components/User/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < HeaderContainer/>
                < Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/setting' component={Setting}/>
                    <Route path='/friends' render={() => <Friends/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
