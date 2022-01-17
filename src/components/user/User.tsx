import React, { useState, useEffect } from "react";
import getUser from "../../business/user";

const User = () => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    (async() => {
      const userInfo = await getUser();
      setUser(userInfo);
    })();
  }, []);

  if (!user) {
    return <>loading...</>;
  }

  return (
    <details>
      <summary data-testid="summary">{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
}

export default User;