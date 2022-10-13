const getData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return data;
}

export  {getData};