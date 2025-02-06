const Settings = ({ data, setData }) => {
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };
  const { theme } = data;
  return (
    <div>
      Settings
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleDataChange}
          ></input>
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleDataChange}
          ></input>
          Light
        </label>
      </div>
    </div>
  );
};
export default Settings;
