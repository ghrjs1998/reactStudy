import React,{Component} from 'react'
import AddNumber from "../containers/AddNumber"
// 버튼을 누르는 파트
export default class AddNumberRoot extends Component {
    render() {
      return (
        <div>
          <h1>Add Number Root</h1>
          <AddNumber />
        </div>
      );
    }
  }