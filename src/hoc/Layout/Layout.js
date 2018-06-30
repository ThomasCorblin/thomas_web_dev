import React, {Component} from 'react';

import Aux from '../AuxFolder/AuxFile';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Classes from './Layout.css';

class Layout extends Component {    
    render () {
        return (
            <Aux >
                <div className={Classes.Layout}>
                    <Toolbar/>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </Aux>
        );
    }
}
    
export default Layout;