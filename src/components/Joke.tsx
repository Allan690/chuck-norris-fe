import React from 'react';
import './Joke.scss';
import {useHistory, useParams} from "react-router-dom";
import {Button, Card, PageHeader, Result, Spin} from 'antd';
import { gql, useQuery} from "@apollo/client";


interface IJokeParams {
    category: string
}

const GET_JOKE = gql`
    query FetchRandomJoke($category: String!) {
        fetchRandomJoke(category: $category) {
            value
            icon_url
            id
        }
    }
`;
const Joke: React.FC = () => {
    let history  = useHistory();
    const { category } = useParams<IJokeParams>();
    const { loading, error, data, refetch } = useQuery(GET_JOKE, {
        variables: { category },
        notifyOnNetworkStatusChange: true,
    });

    return (
        <>
            {loading ? <Spin size="large" className="loader" /> : ""}
            {error ? <Result
                status="500"
                title="500"
                subTitle={error.message}
            /> : ""}
            <PageHeader
                title="Chuck Norris"
                subTitle="Random Joke"
                onBack={() => history.push(`/`)}
            />
            {data && (
                <Card className="joke">
                    <img src={data.fetchRandomJoke.icon_url} alt="norris icon"/>
                    <p> { data.fetchRandomJoke.value }</p>
                    <Button type="primary"
                            onClick={() => refetch()}
                            loading={loading}
                    > Load New Joke</Button>
                </Card>
            )}
        </>

    )

};

export default Joke;
