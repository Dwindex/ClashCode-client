import React, { useState } from "react";
import styles from "./Match.module.css";

function MatchMaking() {
  const [loading, setLoading] = useState(false);

  const handleMatching = async () => {
    setLoading(true);
  };

  return (
    <div className={styles.container}>
      <h1>Match making</h1>
      <h2 onClick={handleMatching}>Start Match</h2>
      {loading && <span>Loading.....</span>}
    </div>
  );
}

export default React.memo(MatchMaking);
