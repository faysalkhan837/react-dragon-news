import { useParams } from "react-router-dom";
import Rightsidenav from "../Home/Rightsidenav/Rightsidenav";
import Header from "../Home/Shared/Header/Header";
import Navbar from "../Home/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";




const News = () => {
    
    const [data, setData] = useState([])
    const { id } = useParams()
    
    useEffect(()=> {
        fetch("/news.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-2xl font-semibold">Dragon News</h1>
            <div className="grid md:grid-cols-4">
                <div className="md:col-span-3">
                    News comming soon
                    <p>{id}</p>
                       
                </div>
                <div>
                    <Rightsidenav></Rightsidenav>
                </div>

            </div>
        </div>
    );
};

export default News;