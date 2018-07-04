import React, { Component } from 'react'
import { Accordion, Icon,List } from 'semantic-ui-react'
import _ from 'lodash';
import eriData from './eri.json';

export default class ERI extends Component {
  state = { activeIndex: [0] }

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
    const { activeIndex } = this.state;
    const listItem = eriData.ERI.map(m=>{
        return <ul>
                <List.Item>
                    <li>  
                        <a target="_blank" href={m.link}>
                            {m.title}
                        </a> 
                    </li>                   
                </List.Item>
            </ul>
    });
        
    const listItem2 = eriData.ForKatalyst.map(m=>{
        return <ul>
                <List.Item>
                    <li> 
                        <a target="_blank" href={m.link}>
                            {m.title}
                        </a>
                    </li>          
                </List.Item>
            </ul>        
    })

    const listItem3 = eriData.ForKSSPL.map(m=>{
        return <ul>
            <List.Item>
                <li>
                    <a target="_blank" href={m.link}>
                        {m.title}
                    </a>     
                </li>               
            </List.Item>
        </ul>
    })    
    return (
         <Accordion styled>
            <Accord index={0} activeIndex={activeIndex} title="Employee Relevant Information" item={listItem} handleClick={this.handleClick} />
            <Accord index={1} activeIndex={activeIndex} title="For Katalyst" item={listItem2} handleClick={this.handleClick} />
            <Accord index={2} activeIndex={activeIndex} title="For KSSPL" item={listItem3} handleClick={this.handleClick} />
        </Accordion>     
    )
  }
}

const Accord = (props) =>{
    return(
        <React.Fragment>
            <Accordion.Title active={props.activeIndex.includes(props.index)} index={props.index} onClick={(e,titleProps)=>props.handleClick(e,titleProps)}>
                    <Icon name='dropdown' />
                    {props.title}
            </Accordion.Title>
            <Accordion.Content active={props.activeIndex.includes(props.index)}>
                    <p>
                    {props.item}
                    </p>
            </Accordion.Content>
        </React.Fragment>
    )
}