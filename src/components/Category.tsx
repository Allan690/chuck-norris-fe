import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Card } from 'antd';
import './Category.scss';

interface IProps {
    category: string;
    key?: string | number;
}

const CategoryCard: React.FC<IProps> = ({ category }) => {
    let history  = useHistory();

    return (
        <Card className="card" onClick={() => history.push(`/joke/${category}`)}>
            <Link to={`/joke/${category}`}>
                <p>{ category}</p>
            </Link>
        </Card>
    )
};

export default CategoryCard;
