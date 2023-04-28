import Newsiteams from "./Newsiteams";
import { Row, Col } from "react-bootstrap";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { useState, useEffect } from "react";

export default function Newscontainer(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d35fd708beea46a5bd536a38a75dde8f`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=d35fd708beea46a5bd536a38a75dde8f&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  console.log(articles);

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=d35fd708beea46a5bd536a38a75dde8f&page=${page + 1}&pageSize=${
      props.pageSize
    }`;

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(page + 1);
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">
        NewsMonkey-read {props.category} headlines
      </h2>
      {loading && <Spinner></Spinner>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner></Spinner>}
      >
        <Row>
          {articles.map((e) => {
            return (
              <Col md="4" key={e.id}>
                <Newsiteams
                  title={e.title !== null ? e.title.slice(0, 40) : e.title}
                  desc={
                    e.description !== null
                      ? e.description.slice(0, 100)
                      : e.description
                  }
                  img={e.urlToImage}
                  url={e.url}
                />
              </Col>
            );
          })}
        </Row>
      </InfiniteScroll>
    </div>
  );
}
