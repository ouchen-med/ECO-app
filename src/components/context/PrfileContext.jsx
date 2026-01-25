import React, { createContext, useState, useEffect } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(() => {
        // Load from localStorage if exists
        const savedProfile = localStorage.getItem("userProfile");
        return savedProfile ? JSON.parse(savedProfile) : null;
    });

    // Save profile to localStorage whenever it changes
    useEffect(() => {
        if (profile) {
            localStorage.setItem("userProfile", JSON.stringify(profile));
        } else {
            localStorage.removeItem("userProfile");
        }
    }, [profile]);

    // ✅ Create or update profile
    const updateProfile = (newProfile) => {
        setProfile((prev) => ({
            ...prev,
            ...newProfile
        }));
    };

    // ✅ Remove profile
    const removeProfile = () => {
        setProfile(null);
    };

    return (
        <ProfileContext.Provider
            value={{ profile, updateProfile, removeProfile }}
        >
            {children}
        </ProfileContext.Provider>
    );
};
