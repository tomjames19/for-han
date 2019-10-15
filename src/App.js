import React, { Component } from 'react';
import Amplify, { Storage } from 'aws-amplify';
import awsmobile from './aws-exports';
import './App.css';
import { Button } from '@material-ui/core';
Amplify.configure(awsmobile);

class App extends Component {
  constructor() {
    super()
    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
    this.state = {
      fileName: ""
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newFile = this.fileInput.current.files[0];
    const name = this.fileInput.current.files[0].name
    Storage.put(name, newFile).then(() => {this.setState({fileName: "Success"})});
  }

  uploadFile = (evt) => {
    const newFile = evt.target.files[0]
    const name = newFile.name
    this.setState({fileName: name})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <title>Welcome to King County</title>
          <p><strong>Welcome to King County Transcribe</strong></p>  
          <input ref={this.fileInput} type="file" hidden onChange={this.uploadFile}/>
          <Button color="primary" onClick={() => this.fileInput.current.click()}>Click to upload audio file</Button>
          <p>{this.state.fileName}</p>
          <Button variant="contained" onClick={this.handleSubmit}>Upload</Button>
        </header>
      </div>
    );
  }
}

export default App;
