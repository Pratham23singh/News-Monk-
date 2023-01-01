import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import setProgress from 'react-infinite-scroll-component'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize = 9;

  // state = {
  //   progress: 0
  // }

  // setProgress = (progress) => {
  //   this.setState({ progress: progress })
  // }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* <LoadingBar */}
          {/* color='#f11946' */}
          {/* progress={this.state.progress} */}
          {/* /> */}
          <Routes>
            <Route path="" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="" country="in" category="" />}></Route>
            <Route path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="business" country="in" category="business" />}></Route>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="entertainment" country="in" category="entertainment" />}></Route>
            <Route path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="health" country="in" category="health" />}></Route>
            <Route path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="science" country="in" category="science" />}></Route>
            <Route path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="sports" country="in" category="sports" />}></Route>
            <Route path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} key="technology" country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}



