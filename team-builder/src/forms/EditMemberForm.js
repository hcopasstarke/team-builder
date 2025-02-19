import React, {useState, useEffect} from "react";

export const EditMemberForm = (props) => {
    const [member, setMember] = useState(props.currentMember)

    useEffect(
        () => {
            setMember(props.currentMember)
        },
        [props]
    )

    // [props] skips applying effect if values don't change between re-renders

    const handleInputChange = event => {
        const {name, value} = event.target
        
        setMember({...member, [name]: value})
    }
    
    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateMember(member.id, member)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={member.name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="text" name="email" value={member.email} onChange={handleInputChange} />
            <button>Update Member</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
}