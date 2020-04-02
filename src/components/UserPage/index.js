import React from "react";

import { connect } from "react-redux";

// import TestForRoute from '../TestForRoute';

// import { Route } from 'react-router';

import "./style.scss";


const UserPage = ({
  users,
  match
}) => {
  debugger
  // console.log("UsrPgage ", props );
// const {
//   // userId : {params},
//   match
//   users
// } = props;
// console.log("params", match)

const {params : { userId }} = match;
console.log("userId", userId);

  return (
    <div className="UserPage">
      <div className="UserPage-container flexible wrap">
        {users[0] &&
          users[0].map(item => (
            <div key={item.id} className="UserPage-content">
              <div className="image-content">
                <img src={item.avatar_url} alt="avatarImage" />
              </div>
              <div className="info-content">
                <div className="name">{item.login}</div>
                <div className="srname">{item.type}</div>
                <div />
              </div>
            </div>
          ))}
      </div>
          {/*
          <Route /> - միայն իր կոմպոնենտն է ունենում historu loaction և mathc

          <TestForRoute someProps = "1234" /> - have onlu  {
            someProps : 1234
          }

          <Route path="" component={TestForRoute} /> - have {
            hitory
            location 
            match
          }
          */}
            {/* <TestForRoute someProps = "1234" /> */}
            {/* <Route path="" component={TestForRoute} /> */}
    </div>
  );
};
const mapStateToProops = ({ users }) => ({ users });
export default connect(mapStateToProops)(UserPage);
