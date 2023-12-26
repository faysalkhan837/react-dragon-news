import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Leftsidenav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-semibold">All categories</h1>
            <div className="p-4 space-y-6">
                {
                    categories.map(categori =>
                        <NavLink className='block font-semibold'
                        to={`/categori/${categori.id}`}
                         key={categori.id}>
                            {categori.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Leftsidenav;