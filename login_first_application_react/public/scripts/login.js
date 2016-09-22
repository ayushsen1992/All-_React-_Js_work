


//****************************************************************************************************************
var MainComponent = React.createClass({

    getInitialState: function () {
        return { userName: '', password: '', isLoginSuccessfull: false,isUserFailedToLogin:false };
    },


    //loading all users from database for validating
    loadInfoFromServer: function () {

        this.setState({ userName: "ayush@gmail.com", password: "abcd" });

    },





    //for user authentication
    authenticateUser: function (data) {

        console.log("user authentication started");
        console.log("user data is...." + data.userName + "..." + data.password);

        if (data.userName === this.state.userName && data.password === this.state.password) {
            console.log("isLoginSuccessfull==" + this.state.isLoginSuccessfull);
            console.log('valid user');
            //this.state.isLoginSuccessfull = true;
            this.setState({isLoginSuccessfull:true,isUserFailedToLogin:false});



        }
        else {

            console.log('invalid user')
            this.setState({isLoginSuccessfull:false,isUserFailedToLogin:true});
        }

        console.log(" after login isLoginSuccessfull==" + this.state.isLoginSuccessfull);
         console.log(" user failed to login==" + this.state.isUserFailedToLogin);
        debugger;
    },


componentWillMount : function(){
  console.log('Component -will- MOUNT!');
},


    //loading data
    componentDidMount: function () {
      console.log('Component DID MOUNT!')
        this.loadInfoFromServer();
        //    console.log("this.state.==="+this.state.data);
        //  console.log("without uising this.state=="+userInfo.userName);

        // debugger ;
    },

    render: function () {
        var template;


        /*if(true)
        {
            template =<UserHomePage />;
        }
        else{
       template =<LoginBox onLoginSubmit={this.authenticateUser}/>;
        }
        */


        return (
            <div className="mainComponent">

                <Header  isUserLoggedIn={this.state.isLoginSuccessfull} userName={this.state.userName}/>
                     {this.state.isUserFailedToLogin? <WrongCredential /> : <div></div>}
                {this.state.isLoginSuccessfull ? <UserHomePage /> : <LoginBox onLoginSubmit={this.authenticateUser} />}


            </div>
        )

    }
});

//****************************************************************************************************************
var Header = React.createClass({



  componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
     },



     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     },

     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     },

     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     },


    render: function () {

        var headerTemplate;


        if (this.props.isUserLoggedIn) {
            headerTemplate =<div><a className="dropdown-toggle" data-toggle="dropdown" href="#">hello, {this.props.userName}
                                    <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">My account</a></li>
                                    <li><a href="#">Log out</a></li>

                                </ul></div>

        }
        else {
            headerTemplate = <li className=""><a href="#"></a></li>
        }


        return (
            <div className="mainComponent">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Login Page</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li className="dropdown">
                                {headerTemplate}


                            </li>

                        </ul>

                    </div>
                </nav>
            </div>

        )
    }

});

//****************************************************************************************************************
var UserHomePage = React.createClass({
    render: function () {

        return (
            <div className="userHomePage">
                <h1> you are on user home page</h1>
            </div>
        )
    }

});



var WrongCredential = React.createClass({
    render: function () {

        return (
            <div className="alert alert-danger">
  <strong>alert!</strong> invalid Credentials .
</div>
        )
    }

});

//****************************************************************************************************************
var LoginBox = React.createClass({


    //creating initial value
    getInitialState: function () {
        return { userName: '', password: '' };
    },

    userNameChange: function (e) {
        this.setState({ userName: e.target.value });
        // console.log("username change==" + this.state.userName);
        //  e.preventDefault();
    },
    passwordChange: function (e) {
        this.setState({ password: e.target.value });
        //console.log("password change==" + this.state.password);
    },
    loginHandler: function (e) {
        e.preventDefault();
        var data = {
            userName: this.state.userName,
            password: this.state.password
        };
        console.log("Console handler started..." + data.userName);
        this.props.onLoginSubmit(data);


        debugger;
    },


    render: function () {


        return (
            <div className="mainComponent">
                <div className="container">

                    <form className="form-inline" >
                        <div className="form-group">
                            <label className="sr-only" for="email">Email: </label>
                            <input type="email" className="form-control" id="email" value={this.state.userName} placeholder="username" onChange={this.userNameChange} />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" for="pwd">Password: </label>
                            <input type="password" className="form-control" id="pwd" value={this.state.password} placeholder="password" onChange={this.passwordChange} />
                        </div>

                        <button type="submit" className="btn btn-default" onClick={this.loginHandler}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

});

//****************************************************************************************************************
ReactDOM.render(
    <MainComponent url="/api/comments" />,
    document.getElementById('content')
);
