import React from 'react';
import parse from 'html-react-parser';
import Gist from 'super-react-gist';

export default function WPContent(props) {
    return (
        <div>
            {parse(props.content)}
        </div>
    )
}
