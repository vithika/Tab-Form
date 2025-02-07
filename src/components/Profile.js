const Profile = ({ data ,setData,errors}) => {
  const { name, email, age } = data

  
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };


  return (
    <div className="profile">
    Add  your profile details
      <div className="profile">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, 'name')}
        ></input>
       {errors.name &&  <span className="error">{errors.name}</span>}
      </div>
      <div className="profile"> 
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, 'age')}
        ></input>
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div className="profile"> 
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleDataChange(e, 'email')}
        ></input>
         {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  )
}
export default Profile
