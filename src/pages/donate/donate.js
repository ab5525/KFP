import React from 'react';
import './donate.styles.scss';
import FormInput from '../../components/common/FormInput/FormInput';
import Button from '../../components/common/Button/ourButton';
import { createDonator } from '../../firebase/firebase';
import DButton from '../../components/common/Button/DonateButtons';
import {connect} from 'react-redux';
//import ken from '../../assets/KenDonate.jpeg';


class Donate extends React.Component {
    constructor(){
        super();

        this.state={
            firstName: '',
            lastName: '',
            email: '',           
        }
    }


    handleChange = (event) =>{

        const{value, name} = event.target;

        this.setState({[name]:value},()=> console.log(this.state));
        

    }

    //handle the submission of a donation. data is recorded in firebase. 
    handleSubmit = async (event) => {
        event.preventDefault();

        if(this.state.firstName===''|| this.state.email==='' || this.state.lastName===''){
            alert("We are sorry we need your full name and email to accept a donation");
        }

        try{
            await createDonator(this.state.firstName, this.state.lastName, this.state.email, this.props.selected);
            this.setState({
                firstName:'',
                lastName:'',
                email:''
            })
        } catch(error){
            console.log(error);
        }
    }



    render() { 
        return (
            <div className='big-container'>
                <div>
                    <div className='container'>
                    <div className='form'>
                        <FormInput name='firstName' label='First Name' value={this.state.firstName} handleChange={this.handleChange} required/>
                        <FormInput name='lastName' label='Last Name' value={this.state.lastName} handleChange={this.handleChange} required/>
                        <FormInput name='email' label='E-mail' value={this.state.email} handleChange={this.handleChange} required/>
                        <h3>Choose an amount to donate:</h3>
                        <div className='donate-buttons'>
                            <DButton value='10'/>
                            <DButton value='20'/>
                            <DButton value='50'/>
                            <DButton value='100'/>
                            <DButton value='250'/>
                        </div>
                        <Button onClick={this.handleSubmit}>Donate</Button> 
                    </div>
                    </div>

                {/* legal disclosures*/}
                    <div className='container'>
                    <div className='legal'>
                        <div className='legal-text'>
                        <h4>Contribution rules</h4>
                            <ol className="eligibility-bullets" >
                            <li>I am a U.S. citizen or lawfully admitted permanent resident (i.e., green card holder).</li>
                            <li>This contribution is made from my own funds, and funds are not being provided to me by another person or entity for the purpose of making this contribution.</li>
                            <li>I am making this contribution with my own personal credit card and not with a corporate or business credit card or a card issued to another person.</li>
                            <li>I am at least eighteen years old.</li>
                            <li>I am not a federal contractor.</li>
                            </ol>
                            <div className="note">Contributions to Kenny For President are not deductible as charitable contributions for Federal income tax purposes. The campaign does not accept contributions from corporations or their PACs, unions, federal government contractors, national banks, those registered as federal lobbyists or under the Foreign Agents Registration Act, SEC-named executives of fossil fuel companies (i.e., companies whose primary business is the extraction, processing, distribution or sale of oil, gas or coal); or foreign nationals. To comply with Federal law, we must use our best efforts to obtain, maintain, and submit the name, mailing address, occupation and name of the employer of individuals whose contributions exceed $200 per election. By submitting your contribution, you agree that the first $2,800 of a contribution will be designated for the 2020 primary election, and any additional amount up to $2,800 will be designated for the 2020 general election. By providing your mobile phone number you consent to receive recurring text messages from Kenny for President. Message &amp; Data Rates May Apply. Text HELP for Info. Text STOP to opt out. No purchase necessary.</div>

                        </div>
                    </div>
                    </div>
                </div>
                {/* picture of candidate*/}
                {/*<img className='picture' src={ken} alt='your next president' />*/}
            </div>


          );
    }
}

const mapStateToProps = (state) => ({
    selected: state.donate.selected

})
 
export default connect(mapStateToProps, null)(Donate);