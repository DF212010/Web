import React, { createContext, useEffect, useState } from 'react'
export const FormApiContext = createContext(null);
import send_req from '../api/SendRes';
export const FormApiProvider = ({ children }) => {
  const [formState, setformState] = useState({
    request: null,
    response: null,
    error: null,
  })
  useEffect(() => {
    send_req(formState);
  }, [formState])
  return (
    <FormApiContext.Provider value={{ formState, setformState }}>
      {children}
    </FormApiContext.Provider>
  )
}
export default FormApiProvider;
