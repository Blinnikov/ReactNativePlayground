import React, { Component, PropTypes } from 'react';
import { Image, View } from 'react-native';
import { authentication } from 'allora-core';
import { FormInput } from 'react-native-elements';
import I18n from 'react-native-i18n';
import { Button } from 'react-native-elements';

import CommonStyles from '../../styles/Common';
import PageStyles from './Login.Styles';

// TODO: For iPhone Plus - LogoBig, for others - Logo
const logoImg = require('../../img/LogoBig.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  async login() {
    try {
      const { email, password } = this.state;
      await authentication.login(email, password);
    } catch (e) {
      alert(e.message);
    }
  }

  goToSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={[CommonStyles.pageContainer, PageStyles.loginPageContainer]}>
        <Image style={PageStyles.logoBig} source={logoImg} />
        <FormInput
          value={this.state.email}
          autoCapitalize="none"
          containerStyle={PageStyles.inputContainer}
          inputStyle={PageStyles.input}
          onChangeText={email => this.setState({ email })}
          placeholder={I18n.t('auth.login.email')}
          keyboardType='email-address'
        />
        <FormInput
          value={this.state.password}
          autoCapitalize="none"
          containerStyle={PageStyles.inputContainer}
          inputStyle={PageStyles.input}
          onChangeText={password => this.setState({ password })}
          placeholder={I18n.t('auth.login.password')}
          secureTextEntry
        />
        <Button
          title={I18n.t('auth.login.loginButton')}
          onPress={this.login.bind(this)}
          buttonStyle={[CommonStyles.buttonPrimary, CommonStyles.buttonLogin]}
          textStyle={CommonStyles.buttonPrimaryText}
        />
        <Button
          title={I18n.t('auth.login.goToSignUp')}
          onPress={this.goToSignUp.bind(this)}
          buttonStyle={[CommonStyles.buttonDefault, CommonStyles.buttonLogin]}
          textStyle={CommonStyles.buttonDefaultText}
        />
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
