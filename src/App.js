/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Nav from './components/Navbar/Navbar';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogContainer from './components/Dialog/DialogContainer';
import UsersContainer from "./components/User/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (

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
                        <Route path='/login' render={() => <LoginPage/>}/>

                    </div>
                </div>

        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
