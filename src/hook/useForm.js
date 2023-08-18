import { useState } from "react"
const initialState = {
 dni: '',
 numberCard: '',
 name: "",
 expiresMonth: '',
 expiresYear: '',
 securityCode: "",
}
export const useForm = () => {
 const [formState, setFormState] = useState(initialState)
 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormState((prevValues) => ({
   ...prevValues,
   [name]: value,
  }));
 };
 return { formState, handleInputChange }
}
{/* <input
 type="text"
 name="firstName"
 value={inputValues.firstName}
 onChange={handleInputChange}
/> */}