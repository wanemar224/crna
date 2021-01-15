const API_KEY = '';

const getData = async (titre) =>{
    return await _doRequest(titre);
}

const rquestGetDataByID = async (id) => {
    return await _doRequest(id);
}


const _doRequest = async (params) => {
    const request = `http://api/${API_KEY}&${params}`;
    const response = await fetch(request).catch((error)=>{
        return error;
    });

    const responseJson = await response.json().catch((error)=>{
        return error;
    })

    return responseJson;
}

