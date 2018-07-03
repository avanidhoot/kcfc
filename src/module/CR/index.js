import React from 'react';
import { Accordion } from 'semantic-ui-react';

const level111Panel =[
    {   title:'Rate Conf. & Contingent Offer email (sent from the Calculator)', key:'content-1'}
]
const Level111Content = (
    <div>
        <Accordion.Accordion panels={level111Panel} />
    </div>
)
const level1111Panel =[
    {   title:'KT Placement Form',key:'content-1'},
    {   title:'KSSPL Placement Form',key:'content-2'},
    {   title:'N2N Placement Form',key:'content-3'}
]
const Level1111Content = (
    <div>
        <Accordion.Accordion panels={level1111Panel} />
    </div>
)
const level11Panel =[
    {   title:'Katalyst Cost Margin Calculator', content: {content: Level111Content, key:'content-1'}},
    {   title:'Forms',content: {content: Level1111Content, key:'content-2'}},

]

const Level11Content = (
    <div>
        <Accordion.Accordion panels={level11Panel} />
    </div>
)
const level12Panel =[
    {   title:'Email Template', key:'content-1'},
    {   title: 'Right to Represent Agreement', key:'content-2'},

]
const Level12Content = (
    <div>
        <Accordion.Accordion panels={level12Panel} />
    </div>
)
const level1Panels = [
    { title: 'Bench', content: {content: Level11Content, key:'content-1'} },
    { title: 'External', content: {content: Level12Content, key:'content-2'} },
]


const Level1Content = (
    <div>
        <Accordion.Accordion  defaultActiveIndex={0} panels={level1Panels} />
    </div>
)





const rootPanels = [
    { title: 'Katalyst/KSSPL', content: { content: Level1Content, key: 'content-1' } }
]

const CR = () => {
    return (
        <div>
            <h1> Client Requirements</h1>
            <Accordion defaultActiveIndex={0} panels={rootPanels} styled/>
        </div>
            )}
export default CR;
