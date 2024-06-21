import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR } from '../GlobalVariables';
import { FaCircleArrowDown } from 'react-icons/fa6';

const Container = styled.div`
    width: 100%;
    margin: 0 auto;

    &:first-child {
        border-top: 1px solid ${PRIMARY_THEME_COLOR}80;
      }
    
    &:not(:first-child):not(:last-child) {
        border-top: 1px solid ${PRIMARY_THEME_COLOR}80;
        border-bottom: 1px solid ${PRIMARY_THEME_COLOR}80;
    }
    
    &:last-child {
        border-bottom: 1px solid ${PRIMARY_THEME_COLOR}80;
    }
`;

const Accordion = styled(motion.button)`
    background-color: white;
    cursor: pointer;
    height: 70px;
    padding: 0 10px;
    width: 100%;
    text-align: left;
    border: none;
    transition: 0.4s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    color: black;
    ${DESKTOP_VIEW}{
        
        
    }
`;

const Panel = styled(motion.div)`
    padding: 0 15px;
    background-color: white;
    overflow: hidden;
`

const Content = styled.div`
    padding-bottom: 40px;
`;

const Title = styled.p`
    margin: 0;
    padding: 0;
`;

const Arrow = styled(motion.img)`
    height: 20px;
    width: 20px;
    margin: 0;
    display: block;
    fill: pink;
`;

const FArrow = styled(motion(FaCircleArrowDown))`
    height: 20px;
    width: 20px;
    margin: 0;
    display: block;
    fill: pink;
`;

const Arrow1 = motion(FaCircleArrowDown);


export default function ProductAccordion({ title, content, initial = false }) {

    const [active,setActive] = useState(initial);

    return (
        <>
            <Container>
                <Accordion onClick = {() => setActive(!active)}>
                    <Title>{title.toUpperCase()}</Title>
                    <Arrow
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaGVpZ2h0PSIzMDBweCIgd2lkdGg9IjMwMHB4IiBmaWxsPSIjZmZhYmJiIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDEwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzd2l0Y2ggZmlsbD0iI2ZmYWJiYiI+PGZvcmVpZ25PYmplY3QgcmVxdWlyZWRFeHRlbnNpb25zPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmFiYmIiLz48ZyBpOmV4dHJhbmVvdXM9InNlbGYiPjxwYXRoIGQ9Ik0yLjUsMzEuM2MwLTIuNiwxLTUuMSwyLjktNy4xYzMuOS0zLjksMTAuMy0zLjksMTQuMiwwTDUwLDU0LjVsMzAuNC0zMC40YzMuOS0zLjksMTAuMy0zLjksMTQuMiwwICAgIGMzLjksMy45LDMuOSwxMC4zLDAsMTQuMkw1Ny4xLDc1LjhjLTEuOSwxLjktNC40LDIuOS03LjEsMi45cy01LjItMS4xLTsuMS0yLjlMNS40LDM4LjRDMy41LDM2LjQsMi41LDMzLjgsMi41LDMxLjN6IiBmaWxsPSIjZmZhYmJiIi8+PC9nPjwvc3dpdGNoPjwvc3ZnPg=="
                        animate = {{rotate: active ? 180 : 0}} />
                </Accordion>
                <Panel animate={{height: active ? 'auto' : '0', marginTop: active ? '15px' : '0'}}>
                    <Content>
                        {content}
                    </Content>
                </Panel>
            </Container>
        </>
    )
}
