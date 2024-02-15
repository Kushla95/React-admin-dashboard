import { singleUser } from "../../data";
import Single from "../single/Single";
import "./user.scss";

const User = () => {
  //Fetch data and send to Single Component

  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
