import React from 'react'

export const MemberTable = (props) => (
    <table>
        <table-head>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </table-head>
        <table-body>
            {props.members.length > 0 ? (
                props.members.map(member => (
                    <tr key={member.id}>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>
                            <button 
                                onClick={() => {
                                    props.editRow(member) 
                                }}
                                className='button muted-button'
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => props.deleteMember(member.id)} 
                                className='button muted-button'
                                >
                                    Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No members</td>
                </tr>
            )}
        </table-body>
    </table>
)