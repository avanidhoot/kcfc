import React, { Component } from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

export default class App extends Component {
    state = { visible: false }

    handleButtonClick = () => this.setState({ visible: !this.state.visible })

    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const { visible } = this.state

        return (
            <div>
                <Button onClick={this.handleButtonClick}>Toggle visibility</Button>
                <div>
                <Sidebar.Pushable as={Segment} >
                    <Sidebar
                        as={Menu}
                        animation='push'
                        icon='labeled'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width=''
                    >
                        <Menu.Item as='a'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='gamepad' />
                            Games
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                </div>
            </div>
        )
    }
}
