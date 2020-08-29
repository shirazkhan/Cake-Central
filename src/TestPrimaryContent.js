import React, {useState,useEffect} from 'react'
import {HeroContent, Primary, Secondary} from './styled/App';
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
        <HeroContent>
          <Primary>
            <PageHeading>{title}</PageHeading>
            <p>Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart.</p>
            <p>{data.id}</p>
            <p>{content}</p>
          </Primary>
          <Secondary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora animi cumque consequatur recusandae doloribus quibusdam iure, incidunt architecto quasi corporis, perferendis ea nemo aliquid autem excepturi ipsa vitae eius deserunt asperiores dicta sed dolore. Dolore architecto nemo id mollitia, temporibus fugiat, adipisci officia debitis ipsum iusto neque? Dolores, laborum?</p>
          </Secondary>
        </HeroContent>
    )
}
