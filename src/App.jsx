import React, { Component } from 'react'
import { Button,message} from 'antd';
export default class App extends Component {
    handleclick = ()=>{
        message.success('click!');
    }
    render() {
        return (
            <div>
                app....
                <Button type="primary" onClick={this.handleclick}>Button</Button>
            </div>
        )
    }
}
