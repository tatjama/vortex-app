
import Header from './Header';
import Footer from './Footer';
import classes from './Layout.module.css';

const Layout = (props) => {
    return(
        <div className={classes.container}>
            <Header/>            
            <main  className = {classes.main} >
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout