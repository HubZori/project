import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControls";
import {maxLenghtCreator, required} from "../../utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLenght10 = maxLenghtCreator(20)

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input}
                   validate={[required, maxLenght10]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
                   validate={[required, maxLenght10]}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
if (props.isAuth) {
    return <Redirect to={"/profile"} />
}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login})(Login);