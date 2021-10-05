export const getStaticPaths = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const Paths = data.map(user =>{
        return {
            params:{ id: user.id.toString()}
        }
    })
    return {
        paths:Paths,
        fallback: false, // if user tries to access the page with a id doesn't exist it will show 404page
    }
}

export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await response.json();

    return{
        props:{
            bryanuser:data
        }
    }
}
const details = ({bryanuser}) => {
    return (
        <div>
            <h1>{bryanuser.name}</h1>
            <p>{bryanuser.email}</p>
            <p>{bryanuser.website}</p>
            <p>{bryanuser.phone}</p>

        </div>
    )
}

export default details
