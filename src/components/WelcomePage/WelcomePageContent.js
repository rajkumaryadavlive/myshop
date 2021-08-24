import classes from '../../styles/Main.module.css';
import MainSlider from './MainSlider';

const WelcomePageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on My Store!</h1>
      <div className="container">
      <MainSlider />
      </div>
       
    </section>
  );
};

export default WelcomePageContent;
