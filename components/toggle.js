
const Toggle = ({ handleToggle, showBg, setShowBg }) => {

  const toggleHandler = () => {
    handleToggle();
    setShowBg(!showBg);
  }
  
  return (
    <>
      <button
      
      onClick={toggleHandler}>
        <div className="containere">
          <input id="checkbox" name="checkbox" type="checkbox"/>
          <label className="label" htmlFor="checkbox"></label>
        </div>
      </button>
  
    </>
  );
};

export default Toggle;