import React from 'react';
import { Header, List } from 'semantic-ui-react';

const BASE_URL = 'http://192.168.1.206';
const RI_Links = [
    {'General Guidelines for Recruiters' : `${BASE_URL}/Documents/AdditionalInfo/General Guidelines for Recruiters.docx`},
    {'Interview Questions to Ask-Not Ask' : `${BASE_URL}/Documents/AdditionalInfo/Interview Questions to Ask-Not Ask.docx`},
    {'Reference Check Questions' : `${BASE_URL}/Documents/AdditionalInfo/Reference Check Questions.doc`},
    {'Email Templates' : `${BASE_URL}/Documents/AdditionalInfo/Email Templates.docx`},
    {'Employee Onboarding Checklist' : `${BASE_URL}/Documents/AdditionalInfo/Employee Onboarding Checklist.docx`},
    {'Employee Exit Checklist' : `${BASE_URL}/Documents/AdditionalInfo/Employee Exit Checklist.docx`},
    {'Backoffice Contact Information Sheet' : `${BASE_URL}/Documents/AdditionalInfo/Katalyst Contact Info.pdf"`},
    {'Katalyst Direct Client Agreement' : `${BASE_URL}/Documents/AdditionalInfo/Katalyst Background Check Information Sheet.pdf`},
    {'Katalyst Insurance Requirement' : `${BASE_URL}/Documents/Recruiting_Templates/Katalyst Employee Relevant Information/1099/Katalysttech_Insurance Requirements_Annexure 3.docx`},
    {'Katalyst Business Insurance Information' : `${BASE_URL}/Documents/AdditionalInfo/Katalysttech_Business Insurance from Vendors.docx`},
]
const RI = () => {
    const listItem = RI_Links.map(m=>{
        return <List.Item>
                    <a target="_blank" href={Object.values(m)[0]}>
                        {Object.keys(m)[0]}
                    </a>                    
               </List.Item>
    })
    return (
        <div>
            <Header as='h3'>Recruiting Information</Header>
            <List bulleted>
                {listItem}
            </List>                
        </div>
    );
};

export default RI;  