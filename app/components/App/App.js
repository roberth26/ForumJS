define( function( require ) {
    var $            = require( 'jquery' );
    var Data         = require( '../../services/Data' );
    var Component    = require( 'Component' );
    var Router       = require( 'Router/Router' );
    var ThreadList   = require( 'ThreadList/ThreadList' );
    var ThreadView   = require( 'ThreadView/ThreadView' );
    var Login        = require( 'Login/Login' );
    var CreateThread = require( 'CreateThread/CreateThread' );

	return Data.get().then( function( data ) {
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
				location.hash = '/'; // redirect
			},
			logout: function() {
				this.setState({
					isLoggedIn: false
				});
				this.saveState();
				location.hash = '/login'; // redirect
			},
			saveState: function() {
				localStorage.setItem( 'forumState', JSON.stringify( this.getState() ) );
			},
			createThread: function( threadData ) {
				var state = this.getState();
				var threads = this.getState().threads;
				threads.push({
					id: Math.floor( Math.random() * 100 ) + 400,
					title: threadData.title,
					content: threadData.content,
					author: state.username,
					data: new Date(),
					posts: []
				});
				this.setState({
					threads: threads
				});
				location.hash = '/';
			},
			render: function() {
				var props = this.getProps();
				var state = this.getState();
				return (
					$( '<div />' ).append(
						Router({
							id: props.id + 'Router__',
							indexRoute: {
								component: ThreadList.bind( null, {
									id: props.id + 'Router__ThreadList__',
									threads: state.threads,
									isLoggedIn: state.isLoggedIn,
									onLogout: this.logout,
									username: state.username
								}),
								redirect: {
									path: '/login',
									shouldRedirect: function() {
										return !state.isLoggedIn;
									}
								}
							},
							routes: [
								{
									path: '/threads/create',
									component: CreateThread.bind( null, {
										id: props.id + 'Router__CreateThread__',
										onCreateThread: this.createThread,
										isLoggedIn: state.isLoggedIn,
										onLogout: this.logout
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
								},
								{
									path: '/login',
									component: Login.bind( null, {
										id: props.id + 'Router__Login__',
										isLoggedIn: state.isLoggedIn,
										onLogin: this.login,
										onLogout: this.logout
									}),
									redirect: {
										path: '/',
										shouldRedirect: function() {
											return state.isLoggedIn;
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