import Hostel_nav from './components/Header'
import Headline from './components/Headline';
import Home_details from './components/Home_details';
import Rules from './components/Rulls';

function Home(){
    return(
        <>
        <Hostel_nav />
        <Headline />
        <Home_details />
        <br />
        <Rules/>
        </>
    )
}
export default Home;