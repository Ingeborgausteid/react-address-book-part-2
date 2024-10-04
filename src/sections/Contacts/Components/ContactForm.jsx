import { useContext, useState } from "react";
import { ContactContext } from "../../../App";

function ContactForm(){
    const context = useContext(ContactContext)
    const initialFormData = {
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleSubmit = (event) => {
        event.preventDefault();
        const newContact = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            street: formData.street,
            city: formData.city
        }

        //context.setContacts([ ...context.contacts, newContact])

        /*const response = await fetch(context.url, {
            method: "POST",
            body: JSON.stringify(formData)
        })*/
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value})
        console.log(formData)
    }

    return(
        <section>
            <form onSubmit={handleSubmit} className="contact-form">
            <h2>Create Contact</h2>
                <label>
                    <h3>First Name:</h3>
                </label>
                <input type="text" name="firstName" onChange={handleChange} value={formData.firstName}></input>
                <label>
                    <h3>Last Name:</h3>
                </label>
                <input type="text" name="lastName" onChange={handleChange} value={formData.lastName}></input>
                <label>
                    <h3>Street:</h3>
                </label>
                <input type="text" name="street" onChange={handleChange} value={formData.street}></input>
                <label>
                    <h3>City:</h3>
                </label>
                <input type="text" name="city" onChange={handleChange} value={formData.city}></input>
            </form>
        </section>
        

    );
}

export default ContactForm