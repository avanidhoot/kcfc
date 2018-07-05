import React, { Component } from 'react';
import { Accordion, Icon, List } from 'semantic-ui-react';
import _ from 'lodash';
import FormAccordn from './formAccordn';

class CR extends Component {
    state = {
        activeIndex: []
    };

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const isActive = _.findIndex(activeIndex,(i)=>i === index);
        if(isActive === -1) {
            const activeIndexes = [...activeIndex,index]
            this.setState({activeIndex:activeIndexes});
        }else {
            const activeIndexes = activeIndex.filter(f=>f!==index)
            this.setState({activeIndex:activeIndexes});
        }

    }

    render() {
        const {activeIndex} = this.state
        return(
            <div>
                <br/>
                <br/>
                <Accordion  fluid styled>
                    <Accordion.Title active={true} >
                        <Icon name='dropdown'/>
                        Katalyst/KSSPL
                    </Accordion.Title>
                    <Accordion.Content active={true}>
                        <Bench handleClick={this.handleClick} activeIndex={activeIndex} index={1}/>
                        <External handleClick={this.handleClick} activeIndex={activeIndex} index={2}/>
                        <CostMarginCal activeIndex={activeIndex} index={3}/>
                        <FormAccordn  activeIndex={activeIndex} index={4}/>
                    </Accordion.Content>
                </Accordion>
            </div>
        )
    }
}

const Bench = (props) =>{
    const { index } = props;
    const isActive = props.activeIndex.includes(index)
    return(
        <Accordion styled>
            <Accordion.Title active={isActive} index={index} onClick={(e,titleProps)=>props.handleClick(e,titleProps)}>
                <Icon name='dropdown'/>
                Bench
            </Accordion.Title>
            <Accordion.Content active={isActive}>
                <GoToCal handleClick={props.handleClick}/>
                <GoToForm handleClick={props.handleClick}/>
            </Accordion.Content>
        </Accordion>
    )
}

const External = (props) => {
    const { index } = props;
    const isActive = props.activeIndex.includes(index)
    return(
        <Accordion styled>
            <Accordion.Title active={isActive} index={index} onClick={(e,titleProps)=>props.handleClick(e,titleProps)}>
                <Icon name='dropdown'/>
                External
            </Accordion.Title>
            <Accordion.Content active={isActive}>
                <ExternalLinks/>
                <GoToCal handleClick={props.handleClick}/>
                <GoToForm handleClick={props.handleClick}/>
            </Accordion.Content>
        </Accordion>
    )
}

const CostMarginCal = (props) =>{
    const { index} = props;
    const isActive = props.activeIndex.includes(index)
    return(
        <Accordion styled>
            <Accordion.Title active={isActive} index={index} >
                <Icon name='dropdown'/>
                Katalyst Cost Margin Calculator
            </Accordion.Title>
            <Accordion.Content active={isActive}>
                <List bulleted>
                    <List.Item content ={<a href='http://192.168.1.206:5577/'>Katalyst Cost Margin Calculator</a>}/>
                    <List.Item>Rate Conf. & Contingent Offer email (sent from the Calculator)</List.Item>
                </List>
            </Accordion.Content>
        </Accordion>
    )
}

const ExternalLinks =()=> (
    <div>
        <List bulleted>
            <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Representation%20Agreement/KT-DSR_Client Representation Agreement_Email (Email Template).doc'>Email Template</a>}/>
            <List.Item content={<a href="http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Representation%20Agreement/KT-DSR-Right to Represent Agreement.docx">Right to Represent Agreement</a>}/>
        </List>

    </div>
)
const GoToCal = (props) =>{
    return(
        <Accordion styled>
            <Accordion.Title active={true} onClick={(e,titleProps)=>props.handleClick(e,{index:3})} >
                <Icon name='caret right'/>
                Go to Katalyst Cost Margin Calculator
            </Accordion.Title>

        </Accordion>
    )
}

const GoToForm = (props) =>{
    return(
        <Accordion styled>
            <Accordion.Title active={true} onClick={(e,titleProps)=>props.handleClick(e,{index:4})}>
                <Icon name='caret right'/>
                Go To Form
            </Accordion.Title>
        </Accordion>
    )
}

export default CR;