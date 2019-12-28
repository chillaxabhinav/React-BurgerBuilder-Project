import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email : '',
        address : {
            street : '',
            postalCode : ''
        },
        loading : false
    }
    orderHandler = (event) =>{
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({
            loading : true
        })
        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            customer : {
                name : 'Abhinav',
                address : {
                    street : 'MyStreet',
                    pincode : '244001',
                    country : 'India'
                },
                email : 'myemail@gmail.com'
                },
            deliveryMethod : 'fastest'
            }
        axios.post('/orders.json',order)
            .then(response => {
                if(this.state.loading){
                    this.setState({
                        loading : false
                    })
                }
                this.props.history.push('/');
            })
            .catch(error => {
                if(this.state.loading){
                    this.setState({
                        loading : false
                    })
                }
            });
    }
    render(){
        let form = (<form>
            <Input inputtype='input' type="text" name="name" placeholder="Your Name" label='Name'/>
            <Input inputtype='input' type="email" name="email" placeholder="Your Email" label='Email'/>
            <Input inputtype='input' type="text" name="street" placeholder="Street" label='Street'/>
            <Input inputtype='input' type="text" name="postal" placeholder="Postal Code" label='Postal Code'/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if(this.state.loading){
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
