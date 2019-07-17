import React, {useState, Fragment} from 'react';
import {AddMemberForm} from './forms/AddMemberForm';
import {EditMemberForm} from './forms/EditMemberForm';
import {MemberTable} from './tables/MemberTable';


const App = () => {
  // Team Members
  const membersData = [
    {
      'id': '1',
      'name': 'Ryan Florence',
      'email': 'ryan@reacttraining.com',
    },
    {
      'id': '2',
      'name': 'Michael Jackson',
      'email': 'michael@reacttraining.com',
    },
    {
      'id': '3',
      'name': 'Tyler McGinnis',
      'email': 'tyler@reacttraining.com',
    }
  ]

  // Initial Form State
  const initialFormState = {id: null, name: "", email: ""}

  // Set State
  const [members, setMembers] = useState(membersData)
  const [currentMember, setCurrentMember] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // Add, Delete, Update, Edit
  const addMember = member => {
    member.id = members.length + 1
    setMembers([...members, member])
  }

  const deleteMember = id => {
    setMembers(members.filter(member => member.id !== id))
  }

  const updateMember = (id, updatedMember) => {
    setEditing(false)
    setMembers(members.map(member => (member.id === id ? updatedMember : member)))
  }

  const editMember = member => {
    setEditing(true)
    setCurrentMember({id: member.id, name: member.name, email: member.email})
  }
  
  return (
    <div className="container">
      <h1>Team Member List</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit Team Member</h2>
              <EditMemberForm
                editing={editing}
                setEditing={setEditing}
                currentMember={currentMember}
                updateMember={updateMember}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Team Member</h2>
                <AddMemberForm addMember={addMember} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View Team Members</h2>
          <MemberTable members={members} editMember={editMember} deleteMember={deleteMember} />
        </div>
      </div>
    </div>
  );
}

export default App;