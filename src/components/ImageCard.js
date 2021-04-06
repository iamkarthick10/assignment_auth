import React,{useState} from 'react'

export default function ImageCard(props) {
    const [isHover,setHover] = useState(false);
    const handleMouseHover = () =>{
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }
    return (
        <div className="overflow-hidden rounded mx-2 my-4" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>
           
            <img height={isHover ? props.post.height/8 :props.post.height/12} width={isHover? props.post.width/8 : props.post.width/12} src={props.post.download_url} />
            {isHover && <div className='img-overlay d-flex align-items-end flex-row'>
            <button className='mx-2 btn btn-primary'>Add to Favourites</button>
            <button className='mx-2 btn btn-success'>Download</button>
            </div>}        
        </div>
    )
}
