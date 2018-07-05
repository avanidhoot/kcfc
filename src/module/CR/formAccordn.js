import React from 'react';
import { Accordion, List,Icon,Segment } from 'semantic-ui-react';

const Form = (props)=>{
    const {index} = props
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
            <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Employee%20Relevant%20Information/KT-IS_Placement_Form_V2.docx'>KT Placement Form</a>}/>
            <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Employee%20Relevant%20Information/KSSPL_Placement_Form_V2.docx'>KSSPL Placement Form</a>}/>
            <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Employee%20Relevant%20Information/N2N_Placement_Form_V2.docx'>N2N Placement Form</a>}/>
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
            <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Employee%20Relevant%20Information/1099/Info%20Cubic%20Authorization%20Form.pdf'>Infocubic Authorization Form</a>}/>
            <List.Item content={< a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Employee%20Relevant%20Information/1099/Katalyst%20Background%20Check%20Information%20Sheet.pdf'>Background Check Information Sheet</a>}/>
            <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Employee%20Relevant%20Information/1099/Katalysttech_Independent%20Contractor%20Agreement%20&%20SOW.docx'>Independent Contractor Agreement</a>}/>
            <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Employee%20Relevant%20Information/1099/Katalysttech_Insurance%20Requirements_Annexure%203.docx'>Katalyst Insurance RequirementKT Placement Form</a>}/>
            <Accordion styled>
                <Accordion.Title
                    active={true}
                    index={0} >
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
                        <List.Item content={<a href='http://192.168.1.206/Documents/Client_Letter/Katalystech-Client%20Letter_Template_v2.doc'>Thank You Letter</a>}/>
                        <List.Item>Signed Agreement/WO</List.Item>
                    </List>
                </Accordion.Content>


                <Accordion.Title
                    active={true}
                    index={0} >

                    <Icon name='dropdown' />
                    For Katalyst
                </Accordion.Title>
                <Accordion.Content active={true}>
                    <List bulleted>
                        <List.Item>Katalyst COI</List.Item>
                        <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Client%20Required%20Documents/Katalyst_W9_2017.pdf'>Katalyst W-9</a>}/>
                        <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Client%20Required%20Documents/Original%20Articles%20of%20Incorporation.pdf'>Articles of Inc.</a>}/>
                        <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Client%20Required%20Documents/Katalyst_Cert%20of%20Good%20Standing.pdf'>Katalyst Certificate of Good Standing</a>}/>
                        <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Client%20Required%20Documents/Idhasoft_Cert%20of%20Good%20Standing.pdf'>Idhasoft Certificate of Good Standing</a>}/>
                        <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Client%20Required%20Documents/Sales%20Certificate%20-%20Katalyst.pdf'>Sales Certificate</a>}/>
                        <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Client%20Required%20Documents/Evanston_Katalyst%20Technologies.pdf'>Katalyst business license (Evanston, IL office)</a>}/>
                        <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Client%20Required%20Documents/Johns%20Creek_Katalyst%20Technologies.pdf'>Katalyst business license (John's Creek, GA office)</a>}/>
                        <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Client%20Required%20Documents/Johns%20Creek_Idhasoft,%20Inc..pdf'>Idhasoft GA business license (John's Creek, GA office))</a>}/>
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
                <Icon name='dropdown' />
                For Katalyst
            </Accordion.Title>
            <Accordion.Content active={true}>
                <List bulleted>
                    <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Welcome%20Letters/KT-DSR-Vendor%20Welcome%20Letter.doc'>Vendor Welcome Letter</a>}/>
                    <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Vendor%20Agreement/Katalysttech_Subcontractor%20Agreement%20&%20SOW.docx'>Katalyst Subcontractor Agreement</a>}/>
                </List>
            </Accordion.Content>
            </Segment>
            <Segment>
            <Accordion.Title
                active={true}
                index={0} >
                <Icon name='dropdown' />
                For KSSPL
            </Accordion.Title>
            <Accordion.Content active={true}>
                <List bulleted>
                    <List.Item content={<a href='http://192.168.1.206/Documents/Recruiting_Templates/Katalyst%20Vendor%20Agreement/DSR-%20Master%20Service%20Agreement%20-%20SOW.doc'>DSR Vendor Agreement and W/O</a>}/>
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