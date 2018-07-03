import React, { Component } from 'react'
import { Accordion, Icon,List } from 'semantic-ui-react'
import eriData from './eri.json';

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
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
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Employee Relevant Information
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
           {listItem}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          For Katalyst
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          {listItem2}
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          For KSSPL
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
          {listItem3}
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
