import {useEffect, useState} from 'react';
import AddMemberComp from './addMember';
import MemberComp from './member';
import mbsrv from '../../services/membersService';

function MembersComp() {

    const [page, setPage] = useState("members");

    const [members, setMembers] = useState([]);

    useEffect(async () =>
    {
        let resp = await mbsrv.getAllMembers();
        setMembers(resp.data);
    }, [])


    return (
        <div className="App">
            <h5>Subscriptions</h5>

            <button onClick={() => setPage("members")}>All Members</button>
            <button onClick={() => setPage("addMember")}>Add a Member</button>

            {page === "members"}
            {page === "addMember" && <AddMemberComp />}

            <div className="App">
                {
                    members.map(item =>
                    {
                        return <MemberComp memberid={item._id} key={item._id} />
                    })
                }
            </div>

        </div>
    )
}

export default MembersComp;