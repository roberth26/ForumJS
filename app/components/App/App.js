define( function( require ) {
    var $            = require( 'jquery' );
    var Component    = require( 'Component' );
    var Router       = require( 'Router/Router' );
    var ThreadList   = require( 'ThreadList/ThreadList' );
    var Thread       = require( 'Thread/Thread' );
    var Login        = require( 'Login/Login' );
    var Register     = require( 'Register/Register' );
    var CreateThread = require( 'CreateThread/CreateThread' );
    var Reply        = require( 'Reply/Reply' );
    var Styles       = require( './Styles' );

	return Component.extend({
		state: {
			isLoggedIn: false,
			username: '',
			userid: 0,
			threads: []
		},
		login: function( username, password ) {
			$.post( 'app/actions/login.php', JSON.stringify({
				username: username,
				password: password,
			})).done( function( data ) {
				data = JSON.parse( data );
				console.log( data );
				if ( data.success ) {
					this.setState({
						isLoggedIn: true,
						username: username,
						userid: data.userid
					});
					location.hash = '/'; // redirect
				} else {
					alert( data.message );
				}
			}.bind( this ));
		},
		logout: function() {
			$.post( 'app/actions/logout.php' ).done( function( data ) {
				this.setState({
					isLoggedIn: false,
					username: ''
				});
				location.hash = '/login'; // redirect
			}.bind( this ));
		},
		registerUser: function( username, password, email ) {
			$.post( 'app/actions/register.php', JSON.stringify({
				username: username,
				password: password,
				email: email
			})).done( function( data ) {
				data = JSON.parse( data );
				if ( data.success ) {
					this.login( username, password );
				} else {
					alert( data.message );
				}
			}.bind( this ));
		},
		createThread: function( title, content ) {
			var state = this.getState();
			$.post( 'app/actions/createThread.php', JSON.stringify({
				title: title,
				content: content,
				userid: state.userid
			})).done( function( data ) {
				location.hash = '/';
				this.render();
			}.bind( this ));
		},
		replyToThread: function( threadId, reply ) {
			var state = this.getState();
			var threads = this.getState().threads;
			var thread = threads.find( function( thread ) {
				return thread.id == threadId;
			});
			thread.posts.push({
				content: reply,
				date: new Date().toString(),
				author: state.username
			});
			this.setState({
				threads: threads
			});
			location.hash = '/threads/thread_id=' + thread.id;
		},
		getCurrentThread: function() {
			var id = parseInt( location.hash.split( 'thread_id=' ).pop() );
			return this.getState().threads.find( function( thread ) {
				return thread.id == id;
			});
		},
		componentWillUpdate: function() {
			var state = this.getState();
			if ( state.username ) {
				var stateThreads = state.threads;
				$.get( 'app/actions/getThreads.php' )
				.done( function( data ) {
					var threads = JSON.parse( data );
					if ( JSON.stringify( threads ) != JSON.stringify( stateThreads ) ) {
						this.setState({
							threads: threads
						}, false ); // prevent render
					}
				}.bind( this ));
			}
		},
		render: function() {
			var props = this.getProps();
			var state = this.getState();
			return (
				$( '<div />', {
					css: Styles.app
				}).append(
					Router({
						id: props.id + 'Router__',
						indexRoute: {
							component: ThreadList.bind( null, {
								id: props.id + 'Router__ThreadList__',
								threads: state.threads,
								isLoggedIn: state.isLoggedIn,
								onLogout: this.logout,
								username: state.username,
								slideLeft: false
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
									onLogout: this.logout,
									username: state.username,
									slideLeft: true
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
								component: Thread.bind( null, {
									id: props.id + 'Router__Thread__',
									threads: state.threads,
									isLoggedIn: state.isLoggedIn,
									onLogout: this.logout,
									username: state.username,
									slideLeft: false
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
							},
							{
								path: '/register',
								component: Register.bind( null, {
									id: props.id + 'Router__Register__',
									isLoggedIn: state.isLoggedIn,
									onRegisterUser: this.registerUser,
									onLogout: this.logout,
								})
							},
							{
								path: '/reply',
								component: Reply.bind( null, {
									id: props.id + 'Router__Reply__',
									isLoggedIn: state.isLoggedIn,
									onLogin: this.login,
									onLogout: this.logout,
									username: state.username,
									getCurrentThread: this.getCurrentThread,
									onReply: this.replyToThread,
									slideLeft: true
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