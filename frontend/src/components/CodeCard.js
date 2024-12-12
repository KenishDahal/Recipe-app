import Button from "./button";

const CodeCard = () => {
  return (
    <div className="code">
      <div className="h4">Verify your Email</div>
      <div className="body uploadText">
        Please enter the 6 digit code we just sent to s*********a@xyz.com
      </div>
      <div>
        <input type="text" maxlength="1" className="code__digit" />
        <input type="text" maxlength="1" className="code__digit" />
        <input type="text" maxlength="1" className="code__digit" />
        <span className="code__minus">-</span>
        <input type="text" maxlength="1" className="code__digit" />
        <input type="text" maxlength="1" className="code__digit" />
        <input type="text" maxlength="1" className="code__digit" />
      </div>
      <Button text={"Verify"}/>
      <div className="body uploadText">Didn’t receive a code? <span style={{color: "#00BFFF"}}>Resend Code</span></div>
    </div>
  );
};

export default CodeCard;
