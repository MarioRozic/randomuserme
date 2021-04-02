import { useState } from "react";

function useGenerateUserList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return { loading, data };
}

export default useGenerateUserList;
