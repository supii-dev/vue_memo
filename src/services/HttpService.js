import axios from 'axios';

export class HttpService {
    addItem(item) {
        axios.post('http://localhost:8080/memo', item)
             .then(res => console.log('성공', res))
             .catch(err => console.log('실패', err));
    }

    async getItems() {
        const result = await axios.get('http://localhost:8080/memo');        
        return result.data;
    }
    async getItem(id){
        const result = await axios.get(`http://localhost:8080/memo/${id}`);        
        return result.data;
    }
    setItem(item) {
        console.log(item);
        axios.put('http://localhost:8080/memo', item)
             .then(res => console.log('성공', res))
             .catch(err => console.log('실패', err));
    }
    async delItem(id) {
        const result = await axios.delete(`http://localhost:8080/memo?id=${id}`)
        return result.data;
    }
    }


// 통신담당 ,엑시오스를 쓴다 
