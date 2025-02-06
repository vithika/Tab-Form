const Interests = ({data,setData,errors})=>
{
const {interests} = data;
const handleDataChange = (e,name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked 
      ?[...prevState.interests,e.target.name]
       :prevState.interests.filter((i)=>i!==e.target.name),
    }));
  };

    return <div className="interest">


    <div  className="interest" > Choose your Interests</div>
    <div>
    <label>
        <input type="checkbox" name="coding" checked={interests.includes("coding")} onChange={handleDataChange}></input>
        coding
    </label>
    </div>
    <div>
    <label>
        <input type="checkbox" name="music" checked={interests.includes("music")} onChange={handleDataChange}></input>
        music
    </label>
    </div>
    <div>
    <label>
        <input type="checkbox" name="travel" checked={interests.includes("travel")} onChange={handleDataChange}></input>
        Travel
    </label>
    {errors.interests && <span className="error">{errors.interests}</span>}
</div>
    </div>

    
}
export default Interests;