import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [bio, setBio] = useState("");

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmitBio = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/user/profile/bio`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ bio }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Bio updated:", data);
        // Update profile state with updated bio
        setProfile((prevProfile) => ({ ...prevProfile, bio }));
      } else {
        console.error("Failed to update bio:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating bio:", error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/profile`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log("data::" + data);
          setProfile(data);
        } else {
          console.error("Failed to fetch profile:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  return (
    <>
      <div className="profile-container">
        {profile ? (
          <div className="profile">
            <h2>Welcome, {user.name}!</h2>
            <div className="profile-details">
              <img src={profile.image} alt="User" />
              <p>Email: {user.email}</p>
              <p>Bio: {profile.bio}</p>
            </div>
            <form onSubmit={handleSubmitBio}>
              <label>
                Update Bio:
                <input
                  type="text"
                  value={bio}
                  onChange={handleBioChange}
                  placeholder="Enter your bio"
                />
              </label>
              <button type="submit">Update Bio</button>
            </form>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
