import axios from 'axios';

export const GetApi = async() => {
    let url = 'https://dog.ceo/api/breeds/image/random'
    try {
        let response = await axios({
            method: 'get',
            url: url
        })
        console.log('response', response.data);
    } catch(err) {
        console.log('err', err);
    }
}

export const PostApi = async() => {
    let url = 'https://dog.ceo/api/breeds/image/random';
    try {
        let response = await axios({
            method: 'post',
            url: url,
            data: {
                firstName: 'Eric',
                lastName: 'Choi'
            }
        })        
    } catch (err) {
        console.log('err', err);
    }
}