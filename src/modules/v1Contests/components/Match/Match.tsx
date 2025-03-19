import React, { use, useCallback, useState } from "react";
import styles from "./Match.module.css";
import { useNavigate } from "react-router-dom";
import _get from "lodash/get";
import useMatchMakingMutation from "../../hooks/query/useMatchMakingMutation";

function MatchMaking() {
  const { startMatchmaking, loading } = useMatchMakingMutation({
    contestId: "2025021903025001",
    tags: ["arrays"],
  });
  const navigate = useNavigate();
  const [contestData, setContestData] = useState<any>();

  const handleMatchMaking = useCallback(async () => {
    try {
      const data = await startMatchmaking();
      const sessionData = _get(data, ["startMatchmaking"], {});
      if (sessionData) {
        setContestData(sessionData);
        navigate(`/play/1v1/${sessionData.SessionId}`);
      }
    } catch (err) {
      console.error(err);
    }
  }, [startMatchmaking]);

  return (
    <div className={styles.container}>
      <h1>Match making</h1>
      <h2 onClick={handleMatchMaking}>Start Match</h2>
      {loading && <span>Loading.....</span>}
    </div>
  );
}

export default React.memo(MatchMaking);
