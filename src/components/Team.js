import React, {useEffect, useState} from 'react';
import { Fragment } from 'react';
import Member from './Member';

const Team = () => {

    const users=[
        {
            login: 'Md. Rabbi',
            avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4'
        },
        {
            login: 'Md. selim',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4'
        }
    ];
    const [member, setmember] = useState(users)

    useEffect(() => {
        
        fetch('https://api.github.com/users')
        .then(data => data.json())
        .then(data => 
            setmember(data)
        )

    }, [])

    return (
        <Fragment>
            <div className="container my-5">
                <div className="row">

                    {
                        member.map( (data) => <Member member={data} /> )
                    }

                    
                </div>
            </div>
        </Fragment>
    )
}

export default Team;
