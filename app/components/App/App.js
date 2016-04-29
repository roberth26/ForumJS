define( function( require ) {
    var $          = require( 'jquery' );
    var getData    = require( '../../services/GetData' );
    var Component  = require( 'Component' );
    var Router     = require( 'Router/Router' );
    var ThreadList = require( 'ThreadList/ThreadList' );
    var ThreadView = require( 'ThreadView/ThreadView' );
    var Login      = require( 'Login/Login' );

	return getData().then( function( data ) {
		return Component.extend({
			state: {
				isLoggedIn: false,
				username: '',
				threads: data.threads
			},
			login: function( username ) {
				this.setState({
					isLoggedIn: true,
					username: username
				});
				this.saveState();
				location.hash = '/threads'; // redirect
			},
			logout: function() {
				this.setState({
					isLoggedIn: false
				});
				this.saveState();
				location.hash = '/'; // redirect
			},
			saveState: function() {
				localStorage.setItem( 'state', JSON.stringify( this.getState() ) );
			},
			createThread: function( threadName ) {
				var threads = this.getState().threads;
				threads.push({
					"id": 400,
					"name": "THIS IS A GENERATED THREAD",
					"author": "sdkldsmksdmksd",
					"date": "Thu Apr 28 2016 20:51:13 GMT-0700 (Pacific Daylight Time)",
					"posts": [
						{
							"author": "Bill Gates",
							"date": "Thu Apr 31 2016 12:01:13 GMT-0700 (Pacific Daylight Time)",
							"content": "this is some content"
						},
						{
							"author": "Bill Gates",
							"date": "Thu Apr 31 2016 12:01:13 GMT-0700 (Pacific Daylight Time)",
							"content": "this mkdklmdslmksdks content"
						},
						{
							"author": "Bill Gates",
							"date": "Thu Apr 31 2016 12:01:13 GMT-0700 (Pacific Daylight Time)",
							"content": "miikdkld sdlknsdnklsd this is content"
						}
					]
				});
				this.setState({
					threads: threads
				});
			},
			render: function() {
				var props = this.getProps();
				var state = this.getState();
				console.log( state.threads );
				return (
					$( '<div />' ).append(
						Router({
							id: props.id + 'Router__',
							indexRoute: {
								component: Login.bind( null, {
									id: props.id + 'Router__Login__',
									isLoggedIn: state.isLoggedIn,
									onLogin: this.login,
									onLogout: this.logout
								}),
								redirect: {
									path: '/threads',
									shouldRedirect: function() {
										return state.isLoggedIn;
									}
								}
							},
							routes: [
								{
									path: '/threads',
									component: ThreadList.bind( null, {
										id: props.id + 'Router__ThreadList__',
										threads: state.threads,
										isLoggedIn: state.isLoggedIn,
										onLogout: this.logout,
										username: state.username,
										onCreateThread: this.createThread
									}),
									redirect: {
										path: '/',
										shouldRedirect: function() {
											return !state.isLoggedIn;
										}
									}
								},
								{
									path: '/threads/thread_id=',
									component: ThreadView.bind( null, {
										id: props.id + 'Router__ThreadView__',
										threads: state.threads,
										isLoggedIn: state.isLoggedIn,
										onLogout: this.logout
									}),
									redirect: {
										path: '/',
										shouldRedirect: function() {
											return !state.isLoggedIn;
										}
									}
								}
							]
						})
					)
				);
			}
		});
    });
});