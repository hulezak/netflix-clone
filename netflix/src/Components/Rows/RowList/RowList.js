import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/request";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow="true"
      />

      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow="true"
      />

       <Row
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
       
      />
 
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
   
<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    
    
<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
   
<Row title="Tv Shows" fetchUrl={requests.fetchTvShows} />

<Row title="Documentary" fetchUrl={requests.fetchDocumentaryMovies} />
    
         
   
    </>
  );
};

export default RowList;
