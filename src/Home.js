import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import CelebrityCard from "./components/cards/CelebrityCard";
import Artist from "./services/lostFmServices/Artist";
import Typography from "@material-ui/core/es/Typography/Typography";
import Logout from './components/Logout'
import {BAND} from "./const/userRoles";
import {Users} from "./services/api/Users";
import UserCard from "./components/cards/UserCard";
import {connect} from "react-redux";
import {CLOSE_SIDE_BAR} from "./redux/Constants/userAccount";
import {NO_IMG_PICTURE} from "./const/url";

const artist = Artist.instance;
class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            artistNames : [],
            currentUserName: "",
            country:"",
            freeUsers : [],
            accountType : "FREE",
        }
    }


    getAllUsersFromServer = ()=>{
        const users = new Users();


        users.getAllUsers().
        then(result=>{

            const data =result.data;
            const allUsers = [];
            const jointArray = allUsers.concat( data.bands, data.artists);
            this.setState({
                freeUsers : jointArray
            });

            console.log(jointArray);

            return jointArray

        })
    };



    handleAccountTypeChange=(accountType)=>{
        this.setState({
        accountType : accountType
    })

    };

    handleOnChangeText=(text)=>{
        this.setState({
            country:text
        })
    };

    handleOnPressSearch=()=>{
        this.setState({artistNames:[]},
            ()=>{
                this.getArtistNames(this.state.country);

            }
            )


    };

    getArtistNames=(country)=>{

        artist.getTopArtistsInLocation(country).then(response=>{
            if (!!response.topartists) this.setState({
                artistNames : response.topartists.artist
            })

        })

    };

    componentDidMount(){
        this.props.resetSideBar();
        this.getAllUsersFromServer()
    }

  render(){


        const filteredUsers = this.state.freeUsers.filter(user=> {
                console.log(user.zip);

                    if (this.props.filters.searchAccountType=== "PRO")

                        return false;

                    if (!user.zip) return false;

                    if (!user.role) return false;

                    if(! user.role.includes(this.props.filters.searchRole))
                        return false;

                    if(! user.zip.toString().includes(this.props.filters.searchZip))
                        return false;
                    else return true
            });


      console.log(filteredUsers);


    return (
      <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title"> Jam n' Jam</h1>
              </header>

          {
              !!this.state.currentUserName &&
              <div>
                  <Typography color="textSecondary">
                      Logged in as
                  </Typography>
                  <Typography variant="headline" component="h3">
                      {this.state.currentUserName}
                  </Typography>
                  <Logout></Logout>
              </div>
          }

          <SearchBar
                  onChangeText={this.handleOnChangeText}
                    onPressSearch={this.handleOnPressSearch}
                  onAccountTypeChange = {
                      this.handleAccountTypeChange
                  }
          />

                  {this.props.filters.searchAccountType=== "PRO"
                  &&
                      this.state.artistNames.length !== 0 &&
                      <ul style={{
                          listStyle: "none",
                          backgroundColor: "grey",
                          padding: 0
                      }}>
                          {this.state.artistNames.map((artistObj, index) => {
                              return <li key={index}>
                                  <CelebrityCard title={artistObj.name}
                                                 imageUrl={artistObj.image[2]["#text"]}
                                                 subtitle={"#" + (index + 1) + " Fans : " + artistObj.listeners}
                                                 loggedIn={!!this.state.currentUserName  || this.props.myProfile}
                                                 mbid={artistObj.mbid}
                                                 site={artistObj.url}
                                  />

                              </li>
                          })}
                      </ul>
                  }

                  {this.state.accountType =="FREE"  &&
                  <ul style={{
                          listStyle: "none",
                          backgroundColor: "grey",
                          padding: 0
                      }}>
                      {filteredUsers.map((userObj, index) => {
                          return <li key={index}>
                              <UserCard title={(userObj.role === BAND && userObj.title)
                              || (userObj.firstName + " " + userObj.lastName)}
                                             imageUrl={userObj.img || NO_IMG_PICTURE}
                                             subtitle={"role : " + userObj.role}
                                             loggedIn={!!this.state.currentUserName  || this.props.myProfile}
                                             mbid={userObj._id}

                                             role={userObj.role}
                              />

                          </li>
                      })}
                  </ul>
                  }

              </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        isLoggedIn : state.userAccountReducer.isLoggedIn,
        myProfile :  JSON.parse(localStorage.getItem('myProfile')),

        filters : {...state.searchReducer}

    }

};


const mapDispatchToProps = (dispatch) =>({

   resetSideBar: ()=> {
       dispatch({type :CLOSE_SIDE_BAR})
   }



});


export default connect(mapStateToProps, mapDispatchToProps)(Home);

