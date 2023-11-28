import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

const SubsSlugPage = () => {
  const router = useRouter();
  const ids = router.query.userid;
  const streamerId = ids[0];
  const userId = ids[1];

  console.log(streamerId, userId);

  const [subsData, setSubsData] = useState({});
  const [changedDate, setChangedDate] = useState({});

  const subsAgeFetchHandler = async () => {
    const response = await fetch(
      `https://api.ivr.fi/v2/twitch/subage/${userId}/${streamerId}`
    );
    const data = await response.json();
    setSubsData(data);
    console.log(subsData.followedAt);
  };

  useEffect(() => {
    if (streamerId && userId) {
      subsAgeFetchHandler();
    }
  }, [streamerId, userId]);

  return (
    <div>
      <h1>SubsSlugPage</h1>
    </div>
  );
};

export default SubsSlugPage;
