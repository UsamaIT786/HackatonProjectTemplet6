const API = async (props: any) => {
    const url = await fetch(
    `https://template6-six.vercel.app/api/products/${props.params.id}`
    );
    const res = await url.json();
    console.log("MYAPIResponce", res);
    
    return (
    <h1 className='pl-5 text-5xl'>
    {props.params.id} <br />
    {res.name} <br />
    {res.author} <br />
    </h1>
    );
    };
    
    export default API;