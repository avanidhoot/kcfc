import React, { Component } from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar,Container } from 'semantic-ui-react';

export default class App extends Component {
    state = { visible: false }

    handleButtonClick = () => this.setState({ visible: !this.state.visible })

    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const { visible } = this.state

        return (
            <div>
                home app
            </div>
        )
    }
}
