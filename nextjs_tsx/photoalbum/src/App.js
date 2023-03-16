import '../src/styles/App.css';
import instance from './api/axios';
import requests from './api/requests';
import Row from '../src/components/Row';
import Banner from '../src/components/Banner';
import Nav from '../src/components/Nav';

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
            <Row
                title="YOUFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            ></Row>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            ></Row>
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            ></Row>
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            ></Row>
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            ></Row>
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            ></Row>
        </div>
    );
}

export default App;
