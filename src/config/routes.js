import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router'
import { Container } from 'semantic-ui-react';
import { Sidebar } from '../component';
import { ERI, RI } from '../module';

const Routes = ()=> {
    return(        
        <Router>
            <Container style={{height:'100vh'}}>
                <Sidebar>                        
                    <Route exact path="/" component={App} />
                    <Route path="/eri" component={ERI} />
                    <Route path="/recruitinfo" component={RI}/>
                </Sidebar>
            </Container>
        </Router>
    )
}

const App = (props) =>{
    return (
        <div>
            App
        </div>
    )
}

export default Routes