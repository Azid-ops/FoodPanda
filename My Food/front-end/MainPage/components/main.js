import MainPage  from '../pages/main.js';

const Main = (props) => {

    const explain = () => {
      props.navigation.navigate('Detail');
    }

    return(
      <MainPage explain={explain}/>  
    )
}

export default Main;