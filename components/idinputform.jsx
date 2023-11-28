import { React, useRef } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import classes from "./idinputform.module.css";

const IdInputForm = () => {
  const router = useRouter();

  const idInputRef = useRef();

  const idSubmitHandler = (e) => {
    e.preventDefault();
    const id = idInputRef.current.value.toLowerCase();
    router.push(`/streamer/${id}`);
  };
  return (
    <div className={classes.content}>
      <form onSubmit={idSubmitHandler}>
        <input
          type="text"
          placeholder="스트리머의 id를 입력하세요"
          ref={idInputRef}
        />
        <motion.button type="submit" whileHover={{ scale: 1.2 }}>
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default IdInputForm;
