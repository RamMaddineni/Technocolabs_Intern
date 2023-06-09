import React from "react";
import "./BusinessList.css";

import Business from "../Business/Business";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business, ind) => {
          return <Business business={business} key={ind}></Business>;
        })}
      </div>
    );
  }
}

export default BusinessList;
