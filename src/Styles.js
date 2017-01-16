import { StyleSheet } from 'react-native';

const button = {
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 0
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    // paddingTop: 64,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  buttonDefault: {
    borderWidth: 0
  },
  buttonDefaultText: {
    color: '#2980b9',
    fontSize: 16
  },
  buttonDefaultTextDestructive: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: '500'
  },
  buttonPrimary: {
    ...button,

    borderColor: '#2980b9',
    backgroundColor: '#3498db',
  },
  buttonSuccess: {
    ...button,
    borderColor: '#27ae60',
    backgroundColor: '#2ecc71',
  },
  buttonPrimaryText: {
    color: '#FFF',
    fontSize: 18
  },
  buttonLogin: {
    marginTop: 10,
    marginBottom: 0
  },

  // Account page
  emailContaniner: {
    padding: 20
  },
  emailText: {
    fontSize: 18
  },
  buttonsRow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
});

export default Styles;