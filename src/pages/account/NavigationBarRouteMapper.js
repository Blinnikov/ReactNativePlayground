import React from 'react';
import { Text, View,  StyleSheet, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/Ionicons';

import NavBarStyles from '../../styles/NavigationBar';

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={NavBarStyles.navBarLeftButton}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name='ios-arrow-back'
            style={[NavBarStyles.navBarButtonText, NavBarStyles.navBarButtonIcon]}
          />
          <Text style={[NavBarStyles.navBarText, NavBarStyles.navBarButtonText]}>
            {' '}{I18n.t('words.form.backButton')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  RightButton: (route, navigator, index, navState) => {
    return null;
  },

  Title: (route, navigator, index, navState) => {
    return (
      <Text style={[NavBarStyles.navBarText, NavBarStyles.navBarTitleText]}>
        {route.title || route.component.name}
      </Text>
    );
  },
};

export default NavigationBarRouteMapper;