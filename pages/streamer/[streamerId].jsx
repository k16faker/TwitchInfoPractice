import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Archivo } from "next/font/google";

import classes from "./[streamerId].module.css";

const archivo = Archivo({ weight: "700", subsets: ["latin"] });

const DetailInfo = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { streamerId } = router.query;
  const [jsonData, setJsonData] = useState({});
  const [founderData, setFounderData] = useState({});
  const [modsData, setModsData] = useState({});
  const [vipData, setVipData] = useState({});

  const dataFetchHandler = async () => {
    const response = await fetch(
      `https://api.ivr.fi/v2/twitch/user?login=${streamerId}`
    );
    const founderRepsonse = await fetch(
      `https://api.ivr.fi/v2/twitch/founders/${streamerId}`
    );
    const vipResponse = await fetch(
      `https://api.ivr.fi/v2/twitch/modvip/${streamerId}?skipCache=true`
    );
    const data = await response.json();
    const foundData = await founderRepsonse.json();
    const vipData = await vipResponse.json();
    console.log(data[0]);
    console.log(vipData.mods);
    console.log(foundData.founders);
    setJsonData(data[0]);
    setFounderData(foundData.founders);
    setModsData(vipData.mods);
    setVipData(vipData.vips);
    setIsLoading(false);
  };

  useEffect(() => {
    if (streamerId) {
      dataFetchHandler();
    }
  }, [streamerId]);

  let content;

  if (isLoading) {
    content = (
      <div className={classes.loadingdiv}>
        <p>Loading...</p>
      </div>
    );
  } else if (jsonData === undefined) {
    content = (
      <div className={classes.error}>
        <p>해당 id의 스트리머는 존재하지 않습니다</p>
        <Link href="/">
          홈으로 돌아가기
        </Link>
      </div>
    );
  } else if(jsonData) {
    content = (
      <div className={`${classes.fullcontent} ${archivo.className}`}>
        <div className={classes.headcontent}>
          <img
            src={jsonData.logo}
            alt="streamer profile img"
            className={classes.profileimg}
          />
          <p>이름 : {jsonData.displayName}</p>
          <p>소개 : {jsonData.bio}</p>
          <p>팔로워 수 : {jsonData.followers}</p>
        </div>
        <div className={classes.othercontent}>
          <div className={classes.foundercontent}>
            <h2>설립자 목록</h2>
            <ul>
              {founderData.map((founder) => (
                <li key={founder.id}>
                  <div className={classes.nameandsubs}>
                    <p>{founder.displayName}</p>
                    <p className={founder.isSubscribed ? classes.insubs : classes.outsubs}>
                      구독 여부 :{" "}
                      {founder.isSubscribed ? "구독 유지" : "구독 미유지"}
                    </p>
                  </div>
                  <p>
                    {founder.entitlementStart.split("T")[0]}에 설립자 시작.
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.modscontent}>
            <h2>매니저 목록</h2>
            <ul>
              {modsData.map((mods) => (
                <li key={mods.id}>
                  <p>{mods.login}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.modscontent}>
            <h2>VIP 목록</h2>
            <ul>
              {vipData.map((vip) => (
                <li key={vip.id}>
                  <p>{vip.login}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};


export default DetailInfo;
