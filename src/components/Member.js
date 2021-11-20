import React from 'react';

const Member = (user) => {
    return (
        <div className="col-md-3 my-2">
            <div className="card shadow">
                <img src={user.member.avatar_url} height="150px"width="150px" className="rounded-circle mx-auto mt-4" alt="" />
                <div className="card-body text-center">
                    <h4>{user.member.login}</h4>
                    <p>Laravel Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Member;
