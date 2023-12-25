import React from 'react';

const CreateAccount = (props) => {
  return (
    <div className="flex justify-center items-center bg-gray-100 w-1/2 mx-auto my-auto relative p-10 mt-10">
      <div className="closebtn hover-s-10" style={{ position: "absolute", top: "10px", right: "20px" }} onClick={props.fun}>
        X
      </div>
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
