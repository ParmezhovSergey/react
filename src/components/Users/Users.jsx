import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ users, ...props }) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
