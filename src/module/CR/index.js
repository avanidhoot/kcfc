import React, {Component} from 'react';
import { Accordion, List,Icon,Segment } from 'semantic-ui-react';

const level111Panel =[
    {   title:'Rate Conf. & Contingent Offer email (sent from the Calculator)', key:'content-1'}
]
const Level111Content = (
    <div>
        <Accordion.Accordion panels={level111Panel} />
    </div>
)
const LevelContent = (
    <div>
        <List bulleted>
            <List.Item>Infocubic Authorization Form</List.Item>
            <List.Item>Background Check Information Sheet</List.Item>
            <List.Item>Independent Contractor Agreement</List.Item>
            <List.Item>Katalyst Insurance RequirementKT Placement Form</List.Item>
            <Accordion styled>
                <Accordion.Title
                    active={true}
                    index={0} >
                    {/*onClick={this.handleClick}*/}
                    <Icon name='dropdown' />
                    Katalyst receives from Client
                </Accordion.Title>
                <Accordion.Content active={true}>
                    <List bulleted>
                        <List.Item>Signed Client Agreement</List.Item>
                        <List.Item>Signed W/O</List.Item>
                    </List>
                </Accordion.Content>
            </Accordion>
            <Accordion>
                <Accordion.Title
                    active={true}
                    index={0} >
                    {/*onClick={this.handleClick}*/}
                    <Icon name='dropdown' />
                   Placement
                </Accordion.Title>
            </Accordion>
            <Accordion>
                <Accordion.Title
                    active={true}
                    index={0} >
                    {/*onClick={this.handleClick}*/}
                    <Icon name='dropdown' />
                    Handled by Sales/Recruiters
                </Accordion.Title>
                <Accordion.Content active={true}>
                    <List bulleted>
                        <List.Item>Thank You Letter</List.Item>
                        <List.Item>Signed Agreement/WO</List.Item>
                    </List>
                </Accordion.Content>


                <Accordion.Title
                    active={true}
                    index={0} >
                    {/*onClick={this.handleClick}*/}
                    <Icon name='dropdown' />
                    For Katalyst
                </Accordion.Title>
                <Accordion.Content active={true}>
                    <List bulleted>
                        <List.Item>Katalyst COI</List.Item>
                        <List.Item>Katalyst W-9</List.Item>
                        <List.Item>Articles of Inc.</List.Item>
                        <List.Item>Katalyst Certificate of Good Standing</List.Item>
                        <List.Item>Idhasoft Certificate of Good Standing</List.Item>
                        <List.Item>Sales Certificate</List.Item>
                        <List.Item>Katalyst business license (Evanston, IL office)</List.Item>
                        <List.Item>Katalyst business license (John's Creek, GA office)</List.Item>
                        <List.Item>Idhasoft GA business license (John's Creek, GA office))</List.Item>
                    </List>
                </Accordion.Content>
            </Accordion>
        </List>
    </div>
)
const Level13Content = (
    <div>
        <Accordion>
            <Segment.Group horizontal>
            <Segment>
            <Accordion.Title
                active={true}
                index={0} >
                {/*onClick={this.handleClick}*/}
                <Icon name='dropdown' />
                For Katalyst
            </Accordion.Title>
            <Accordion.Content active={true}>
                <List bulleted>
                    <List.Item>Vendor Welcome Letter</List.Item>
                    <List.Item>Katalyst Subcontractor Agreement</List.Item>
                </List>
            </Accordion.Content>
            </Segment>
            <Segment>
            <Accordion.Title
                active={true}
                index={0} >
                {/*onClick={this.handleClick}*/}
                <Icon name='dropdown' />
                For KSSPL
            </Accordion.Title>
            <Accordion.Content active={true}>
                <List bulleted>
                    <List.Item>DSR Vendor Agreement and W/O</List.Item>
                </List>
            </Accordion.Content></Segment>
            </Segment.Group>
        </Accordion>
        <Accordion>
            <Segment.Group horizontal>
                <Segment>
                    <Accordion.Title
                        active={true}
                        index={0} >
                        {/*onClick={this.handleClick}*/}
                        <Icon name='dropdown' />
                        Katalyst Requests
                    </Accordion.Title>
                    <Accordion.Content active={true}>
                        <List bulleted>
                            <List.Item>COI</List.Item>
                            <List.Item>W-9</List.Item>
                            <List.Item>Cert. of Good Standing</List.Item>
                            <List.Item>BC/DS Report</List.Item>
                        </List>
                    </Accordion.Content>
                </Segment>
                <Segment>
                    <Accordion.Title
                        active={true}
                        index={0} >
                        {/*onClick={this.handleClick}*/}
                        <Icon name='dropdown' />
                        KSSPL Requests
                    </Accordion.Title>
                    <Accordion.Content active={true}>
                        <List bulleted>
                            <List.Item>Bank Details</List.Item>
                            <List.Item>    PAN/TAN/Service Tax & VAT ID</List.Item>
                            <List.Item>   COI</List.Item>
                            <List.Item>  Shops and Establishments Lic</List.Item>
                        </List>
                    </Accordion.Content></Segment>
            </Segment.Group>
        </Accordion>
    </div>
)
const Level1111Content = (
    <div>
        <List bulleted>
            <List.Item>KT Placement Form</List.Item>
            <List.Item>KSSPL Placement Form</List.Item>
            <List.Item>N2N Placement Form</List.Item>
        </List>
        <Accordion.Accordion panels={[
            {   title:'New Employee', key:'content-1'},
            {   title:'Contractor/1099', content: {content: LevelContent, key:'content-2'}},
            {   title:'Vendor Contractor', content:{content: Level13Content,key:'content-3'}},
        ]}/>
    </div>
)
const Level11Content = (
    <div>
        <Accordion.Accordion panels={[
            {   title:'Go to Katalyst Cost Margin Calculator', content: {content: Level111Content, key:'content-1'}},
            {   title:'Go to Forms',content: {content: Level1111Content, key:'content-2'}},
        ]}/>
    </div>
)

const Level12Content = (
    <div>
        <List bulleted>
            <List.Item>Email Template</List.Item>
            <List.Item>Right to Represent Agreement</List.Item>
        </List>
        <Accordion.Accordion panels={[{title:'Go to Katalyst Cost Margin Calculator', content: {content: Level111Content, key:'content-1'}}]} />

    </div>
)

const Level1Content = (
    <div>
        <Accordion.Accordion  defaultActiveIndex={0} panels={[
            { title: 'Bench', content: {content: Level11Content, key:'content-1'}},
        { title: 'External', content: {content: Level12Content, key:'content-2'}},
        { title: 'Katalyst Cost Margin Calculator', content: {content: Level111Content, key:'content-3'}},
        { title: 'Forms', content: {content: Level1111Content, key:'content-4'}}
        ]} />
    </div>
);

export default class CR extends Component {
    state = { activeIndex: 0 };

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;
        this.setState({ activeIndex: newIndex })
    };

    render() {
        const { activeIndex } = this.state;
        return (
        <div>
            <h1> Client Requirements</h1>
            <Accordion defaultActiveIndex={0} panels={[
                { title: 'Katalyst/KSSPL', content: { content: Level1Content, key: 'content-1' } }
            ]} styled/>
        </div>
    )}}
