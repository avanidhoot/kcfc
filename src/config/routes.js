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
                <NewComponent/>
                <Sidebar>                        
                    <Route exact path="/" component={CR} />
                    <Route path="/eri" component={ERI} />
                    <Route path="/recruitinfo" component={RI}/>
                </Sidebar>
            </Container>
        </Router>
    )
}
const  NewComponent = ()=>{
      return (
        <center>
          <div style={{width: 950, height: 80}}>
            <div style={{float: 'left'}}>
              <img src={require('../images/KATALYSTTECH-LO-FF.jpg')} alt="Logo" style={{border: '6px solid #c3c3c3', borderRadius: 4, WebkitBorderRadius: 4, MozBorderRadius: 4}} /></div>
            <div style={{float: 'right'}}>
              <img src={require('../images/KSSPL logo.png')} alt="Logo" style={{border: '6px solid #c3c3c3', borderRadius: 4, WebkitBorderRadius: 4, MozBorderRadius: 4, height: 65, backgroundColor: '#ffffff'}} /></div>
            <div style={{float: 'right', width: 480, textAlign: 'right', paddingRight: 10}}>
              <p>
                Representation letter for all submissions</p>
              <p>
                Rate confirmation/contingent offer letter</p>
              <p>
                For US Hires please CC to <a href="mailto:?cc=katalysthr@katalysttech.com">katalysthr@katalysttech.com</a>
                on all offer emails.</p>
              <p>
                For India Hires please CC to <a href="mailto:?cc=katalystindiahr@katalysttech.com">katalystindiahr@katalysttech.com</a>
                on all offer emails.</p>
            </div>
          </div>
          <hr style={{clear: 'both', width: 950}} />
          <div style={{width: 950}}>
            <div style={{textAlign: 'right', lineHeight: '1.5em'}}><a href="http://192.168.1.206/Documents/AdditionalInfo/ChecklistFormatsforSalesteam.xlsx">Recruiting Checklist</a><br />
              <a href="http://192.168.1.206/Documents/AdditionalInfo/RecruitingStaffing_CheetSheet.docx">Recruiting &amp; Staffing Cheat Sheet</a>
            </div>
            <div style={{float: 'none'}} />
          </div>
        </center>
      );
}


export default Routes