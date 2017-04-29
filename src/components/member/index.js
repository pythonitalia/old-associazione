import React from "react";

import "./style.css";

export default ({ name, bio }) => <dl className="member">
    <dt>{name}</dt>
    <dd>{bio}</dd>
</dl>;
