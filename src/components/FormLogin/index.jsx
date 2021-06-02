import {useState} from 'react'
import { connect } from 'react-redux';
import authOperation from '../../redux/operation/authorization';
import FormLog from './form'
import { CSSTransition } from 'react-transition-group';
import './node.trancition.css'

const FormLogin = ({ onUserLogin }) => {
  const [guestShowForm, setGuestShowForm] = useState(true)
  const onFinish = values => {
    const {name, password}= values;
    onUserLogin({ name, password });
  };

  const handelToogleLog = ()=>{
    setGuestShowForm(guestShowForm => guestShowForm = !guestShowForm )
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  console.log('guestShowForm',guestShowForm);
  return (
    <div className="form-container ">
      <CSSTransition in={guestShowForm} timeout={500} classNames="my-node" onExited={guestShowForm} >
          <FormLog onFinish={onFinish} onFinishFailed={onFinishFailed} showGuest={handelToogleLog} guestShowForm={guestShowForm}/>
      </CSSTransition>
   </div>
  )};

const mapStateToProps = state => ({
  isError: state.auth.error,
});

const mapDispatchToProps = {
  onUserLogin: authOperation.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
