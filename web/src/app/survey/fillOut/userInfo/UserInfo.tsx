import "./userInfo.scss";

const UserInfo = ({
  isUserNameInvalid,
  setIsInUserNameInvalid,
  isEmailInvalid,
  setIsEmailInvalid,
}: {
  isUserNameInvalid: boolean;
  setIsInUserNameInvalid: (value: boolean) => void;
  isEmailInvalid: boolean;
  setIsEmailInvalid: (value: boolean) => void;
}) => {
  
  const handleUserNameInput = () => {
    setIsInUserNameInvalid(false);
  };

  const handleEmailInput = () => {
    setIsEmailInvalid(false);
  };

  return (
    <li className="userInfo">
      <div className="username">
        <label htmlFor="username">
          お名前(ニックネーム可)
          <span className="must">必須</span>
        </label>
        <input
          id="username"
          className={`username-input ${isUserNameInvalid ? "isInvalid" : ""}`}
          onChange={handleUserNameInput}
          type="text"
          name="username"
          autoComplete="name"
        />
      </div>
      <div
        className={`email ${isEmailInvalid ? "isInvalid" : ""}`}
      >
        <label htmlFor="email">
          連絡先メールアドレス
          <span className="must">必須</span>
        </label>
        <input
          id="email"
          className={`email-input ${isEmailInvalid ? "isInvalid" : ""}`}
          onChange={handleEmailInput}
          type="email"
          name="email"
          autoComplete="email"
        />
      </div>
    </li>
  );
};

export default UserInfo;
