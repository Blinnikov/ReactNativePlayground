import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Button from 'apsl-react-native-button';
import { Sae } from 'react-native-textinput-effects';
import * as firebase from 'firebase';

import SignUp from './SignUp';
import AccountContainer from './AccountContainer';

import Styles from '../../Styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }

  async login() {
    this.setState({
      loaded: false
    });

    try {
      const { email, password } = this.state;
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigator.push({
        component: AccountContainer
      });
    } catch (e) {
      alert(e.message);
    } finally {
      this.setState({
        loaded: true
      });
    }
  }

  goToSignUp() {
    this.props.navigator.push({
      component: SignUp
    })
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.body}>
          <Sae
            label={'Email Address'}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconColor={'#3498db'}
            labelStyle={{color: 'rgba(0, 0, 0, 0.5)'}}
            inputStyle={{color: 'black'}}
            onChangeText={email => this.setState({email})}
            autoCapitalize="none"
          />
          <Sae
            label={'Password'}
            iconClass={FontAwesomeIcon}
            iconName={'key'}
            iconColor={'#3498db'}
            labelStyle={{color: 'rgba(0, 0, 0, 0.5)'}}
            inputStyle={{color: 'black'}}
            onChangeText={password => this.setState({password})}
            password={true}
            autoCapitalize="none"
          />
          <Button
            onPress={this.login.bind(this)}
            style={Styles.buttonPrimary}
            textStyle={Styles.buttonPrimaryText}
          >
            Login
          </Button>
          <Button
            onPress={this.goToSignUp.bind(this)}
            style={Styles.buttonDefault}
            textStyle={Styles.buttonDefaultText}
          >
            New here?
          </Button>
        </View>
      </View>
    );
  }
}

export default Login;