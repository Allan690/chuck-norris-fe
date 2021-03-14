import React from 'react';
import {PageHeader, Result, Spin, Space} from 'antd';
import { gql, useQuery } from '@apollo/client';
import './CategoryList.scss';
import Category from './Category';


const GET_CATEGORIES = gql`
    query fetchCategories {
        fetchCategories
    }
`;

const CategoryList: React.FC = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    return (
        <>
            {loading ? <Spin size="large" className="loader" /> : ""}
            {error ? <Result
                status="500"
                title="500"
                subTitle={error.message}
                /> : ""}

            {data && (
                    <div className="categories">
                        <PageHeader
                            title="Chuck Norris"
                            subTitle="Joke Categories"
                            backIcon={<></>}
                        />
                        <Space direction="horizontal">
                            <div className="categories__list">
                                    {data.fetchCategories.map(
                                        (category: string) =>
                                            <Category
                                                key={category}
                                                category={category}
                                            />)}
                            </div>
                        </Space>
                    </div>
            )}
        </>
    );
};

export default CategoryList;

