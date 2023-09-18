function Avatar(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img
          src="https://randomuser.me/api/portraits/men/91.jpg"
          alt="random person"
        />
      </div>
      <div className="profile">
        <p>hi, i'm {props.name}</p>
        <p className="profile-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

export default Avatar;
