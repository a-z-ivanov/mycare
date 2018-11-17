// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
	apiKey: 'AIzaSyC_DSM1JYnDYEREF2PkmDGqYsLIuOrpG9M',
	authDomain: 'mycare-3992d.firebaseapp.com',
	databaseURL: 'https://mycare-3992d.firebaseio.com',
	projectId: 'mycare-3992d',
	storageBucket: 'mycare-3992d.appspot.com',
	messagingSenderId: '435806543784'
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /search after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: '/search',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.FacebookAuthProvider.PROVIDER_ID
	]
};

export default class SignInScreen extends React.Component {
	render() {
		return (
			<div>
				<h1>MyCare</h1>
				<p>Please sign-in</p>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			</div>
		);
	}
}