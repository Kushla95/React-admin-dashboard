import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>kdadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="img" />
        <img src="/app.svg" alt="" className="img" />
        <img src="/expand.svg" alt="" className="img" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://img.freepik.com/free-photo/handsome-young-man-white-t-shirt-cross-arms-chest-smiling-pleased_176420-21607.jpg?w=740&t=st=1707203005~exp=1707203605~hmac=9aaa1a7decce6aa1c42516833a54cd79a9d3239ec37ce49c664b64079bd73bf2"
            alt=""
          />
        </div>
        <img src="/settings.svg" alt="" className="img" />
      </div>
    </div>
  );
};

export default Navbar;
