import React from 'react';
import './homepage.styles.scss';
import {connect} from 'react-redux';
import DButton from './components/common/Button/DonateButtons';

const Homepage = () => (

    <div className ='homepage'>
        <div className='main'>
                <div className='content'>
                    <h1 className="title">Change that might happen</h1>
                    <span className='subtitle'>Kenny - coming soon</span>
                </div>
            <div className='donate-buttons'>
                <DButton value='10'/>
                <DButton value='20'/>
                <DButton value='50'/>
                <DButton value='100'/>
                <DButton value='250'/>
            </div>
        </div>
        <div className='second'>
            <div >
                <h2 className='second-text'>We know Ken!</h2>
                <span> See over 4000 friensd supporrting ken</span>

            </div>
        </div>
    </div>
);


const mapStateToProps = (state) =>({
    selected:state.donate.selected
})

export default connect(mapStateToProps,null)(Homepage);