import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Login from './components/login'
import Register from './components/register'
import HotDeals from './components/hotdeals'
import Packages from './components/packages'
import Book from './components/booking'
import ViewBookings from './components/viewbookings'



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe( 'Test suite for Login Component', () => {

  

  test('contact number check', () => {
  const wrapper = shallow(<Login/>);
  wrapper.find('input[type="number"]').simulate('change', {target: {loginForm:{name:'contactNo', value:9000000045}}});
  expect(wrapper.state().loginForm.contactNo).toEqual(9000000045);
  })

  it('password check', () => {
    const wrapper = shallow(<Login/>);
    wrapper.find('input[type="password"]').simulate('change', {target: {loginForm:{name:'password', value:'Hitman$45'}}});
    expect(wrapper.state().loginForm.password).toEqual('Hitman$45');
  })

  it('Login check with correct data', () => {
    const wrapper = shallow(<Login/>);
    wrapper.find('input[type="number"]').simulate('change', {target: {loginForm:{name:'contactNo', value:9000000045}}});
    wrapper.find('input[type="password"]').simulate('change', {target: {loginForm:{name:'password', value:'Hitman$45'}}});
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('loadHome')).toBe(true);
  })

})

describe('Test suite for Register component', () => {
  it('contact number check', () => {
    const wrapper = shallow(<Register/>);
    wrapper.find('input[type="number"]').simulate('change', {target: {registerForm:{name:'contactNo', value:9000000045}}});
    expect(wrapper.state().registerForm.contactNo).toEqual(9000000045);
    })
  
    it('password check', () => {
      const wrapper = shallow(<Register/>);
      wrapper.find('input[type="password"]').simulate('change', {target: {registerForm:{name:'password', value:'Hitman$45'}}});
      expect(wrapper.state().registerForm.password).toEqual('Hitman$45');
    })

    it('contact number check', () => {
      const wrapper = shallow(<Register/>);
      wrapper.find('input[name="name"]').simulate('change', {target: {registerForm:{name:'name', value:'Rohit Sharma'}}});
      expect(wrapper.state().registerForm.name).toEqual('Rohit Sharma');
      })
    
    it('password check', () => {
      const wrapper = shallow(<Register/>);
      wrapper.find('input[name="emailId"]').simulate('change', {target: {registerForm:{name:'emailId', value:'hitman45@gmail.com'}}});
      expect(wrapper.state().registerForm.emailId).toEqual('hitman45@gmail.com');
    })
  
    it('Register check with correct data', () => {
      const wrapper = shallow(<Register/>);
      wrapper.find('input[type="number"]').simulate('change', {target: {registerForm:{name:'contactNo', value:9000000045}}});
      wrapper.find('input[type="password"]').simulate('change', {target: {registerForm:{name:'password', value:'Hitman$45'}}});
      wrapper.find('input[name="name"]').simulate('change', {target: {registerForm:{name:'name', value:'Rohit Sharma'}}});
      wrapper.find('input[name="emailId"]').simulate('change', {target: {registerForm:{name:'emailId', value:'hitman45@gmail.com'}}});
      wrapper.find('button').simulate('click');
      expect(wrapper.state('registerSuccess')).toBe(true);
    })

})

describe('Test suite for Hot Deals', () => {
  it('no of persons validation', () => {
    const wrapper = shallow(<HotDeals/>);
    wrapper.find('input[name="noOfPersons"]').simulate('change', {target: {bookingForm:{name:'noOfPersons', value:6}}});
    expect(wrapper.state().bookingFormValid.noOfPersons).toBe(false);
  })

  it('date validation', () => {
    const wrapper = shallow(<HotDeals/>);
    wrapper.find('input[name="date"]').simulate('change', {target: {bookingForm:{name:'date', value: "2020-05-16"}}});
    expect(wrapper.state().bookingFormValid.date).toBe(true);
  })

  it('calculate charges button activation', () => {
    const wrapper = shallow(<HotDeals/>);
    wrapper.find('input[name="noOfPersons"]').simulate('change', {bookingForm:{target: {name:'noOfPersons', value:2}}});
    wrapper.find('input[name="date"]').simulate('change', {target: {bookingForm:{name:'date', value: "2020-05-16"}}});
    // wrapper.find('#buttonCalc').simulate('change', {target: {name:'date', value: "2020-05-16"}});
    expect(wrapper.state().bookingFormValid.buttonActive).toBeTruthy();
  })

  it('display Side Bar', () => {
    const wrapper = shallow(<HotDeals/>);
    wrapper.find("#hdViewDetails").simulate('click');
    expect(wrapper.state().showItinerary).toBe(true);
  })
  
})

