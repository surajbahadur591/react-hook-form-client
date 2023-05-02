import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({

    name : yup.string().required().min(4),
    age : yup.string().required(),
    gender : yup.string().required().min(1),
    mobile : yup.string().min(10).max(10),
    emergency : yup.string().min(10).max(10),
    govtid : yup.string().min(1),
    govtidnumber : yup.string().min(10).max(12),
    gaurdian: yup.string(),
    gaurdianname : yup.string() ,
    email : yup.string() ,
    pincode: yup.string() ,
    city: yup.string() ,
    country: yup.string() ,
    state: yup.string() ,
    address : yup.string() ,
    nationality : yup.string() ,
    bloodgroup : yup.string() ,
    status : yup.string() ,
    religion : yup.string() , 
    occupation : yup.string()


})


const Forms = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver : yupResolver(schema)
    })


    const submitForm = (data) => {
        console.log('form submitted', data)
        alert('form submitted')
    }



  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        {/* personal details  */}
        <div className="h-full w-full">
          {/* section 1 */}
          <h1 className="text-lg underline font-bold">Personal Details</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-3">

            <span className="w-full mx-2 px-2 flex items-center">
              <label className="w-[70px]" htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input
              {...register('name', { required: true })}
                required
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="name"
                name='name'
                placeholder="Enter Name"
              />
                    {errors.name?.type === 'required' && <p className="text-red-400">First name is required</p>}

            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="age">
                Date of Birth or Age <span className="text-red-600">*</span>{" "}
              </label>
              <input
              {...register('age')}
                required
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                placeholder="DD/MM/YYYY or age in years"
                id="age"
                name="age"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label className="w-[60px]" htmlFor="gender">
                Sex <span className="text-red-600">*</span>
              </label>
              <select
                            {...register('gender')}

                required
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value='' >Enter Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </span>
          </div>
          {/* section 2  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-3">
            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="mobile">Mobile</label>
              <input
              {...register('mobile')}
                className="border-solid w-full border-2 mx-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Enter Mobile"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label className="w-[150px]" htmlFor="govtid">
                Govt Issued ID
              </label>
              <select
              {...register('govtid')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                id="govtid"
                name="govtid"
              >
                <option value=''>ID Type</option>
                <option value="adhaar">Adhaar</option>
                <option value="pan">PAN</option>
              </select>
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <input
              {...register('govtidnumber')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                placeholder="Enter Govt ID"
                name="govtidnumber"
              />
            </span>
          </div>
        </div>

        {/* Contact details  */}
        <div className="h-full w-full my-8">
          {/* section 1 */}
          <h1 className="text-lg underline font-bold">Contact Details</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-3">
            <span className="w-full mx-2 px-2 py-2 flex items-center">
              <label className="w-[300px]" htmlFor="gaurdian">
                Gaurdian Details
              </label>
              <select
              {...register('gaurdian')}
                className="border-solid w-[150px] border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gaurdian"
                id="gaurdian"
              >
                <option value="0">Enter label</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
              </select>
              <input
              {...register('gaurdianname')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="gaurdianname"
                name="gaurdianname"
                placeholder="Enter Gaurdian Name"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="email">Email</label>
              <input
              {...register('email')}
                required
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="email"
                placeholder="Enter Email"
                id="email"
                name="email"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="emergency">Emergency Contact Number</label>
              <input
              {...register('emergency')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="emergency"
                name="emergency"
                placeholder="Enter Emergency No"
              />
            </span>
          </div>
        </div>

        {/* Address  */}
        <div className="h-full w-full my-8">
          {/* section 1 */}
          <h1 className="text-lg underline font-bold">Address Details</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-3">
            <span className="w-full mx-2 px-2 py-2 flex items-center">
              <label className="" htmlFor="address">
                Address
              </label>

              <input
              {...register('address')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="state">State</label>
              <select
              {...register('state')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="state"
                id="state"
              >
                <option value="0">Enter State</option>
                <option value="Telangana">Telangana</option>
                <option value="Delhi">Maharashtra</option>
              </select>
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="city">City</label>
              <select
              {...register('city')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="city"
                id="city"
              >
                <option value="0">Enter city/village/town</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Nagpur">Nagpur</option>
              </select>
            </span>
            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="country">Country</label>
              <select
              {...register('country')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="country"
                id="country"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Russia">Russia</option>
              </select>
            </span>
            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="pincode">Pincode</label>
              <input
              {...register('pincode')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Enter Pincode"
              />
            </span>
          </div>
        </div>

        {/* Other details  */}
        <div className="h-full w-full my-4">
          {/* section 1 */}
          <h1 className="text-lg underline font-bold">Other Details</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid lg:grid lg:grid-cols-4">
            <span className="w-full mx-2 px-2 py-2 flex items-center">
              <label className="" htmlFor="occupation">
                Occupation
              </label>

              <input
              {...register('occupation')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="occupation"
                name="occupation"
                placeholder="Enter Occupation"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="religion">Religion</label>
              <select
              {...register('religion')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="religion"
                id="religion"
              >
                <option value="0">Enter Religion</option>
                <option value="Hindu">Hindu</option>
                <option value="Christian">Christian</option>
              </select>
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="status">Marital Status</label>
              <select
              {...register('status')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="status"
                id="status"
              >
                <option value="0">Enter Marital Status</option>
                <option value="Single">Single</option>
                <option value="ForeverSingle">Forever Single</option>
              </select>
            </span>
            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="bloodgroup">Blood Group</label>
              <select
              {...register('bloodgroup')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="bloodgroup"
                id="bloodgroup"
              >
                <option value="0">Blood Group</option>
                <option value="A+">A+</option>
                <option value="A++">A++</option>
                <option value="F">F</option>
              </select>
            </span>
            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="nationality">Nationality</label>
              <select
              {...register('nationality')}
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="nationality"
                id="nationality"
              >
                <option value="India">India</option>
                <option value="Canadian">Canadian</option>
                <option value="French">French</option>
              </select>
            </span>
          </div>
        </div>

        {/* buttons  */}
        <div className="flex justify-end gap-4">
          <button
            className="px-6 py-3 text-red-600 bg-gray-200 border-2 border-red-600 rounded-md"
          >
            CANCEL
          </button>
          <button
            className="px-6 py-3 text-white rounded-md bg-green-600"
            type="submit"
            id="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
