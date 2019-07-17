import React, {useState} from "react";

export const AddMemberForm = (props) => {
    const initialFormState = { id: null, name: "", email: "" }

    const [ member, setMember ] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.target
        setMember({...member, [name]: value})
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!member.name || !member.email) return

            props.addMember(member)
            setMember(initialFormState)
        }}
        >
            <label>Name</label>
            <input type="text" name="name" value={member.name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="text" name="email" value={member.email} onChange={handleInputChange} />
            <button>Add new team member</button>
        </form>
    )
}