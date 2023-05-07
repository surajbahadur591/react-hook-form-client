import React from "react";
import { useState, useEffect } from "react";
import { getUserDataService } from "../api/api";
import Table from "./Table";

const AllUsers = () => {
  const [userdata, setUserData] = useState();

  const getUserData = async () => {
    let response = await getUserDataService();
    setUserData(response.data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <div>{userdata && <Table data={userdata} />}</div>
    </div>
  );
};

export default AllUsers;
