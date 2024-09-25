import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password change submitted');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
          Change Your Password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {['current', 'new', 'confirm'].map((type) => (
              <div key={type}>
                <label htmlFor={`${type}-password`} className="block text-sm font-medium text-gray-700">
                  {type.charAt(0).toUpperCase() + type.slice(1)} Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id={`${type}-password`}
                    name={`${type}-password`}
                    type={type === 'current' ? (showCurrentPassword ? 'text' : 'password') :
                          type === 'new' ? (showNewPassword ? 'text' : 'password') :
                          (showConfirmPassword ? 'text' : 'password')}
                    required
                    className="appearance-none block w-full px-3 py-2 sm:text-sm border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={type === 'current' ? currentPassword :
                           type === 'new' ? newPassword :
                           confirmPassword}
                    onChange={(e) => type === 'current' ? setCurrentPassword(e.target.value) :
                                     type === 'new' ? setNewPassword(e.target.value) :
                                     setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => type === 'current' ? setShowCurrentPassword(!showCurrentPassword) :
                                   type === 'new' ? setShowNewPassword(!showNewPassword) :
                                   setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {type === 'current' ? (showCurrentPassword ? <IoMdEyeOff size={24} /> : <IoMdEye size={24} />) :
                     type === 'new' ? (showNewPassword ? <IoMdEyeOff size={24} /> : <IoMdEye size={24} />) :
                     (showConfirmPassword ? <IoMdEyeOff size={24} /> : <IoMdEye size={24} />)}
                  </button>
                </div>
              </div>
            ))}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;