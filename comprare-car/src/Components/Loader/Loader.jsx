import React, {useState} from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  border-color: gray;
	margin: 0 auto;
	margin-top: 5rem;
`;

const Loader = () => {
  const [loading] = useState(true);

  return (
		<PuffLoader loading={loading} css={override} size={120}/>
  );
}

export default Loader;