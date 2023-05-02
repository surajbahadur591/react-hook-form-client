function App() {
  return (
    <div className="px-4 py-4 bg-gray-200">
      <h1 className="text-2xl font-semibold">Advanced Form Validation</h1>

      <form>
        {/* personal details  */}
        <div className="h-full w-full my-8">
          {/* section 1 */}
          <h1 className="text-lg underline font-bold">Personal Details</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid lg:grid lg:grid-cols-3">
            <span className="w-full mx-2 px-2 flex items-center">
              <label className="w-[70px]" htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="name"
                placeholder="Enter Name"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="age">
                Date of Birth or Age <span className="text-red-600">*</span>{" "}
              </label>
              <input
                required
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                placeholder="DD/MM/YYYY or age in years"
                id="age"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label className="w-[60px]" htmlFor="gender">
                Sex <span className="text-red-600">*</span>
              </label>
              <select
                required
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value="0">Enter Sex</option>
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
                className="border-solid w-full border-2 mx-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="mobile"
                placeholder="Enter Mobile"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label className="w-[150px]" htmlFor="govtid">
                Govt Issued ID
              </label>
              <select
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="govtid"
                id="govtid"
              >
                <option value="0">Id Type</option>
                <option value="adhaar">Adhaar</option>
                <option value="pan">PAN</option>
              </select>
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <input
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                placeholder="Enter Govt ID"
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
              <label className="w-[300px]" htmlFor="name">
                Gaurdian Details
              </label>
              <select
                className="border-solid w-[150px] border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value="0">Enter label</option>
                <option value="male">Mr</option>
                <option value="female">Mrs</option>
              </select>
              <input
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="name"
                placeholder="Enter Gaurdian Name"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="age">Email</label>
              <input
                required
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="email"
                placeholder="Enter Email"
                id="age"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="gender">Emergency Contact Number</label>
              <input
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="name"
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
              <label className="" htmlFor="name">Address</label>
              
              <input
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="name"
                placeholder="Enter Address"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="age">State</label>
              <select
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value="0">State</option>
                <option value="male">Telanagana</option>
                <option value="female">Delhi</option>
              </select>
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="gender">City</label>
              <select
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value="0">Enter city/village/town</option>
                <option value="male">Hyd</option>
                <option value="female">Nagpur</option>
              </select>
            </span>
            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="gender">Country</label>
              <select
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value="0">India</option>
                <option value="male">USA</option>
                <option value="female">Russia</option>
              </select>
            </span>
            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="gender">Pincode</label>
              <input
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="name"
                placeholder="Enter Pincode"
              />
            </span>
          </div>
        </div>

        {/* Other details  */}
        <div className="h-full w-full my-8">
          {/* section 1 */}
          <h1 className="text-lg underline font-bold">Other Details</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid lg:grid lg:grid-cols-4">
            <span className="w-full mx-2 px-2 py-2 flex items-center">
              <label className="" htmlFor="name">Occupation</label>
              
              <input
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                type="text"
                id="name"
                placeholder="Enter Occupation"
              />
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="age">Religion</label>
              <select
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value="0">Enter Religion</option>
                <option value="male">Hindu</option>
                <option value="female">Christian</option>
              </select>
            </span>

            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="gender">Marital Status</label>
              <select
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value="0">Enter Marital Status</option>
                <option value="male">Single</option>
                <option value="female">Forever Single</option>
              </select>
            </span>
            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="gender">Blood Group</label>
              <select
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value="0">Enter Blood Group</option>
                <option value="male">A+</option>
                <option value="female">A++</option>
                <option value="female">F</option>
              </select>
            </span>
            <span className="w-full mx-2 px-2 flex items-center">
              <label htmlFor="gender">Nationality</label>
              <select
                className="border-solid w-full border-2 mx-2 my-2 px-2 py-2 rounded-md  border-gray-300"
                name="gender"
                id="gender"
              >
                <option value="0">India</option>
                <option value="male">Canadian</option>
                <option value="female">French</option>
                
              </select>
            </span>
          </div>
        </div>

        {/* buttons  */}
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 text-red-600 bg-gray-200 border-2 border-red-600 rounded-md"
            type=""
            id=""
          >
            CANCEL
          </button>
          <button
            className="px-4 py-2 text-white rounded-md bg-green-600"
            type="submit"
            id="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
