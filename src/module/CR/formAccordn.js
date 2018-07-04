import React from 'react';
import { Accordion, List,Icon,Segment } from 'semantic-ui-react';


const Form = (props)=>{
    const {active,index} = props
    const isActive = props.activeIndex.includes(index)
    return(
        <div>
            <Accordion styled>      
                <Accordion.Title active={isActive} index={index} >
                    <Icon name='dropdown'/>
                    Forms
                </Accordion.Title>
                <Accordion.Content active={isActive}>
                    <FormContent/>
                </Accordion.Content>
                </Accordion>            
        </div>
    )
}
export default Form;


const FormContent = ()=> (
    <div>
        <List bulleted>
            <List.Item>KT Placement Form</List.Item>
            <List.Item>KSSPL Placement Form</List.Item>
            <List.Item>N2N Placement Form</List.Item>
        </List>
        <Accordion.Accordion panels={[
            {   title:'New Employee', key:'content-1'},
            {   title:'Contractor/1099', content: {content: Contractor, key:'content-2'}},
            {   title:'Vendor Contractor', content:{content: VendorContract,key:'content-3'}},
        ]}/>
    </div>
)

const Contractor = (
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
                    <Icon name='dropdown' />
                   Placement
                </Accordion.Title>
            </Accordion>
            <Accordion>
                <Accordion.Title
                    active={true}
                    index={0} >
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
const VendorContract = (
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