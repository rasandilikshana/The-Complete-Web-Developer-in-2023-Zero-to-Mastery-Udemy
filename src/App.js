import React, { Component } from 'react'
import './App.css'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Logo from './Components/Logo/Logo'
import Navigation from './Components/Navigation/Navigation'
import ParticleScreen from './Components/ParticleScreen/ParticleScreen'
import Rank from './Components/Rank/Rank'
import Register from './Components/Register/Register'
import Signin from './Components/Signin/Signin'
// import Clarifai from "clarifai";

// const app = new Clarifai.App({
//   apiKey: '12104a0e60d4430181664ad026f06432'
//  });


class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      ImageUrl:'',
      route:'home',
      isSignedIn: false,
      user:{
            id:'',
            name:'',
            email:'',
            entries:0,
            joined:''
      }
    }
  }

  loadUser=(data)=>{
    this.setState({
      user:{
            id:data.id,
            name:data.name,
            email:data.email,
            entries:data.entries,
            joined:data.joined
      }
    })
  }

  onInputChange=(event)=>{
    this.setState({input: event.target.value});
  }

  OnButtonSummit=()=>{
    this.setState({ImageUrl:this.state.input});
    // app.models
    // .predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
    //   function(response){
    //     console.log(response.outputs[0].data.regions[0].region_info.bounding.box);
    //   },
    //   function(err){
    //     // console.log(err);
    //   }
    // );
  }

  onRoutChange = (route) => {
    if(route==='signout'){
    this.setState({isSignedIn:false});
    }else if (route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }

  render() {
    const {isSignedIn,ImageUrl,route} = this.state;
    return ( 
      <div className='App'>
        <ParticleScreen/>
        <Navigation isSignedIn={isSignedIn} onRoutChange={this.onRoutChange}/>
        {route === 'home'
          ?  <div>
              <Logo/>
              <Rank/>
              <ImageLinkForm onInputChange={this.onInputChange} OnButtonSummit={this.OnButtonSummit}/>
              <FaceRecognition ImageUrl={ImageUrl}/>
            </div>
          : (
            route === 'signin'
          ? <Signin onRoutChange={this.onRoutChange}/>
          : <Register loadUser={this.loadUser} onRoutChange={this.onRoutChange}/>
          ) 
        }
      </div>
    )
  }
}

export default App 