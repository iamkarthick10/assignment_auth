import axios from 'axios';
import React,{useState,useEffect} from 'react'
import ImageCard from '../components/ImageCard'

let url = "https://picsum.photos/v2/list?&limit=100";

export default function Dashboard() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            const response = await axios.get(url);
            return response;
        }
        fetchAPI().then((res) => {
            setPosts(res.data);
            console.log(posts)
        })
    },[]);

    return (
        <div>
            <h1>This is Dashboard Page</h1>
            <div className='container-fluid row'>
                {posts.map(data => {
                    return (<ImageCard post={data}/>)
                })}
            </div>
            
        </div>
    )
}