import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import {toast} from 'react-toastify';
const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    
// form function
const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(name,email,password,phone,address);
    toast.success('Register successfully');
}
 
  return (
    <Layout title={"Register/Sign Up - i2Eye"}>
        <div className='register'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text" value={name} 
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name'/>
            </div>
            <div className="mb-3">
                <input type="email" value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control" id="exampleInputEmail1"  placeholder='Enter Your E-mail'/>
            </div>
            <div className="mb-3">
                <input type="password" value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control" id="exampleInputPassword1"  placeholder='Enter Your Password'/>
            </div>
            <div className="mb-3">
                <input type="text" value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                required
                className="form-control" id="exampleInputEmail1"  placeholder='Enter Your Phone Number'/>
            </div>
            <div className="mb-3">
                <input type="text" value={address} 
                onChange={(e) => setAddress(e.target.value)}
                required
                className="form-control" id="exampleInputEmail1"  placeholder='Enter Your Address'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </div>
    </Layout>
  )
}

export default Register