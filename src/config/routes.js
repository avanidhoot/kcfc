import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router'
import { Container } from 'semantic-ui-react';
import { Sidebar } from '../component';
import { ERI, RI } from '../module';
import CR from "../module/CR";

const Routes = ()=> {
    return(        
        <Router>
            <Container style={{height:'100vh'}}>
                <Sidebar>                        
                    <Route exact path="/" component={CR} />
                    <Route path="/eri" component={ERI} />
                    <Route path="/recruitinfo" component={RI}/>
                </Sidebar>
            </Container>
        </Router>
    )
}
export default Routes