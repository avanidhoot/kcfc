import React, { Component } from 'react';
import { Accordion, Icon, List } from 'semantic-ui-react';
import _ from 'lodash';

class CustomCR extends Component {
  state = {
    activeIndex: []
  }

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
        <Accordion styled>
            <Accordion.Title active={true} >
                <Icon name='dropdown'/>
                 Katalyst/KSSPL
            </Accordion.Title>
            <Accordion.Content active={true}>
              <Bench handleClick={this.handleClick} activeIndex={activeIndex} index={0}/>
              <External handleClick={this.handleClick} activeIndex={activeIndex} index={1}/>
            </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}

const Bench = (props) =>{
  const { index, activeIndex } = props;
  const isActive = props.activeIndex.includes(index)
  return(
    <Accordion styled>      
      <Accordion.Title active={isActive} index={index} onClick={(e,titleProps)=>props.handleClick(e,titleProps)}>
          <Icon name='dropdown'/>
          Bench
      </Accordion.Title>
      <Accordion.Content active={isActive}>
          <GoToCal/>
          <GoToForm/>
      </Accordion.Content>
    </Accordion>
  )
}

const External = (props) => {
  const { index, activeIndex } = props;
  const isActive = props.activeIndex.includes(index)
  return(
    <Accordion styled>      
      <Accordion.Title active={isActive} index={index} onClick={(e,titleProps)=>props.handleClick(e,titleProps)}>
          <Icon name='dropdown'/>
          External
      </Accordion.Title>
      <Accordion.Content active={isActive}>
          <ExternalLinks/>
          <GoToCal/>
      </Accordion.Content>
    </Accordion>
  )
}
const ExternalLinks =()=> (
  <div>
      <List bulleted>
          <List.Item>Email Template</List.Item>
          <List.Item>Right to Represent Agreement</List.Item>
      </List>

  </div>
)
const GoToCal = (props) =>{
  return(
    <Accordion styled>      
      <Accordion.Title active={true}>
          <Icon name='caret right'/>
          Go to Katalyst Cost Margin Calculator
      </Accordion.Title>
    </Accordion>
  )
}

const GoToForm = (props) =>{
  return(
    <Accordion styled>      
      <Accordion.Title active={true}>
          <Icon name='caret right'/>
          Go To Form
      </Accordion.Title>
    </Accordion>
  )
}

export default CustomCR;