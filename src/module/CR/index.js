import React from 'react';
import { Accordion } from 'semantic-ui-react';

const level1Panels = [
    { title: 'Bench', content: 'Level 1A Contents' },
    { title: 'External', content: 'Level 1B Contents' },
]

const Level1Content = (
    <div>
        <Accordion.Accordion panels={level1Panels} />
    </div>
)

const level2Panels = [
    { title: 'Level 2A', content: 'Level 2A Contents' },
    { title: 'Level 2B', content: 'Level 2B Contents' },
]



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
