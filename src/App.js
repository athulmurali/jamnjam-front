import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import ArtistCard from "./components/ArtistCard";
import GoogleSignIn from "./components/GoogleSignIn";
import Artist from "./services/lostFmServices/Artist";
import Typography from "@material-ui/core/es/Typography/Typography";
import Logout from './components/Logout'
const artist = Artist.instance
class App extends Component {
    constructor(props)
    {
        super(props)
        this.state ={
            artistNames : [],
            currentUserName: "",
            country:""
        }
    }

    handleLogin=(response)=>{
        console.log("return from google login ")
        console.log(response);

        this.setState({
            userProfileObj:response.profileObj,
            currentUserName:response.profileObj.givenName

        })
    }


    handleOnChangeText=(text)=>{
        this.setState({
            country:text
        })
    }

    handleOnPressSearch=()=>{
        this.setState({artistNames:[]},
            ()=>{
                this.getArtistNames(this.state.country);

            }
            )


    }

    getArtistNames=(country)=>{
        let artistNames =[]

        artist.getTopArtistsInLocation(country).then(response=>{
            if (!!response.topartists) this.setState({
                artistNames : response.topartists.artist
            })

        })

    }

    componentDidMount(){}

  render(){
    return (
      <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title"> Jam n' Jam</h1>
              </header>
          {
              !this.state.currentUserName && <GoogleSignIn onSuccess={this.handleLogin}/>}

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
                    onPressSearch={this.handleOnPressSearch}/>


          {this.state.artistNames.length !==0 ?
              <ul
                  style={{
                  listStyle : "none",
                  backgroundColor:"grey",
                  padding : 0}}>
                  {this.state.artistNames.map((artistObj,index) => {
                      return <li key={index}>
                          <ArtistCard title         =   {artistObj.name}
                                      imageUrl      =   {artistObj.image[2]["#text"]}
                                      subtitle      =    {"#" +(index+1) + " Fans : " + artistObj.listeners }
                                      loggedIn      = {!!this.state.currentUserName}
                                      mbid ={artistObj.mbid}
                                      site={artistObj.url}
                          />

                      </li>
                  })

                  }
              </ul>
              :<h1>No results</h1>}

      </div>
    );
  }
}

export default App;
