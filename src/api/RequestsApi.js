const API_KEY = '3d59a07aa2f19388cbbca00b58ad6fd5';


export const getPopularPeopleByName = async (nom) =>{
    const request = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=fr&query=${nom}`;
    return await _doRequest(request);

}

export const getPopublarPeopleByID = async (id) => {
    const request = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=fr`;
    return await _doRequest(request);
}
export const getImagePeople = (img) => {
    return `https://image.tmdb.org/t/p/w500${img}`;
}


const _doRequest = async (request) => {
    
    const response = await fetch(request).catch((error)=>{
        return error;
    });

    const responseJson = await response.json().catch((error)=>{
        return error;
    })

    return responseJson;
}

