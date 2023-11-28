import React, { useRef } from "react";
import { useRouter } from "next/router";

import classes from "./index.module.css";

const SubsAgeInput = () => {
  const router = useRouter();

  const streamerIdRef = useRef();
  const userIdRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const streamerId = streamerIdRef.current.value.toLowerCase();
    const userId = userIdRef.current.value.toLowerCase();
    router.push(`subsage/${streamerId}/${userId}`);
  };

  return (
    <div>
      <div className={classes.subsdiv}>
        <h1>SubsAge</h1>
        <form onSubmit={submitHandler}>
          <label htmlFor="streamerId">Streamer ID</label>
          <input type="text" placeholder="Streamer id" ref={streamerIdRef} />
          <label htmlFor="userId">User ID</label>
          <input type="text" placeholder="User id" ref={userIdRef} />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SubsAgeInput;
