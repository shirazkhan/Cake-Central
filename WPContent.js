import React from 'react';
import parse from 'html-react-parser';
import Gist from 'super-react-gist';
import Link from 'next/link';

export default function WPContent(props) {

    // return parse('<a href = "http://localhost:3001/khandev/"></a>', {
    //     replace: function (domNode) {
    //       console.dir(domNode, { depth: null });
    //     }
    //   });

    return parse(props.content, {
        replace: domNode => {

            // Replace anchor tags that have localhost:3001 to Next JS compatible Link tags
            if(domNode.name === "a" && domNode.attribs.href.includes("http://localhost:3001/") ) {
                const slug = domNode.attribs.href.replace("http://localhost:3001/khandev/","");
                return (
                    <Link as = {`/article/${slug}`} href = {`[slug]`}>
                        <a>Link</a>
                    </Link>
                )
              }

            if(domNode.name === "script" && domNode.attribs.src.includes("//gist.github.com/")){

                console.log(domNode.attribs.src.replace(".js",""))
              return (
                  <Gist url = {domNode.attribs.src.replace(".js","")}></Gist>
              )
            }
        },
      });

}
