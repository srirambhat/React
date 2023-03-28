import React from 'react';
import instance from './api/axios';
import requests from './api/requests';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';

function Uflix() {
    return (
        <>
            <div className="wsb__uflix " id="uflix">
                <div className="wsb__uflix-heading">
                    <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
                    <div className="wsb__projects-container"></div>
                </div>
            </div>
            <div className="wsb__uflix " id="uflix">
                <div className="wsb__uflix-heading">
                    <div className="wsb__uflix-container">
                        <Row
                            title="UFLIX ORIGINALS"
                            fetchUrl={requests.fetchNetflixOriginals}
                            isLargeRow
                        ></Row>
                    </div>
                </div>
            </div>

            <div className="wsb__projects " id="projects">
                <div className="wsb__projects-heading">
                    <div className="wsb__projects-container">
                        <Row
                            title="Trending Now"
                            fetchUrl={requests.fetchTrending}
                        ></Row>
                    </div>
                </div>
            </div>
            <div className="wsb__projects " id="projects">
                <div className="wsb__projects-heading">
                    <div className="wsb__projects-container">
                        <Row
                            title="Top Rated"
                            fetchUrl={requests.fetchTopRated}
                        ></Row>
                    </div>
                </div>
            </div>
            <div className="wsb__projects " id="projects">
                <div className="wsb__projects-heading">
                    <div className="wsb__projects-container">
                        <Row
                            title="Action Movies"
                            fetchUrl={requests.fetchActionMovies}
                        ></Row>
                    </div>
                </div>
            </div>
            <div className="wsb__projects " id="projects">
                <div className="wsb__projects-heading">
                    <div className="wsb__projects-container">
                        <Row
                            title="Comedy Movies"
                            fetchUrl={requests.fetchComedyMovies}
                        ></Row>
                    </div>
                </div>
            </div>
            <div className="wsb__projects " id="projects">
                <div className="wsb__projects-heading">
                    <div className="wsb__projects-container">
                        <Row
                            title="Romance Movies"
                            fetchUrl={requests.fetchRomanceMovies}
                        ></Row>
                    </div>
                </div>
            </div>
            <div className="wsb__projects " id="projects">
                <div className="wsb__projects-heading">
                    <div className="wsb__projects-container">
                        <Row
                            title="Horror Movies"
                            fetchUrl={requests.fetchHorrorMovies}
                        ></Row>
                    </div>
                </div>
            </div>
            <div className="wsb__projects " id="projects">
                <div className="wsb__projects-heading">
                    <div className="wsb__projects-container">
                        <Row
                            title="Documentaries"
                            fetchUrl={requests.fetchDocumentaries}
                        ></Row>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Uflix;
