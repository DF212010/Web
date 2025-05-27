import { useContext } from "react";
import { FormApiContext } from "../context/FormApiContext";
export const useFormApi = () => {
    const context = useContext(FormApiContext);

    if (!context) {
        throw new Error("useContent must be used within a ContentProvider");
    }
    return context;
};