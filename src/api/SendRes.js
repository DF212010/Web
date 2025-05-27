const send_req = async (formState) => {
    console.log(formState);
    if (formState.request !== null) {
        fetch(`http://localhost:3000/api/${formState.request.type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState.request.value)
        })
    }

}
export default send_req;