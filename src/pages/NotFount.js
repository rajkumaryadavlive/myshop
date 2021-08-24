import { Link } from 'react-router-dom';
import classes from '../styles/Main.module.css';

const NotFound=()=>{
     return(
        <section className={classes.starting}>
            <h1>404 - Not Found!</h1>
            <Link to="/">
            Go Home
            </Link>
       </section>
     )
}
export default NotFound;