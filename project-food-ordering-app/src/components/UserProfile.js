import PersonIcon from "@mui/icons-material/Person";

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-upper-container">
        <div className="profile-logo-container">
          <PersonIcon className="profile-logo" />
        </div>
        <div className="edit-profile">Edit Profile</div>
      </div>

      <div className="profile-heading">Hello Tushar! </div>

      <div className="profile-card-container">
        <div className="profile-card">Orders</div>
        <div className="profile-card">Your Cart</div>
        <div className="profile-card">Your Email</div>
      </div>
    </div>
  );
};

export default UserProfile;
