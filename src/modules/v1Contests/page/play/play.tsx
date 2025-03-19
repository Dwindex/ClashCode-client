import React, { useCallback, useState } from "react";
import useMatchMakingMutation from "../../hooks/query/useMatchMakingMutation";
import _get from "lodash/get";
import Match from "../match";
import { useParams } from "react-router-dom";
import V1PlayGame from "../../components/play";


const Play = () => {
  const { startMatchmaking, loading } = useMatchMakingMutation({
    contestId: "2025021903025001",
    tags: ["arrays"],
  });
  const { sessionId } = useParams();

  const [contestData, setContestData] = useState<any>();

  const handleMatchMaking = useCallback(async () => {
    try {
      const data = await startMatchmaking();
      const sessionData = _get(data, ["startMatchmaking"], {});
      if (sessionData) {
        setContestData(sessionData);
      }
    } catch (err) {
      console.error(err);
    }
  }, [startMatchmaking]);

  // if (!contestData) {
  //   return <Match handleMatchMaking={handleMatchMaking} />;
  // }
  return <V1PlayGame contest={contestData} sessionId={sessionId} />;
};

export default React.memo(Play);
