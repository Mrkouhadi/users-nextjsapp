import styles from '../../styles/listings.module.css'
import Link from 'next/link';


export const getStaticProps = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json(); // now we got an [] of data
    return {
        props:{bryanUsers: data}  // bryanUsers got attached to the props of this component.
    }
}

const index = (props) => { // props.bryanUsers
    return (
        <div>
           <h1> my listing page </h1>
           {props.bryanUsers.map(user =>{
               return <Link href={'/mylistings/'+user.id} key={user.id} >
                   <a className={styles.single}>
                       <h3>{user.name}</h3>
                   </a>
               </Link>
           })}
        </div>
    )
}

export default index
