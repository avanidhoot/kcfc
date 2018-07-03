import React from 'react';
import {  Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const Sidebars = (props) => {
    return (
        <Sidebar.Pushable as={Segment} >
            <Sidebar
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                // onHide={this.handleSidebarHide}
                vertical
                visible={true}
                width=''>
                <Link to="home">                
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Client Requirement
                    </Menu.Item>
                </Link>
                <Link to="eri">                    
                    <Menu.Item as='a'>
                    Employee Relevant Information
                    </Menu.Item>
                </Link>
                
                <Link to="recruitinfo">                        
                    <Menu.Item as='a' >                      
                        Recruiting Information
                    </Menu.Item>
                </Link>
            </Sidebar>
            <Sidebar.Pusher>
                <Segment basic>
                    {props.children}
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default Sidebars;