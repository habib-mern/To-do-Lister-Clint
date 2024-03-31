import React, { useState } from "react";
import { getUserDetails } from "../Helper/SessionHelper";
import { UpdateProfile } from "../API/Api";
import { toast } from "react-toastify";

const Profile = () => {
    const [firstName, setFirstName] = useState(getUserDetails()?.firstName || '');
    const [lastName, setLastName] = useState(getUserDetails()?.lastName || '');
    const [profilePicture, setProfilePicture] = useState(getUserDetails()?.profilePicture || '');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [previewProfilePicture, setPreviewProfilePicture] = useState('');

    const handleFirstNameChange = (event) => {
        const { value } = event.target;
        setFirstName(value);
        validateFirstName(value);
    };

    const handleLastNameChange = (event) => {
        const { value } = event.target;
        setLastName(value);
        validateLastName(value);
    };

    const validateFirstName = (value) => {
        if (!value.trim()) {
            setFirstNameError('First name is required');
        } else {
            setFirstNameError('');
        }
    };

    const validateLastName = (value) => {
        if (!value.trim()) {
            setLastNameError('Last name is required');
        } else {
            setLastNameError('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form before submission
        validateFirstName(firstName);
        validateLastName(lastName);

        // Check if any errors exist
        if (!firstNameError && !lastNameError && profilePicture) {
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            console.log("Profile Picture:", profilePicture);

            try {
                // Assuming you have access to the token
                const token = 'your_token_here';
                await UpdateProfile({ firstName, lastName, profilePicture }, token);
                // Optionally, you can display a success message or redirect the user
            } catch (error) {
                // Handle error, display error message, or rollback changes
                console.error("Error updating profile:", error);
            }
        } else {
            toast.error('Fill empty fields');
        }
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
                setPreviewProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div>
                <div className="mx-auto w-[150px] h-[150px] border-2 border-white rounded-full overflow-hidden">
                    <img src={previewProfilePicture || profilePicture} alt="" />
                </div>
            </div>

            <div className="max-w-md mx-auto p-5 ">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="file" onChange={handleFileChange} className="file-input block mx-auto border border-primary rounded-lg border-opacity-[.3] p-1 file-input-bordered file-input-info w-[28%] max-w-xs" />
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            className="placeholder-black placeholder:font-bold bg-third bg-opacity-[.7]  p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        {firstNameError && <p className="text-red-500 text-sm mt-1">{firstNameError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            className="mt-1 placeholder-black placeholder:font-bold bg-third bg-opacity-[.7] p-2 block w-full rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        {lastNameError && <p className="text-red-500 text-sm mt-1">{lastNameError}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={getUserDetails()?.email}
                            className="mt-1 placeholder-black placeholder:font-bold placeholder:text-green-700 bg-third bg-opacity-[.7] p-2 block w-full rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                            disabled
                        />
                    </div>
                    <button className="btn_v1 active:bg-indigo-500">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;
