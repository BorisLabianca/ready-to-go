const Switch = (props) => {
  return (
    <div className="switch">
      <button
        onClick={() => {
          props.bool === false && props.setBool(!props.bool);
        }}
        className={props.bool === false ? "notPushed" : "pushed"}
      >
        ON
      </button>
      <button
        onClick={() => {
          props.bool === true && props.setBool(!props.bool);
        }}
        className={props.bool === false ? "pushed" : "notPushed"}
      >
        OFF
      </button>
    </div>
  );
};
export default Switch;