describe('Test Suite for Packages', () => {
  it('no of persons validation', () => {
    const wrapper = shallow(<Packages/>);
    wrapper.find('input[name="noOfPersons"]').simulate('change', {target: {bookingForm:{name:'noOfPersons', value:2}}});
    expect(wrapper.state().bookingForm.noOfPersons).toBe(2);
  })

  it('date validation', () => {
    const wrapper = shallow(<Packages/>);
    wrapper.find('input[name="date"]').simulate('change', {target: {bookingForm:{name:'date', value: "2020-05-09"}}});
    expect(wrapper.state().bookingForm.date).toBeFalsy();
  })

  it('calculate charges button activation', () => {
    let deal = { noOfNights : 14, chargesPerPerson: 5099, flightCharges: 500}
    const wrapper = shallow(<Packages/>);
    wrapper.find('input[name="noOfPersons"]').simulate('change', {target: {bookingForm:{name:'noOfPersons', value:2}}});
    wrapper.find('input[name="date"]').simulate('change', {target: {bookingForm:{name:'date', value: "2020-05-16"}}});
    wrapper.setState({deal:deal})
    wrapper.find('#buttonCalc').simulate('click');
    expect(wrapper.state().totalCharges).toBe(10198);
  })

  it('display Side Bar', () => {
    const wrapper = shallow(<Packages/>);
    wrapper.find("#packViewDetails").simulate('click');
    expect(wrapper.state().showItinerary).toBe(true);
  })
})

describe('Test Suite for Book', () => {
  it('no of persons validation', () => {
    const wrapper = shallow(<Book/>);
    wrapper.find('input[name="noOfPersons"]').simulate('change', {target: {bookingForm:{name:'noOfPersons', value:2}}});
    expect(wrapper.state().bookingForm.noOfPersons).toBe(2);
  })

  it('date validation', () => {
    const wrapper = shallow(<Book/>);
    wrapper.find('input[name="date"]').simulate('change', {target: {bookingForm:{name:'date', value: "2020-05-09"}}});
    expect(wrapper.state().bookingForm.date).toBeFalsy();
  })

  it('calculate charges button activation', () => {
    let deal = { noOfNights : 14, chargesPerPerson: 5099, flightCharges: 500}
    const wrapper = shallow(<Book/>);
    wrapper.find('input[name="noOfPersons"]').simulate('change', {target: {bookingForm:{name:'noOfPersons', value:2}}});
    wrapper.find('input[name="date"]').simulate('change', {target: {bookingForm:{name:'date', value: "2020-05-16"}}});
    wrapper.setState({deal:deal})
    wrapper.find('#buttonCalc').simulate('click');
    expect(wrapper.state().totalCharges).toBe(10198);
  })
})

describe('Test Suite for View Bookings', () => {
  it ('Confirm Cancellation box display', () => {
    const wrapper = shallow(<ViewBookings/>);
    wrapper.find("#refund").simulate('click');
    expect(wrapper.state().cancelCard).toBe(true);
  })

  it ('Confirm Cancellation box display', () => {
    const wrapper = shallow(<ViewBookings/>);
    wrapper.setState({cancelCard: true})
    wrapper.find("#back").simulate('click');
    expect(wrapper.state().cancelCard).toBe(false);
  })

})

describe('Test Suite for Logout', () => {
  it('Logout', () => {
    const wrapper = shallow(<App/>);
    wrapper.find("#confirmLogout").simulate('click');
    expect(wrapper.state().logged_out).toBe(true)
  })

  it('Logout box display', () => {
    const wrapper = shallow(<App/>);
    wrapper.find("#logout").simulate('click');
    expect(wrapper.state().dialog_visible).toBe(true)
  })

  it('Logout box hide', () => {
    const wrapper = shallow(<App/>);
    wrapper.find("#cancel").simulate('click');
    expect(wrapper.state().dialog_visible).toBe(false)
  })
})