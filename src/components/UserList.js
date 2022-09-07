import React from "react";
import useRecources from "./useRecources";

const userList = () => {
  const users = useRecources("users");
  return users.map((user) => {
    return (
      <div className="ui bulleted list">
        <div className="item" key={user.id}>
          {user.name}
        </div>
      </div>
    );
  });
};

export default userList;
