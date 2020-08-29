import React, {useState,useEffect} from 'react'
import {Content, Primary, Secondary} from './styled/App';
import {PageHeading} from './styled/Content';
import axios from 'axios';
import parse from 'html-react-parser';

export default function TestPrimaryContent() {

    const[data, setData] = useState({});
    const[title, setTitle] = useState(null);
    const[content, setContent] = useState(null);
    const[id, setId] = useState(null);
    
    useEffect(() => {
    const fetchData = async () => {
        const res = await axios(
        'https://seo-hacker.com/wp-json/wp/v2/posts/18960',
        );
        setData(res.data);
        setTitle(res.data.title.rendered);
        setContent(res.data.content.rendered);
        setId(res.data.id);
        console.log(res.data);
    };
    fetchData();
    }, []);
    
    return (
        <Content>
          <Primary>
            <PageHeading>{title === null ? "" : title}</PageHeading>
                {content === null ? "" : parse(content)}
          </Primary>
          {/* <Secondary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora animi cumque consequatur recusandae doloribus quibusdam iure, incidunt architecto quasi corporis, perferendis ea nemo aliquid autem excepturi ipsa vitae eius deserunt asperiores dicta sed dolore. Dolore architecto nemo id mollitia, temporibus fugiat, adipisci officia debitis ipsum iusto neque? Dolores, laborum?</p>
          </Secondary> */}
        </Content>
    )
}
