import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Accordion = styled(motion.button)`
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    height: 70px;
    padding: 0 10px 0 10px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    border-bottom: 1px solid #8c6900;
`;

const Panel = styled(motion.div)`
    padding: 0 15px;
    background-color: white;
    overflow: hidden;
`

const Title = styled.p`
    margin: 0;
    padding: 0;
`;

const Arrow = styled(motion.img)`
    height: 20px;
    width: 20px;
    margin: 0 !important;
    display: block;
`;

export default function ProductAccordion({ title, content, initial = false }) {

    const [active,setActive] = useState(initial);

    return (
        <>
            <Accordion onClick = {() => setActive(!active)}>
                <Title>{title.toUpperCase()}</Title>
                <Arrow
                    src = {'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjOGM2OTAwIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHJlcXVpcmVkRXh0ZW5zaW9ucz0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj48L2ZvcmVpZ25PYmplY3Q+PGcgaTpleHRyYW5lb3VzPSJzZWxmIj48cGF0aCBkPSJNMi41LDMxLjNjMC0yLjYsMS01LjEsMi45LTcuMWMzLjktMy45LDEwLjMtMy45LDE0LjIsMEw1MCw1NC41bDMwLjQtMzAuNGMzLjktMy45LDEwLjMtMy45LDE0LjIsMCAgICBjMy45LDMuOSwzLjksMTAuMywwLDE0LjJMNTcuMSw3NS44Yy0xLjksMS45LTQuNCwyLjktNy4xLDIuOXMtNS4yLTEuMS03LjEtMi45TDUuNCwzOC40QzMuNSwzNi40LDIuNSwzMy44LDIuNSwzMS4zeiI+PC9wYXRoPjwvZz48L3N3aXRjaD48L3N2Zz4='}
                    animate = {{rotate: active ? 180 : 0}} />
            </Accordion>
            <Panel animate={{height: active ? 'auto' : '0', marginTop: active ? '15px' : '0'}}>
                {content}
            </Panel>
        </>
    )
}
