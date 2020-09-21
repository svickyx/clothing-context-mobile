import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {createUserProfileDocument, auth} from '../../firebase/firebase.utils';
import {SignUpContainer, SignUpTitle} from './sign-up-style';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

   handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert('password not match')
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }catch(error){
            console.log('error', error.message)
        }
        
   };

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <SignUpContainer>
                <SignUpTitle>I don't have an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    {/* 下面這裡的name, label, value這些名字都要一樣包含大小寫 */}
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='displayName'
                    onChange = {this.handleChange}
                    required
                    />
                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    label='email'
                    onChange = {this.handleChange}
                    required
                    />
                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    label='password'
                    onChange = {this.handleChange}
                    required
                    />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='confirmPassword'
                    onChange = {this.handleChange}
                    required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;
