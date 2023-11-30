
import Link from "next/link";
import {useRouter} from "next/router";

import classes from "./MainNav.module.css";

const MainNav = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  }
  

  return (
    <div className={classes.content}>
      <logo>
        <h1 onClick={goHome}>StreamerInfo</h1>
      </logo>
      <ul className={classes.navli}>
        <li>
          <Link href="/streamer-follow">FollowList(아직 미구현)</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
