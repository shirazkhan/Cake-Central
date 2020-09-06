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
            // Convert CoBlock Gist blocks to super-react-gist component
            if(domNode.name === "script" && domNode.attribs.src.includes("//gist.github.com/")){
                return (
                    <Gist
                        url = {domNode.attribs.src.replace(".js","")} >
                    </Gist>
                )
            }

            // // Convert CoBlock Gist blocks to super-react-gist component
            // if(domNode.name === "div" && domNode.attribs.class.includes("wp-block-coblocks-gist")){
            //     return (
            //         <div className = {"mobile-full-width"} >
            //             <Gist
            //                 url = {domNode.children[0].attribs.src.replace(".js","")} >
            //             </Gist>
            //         </div>
            //     )
            // }

            // Youtube Embed Fix
            if(domNode.name === "figure" && domNode.attribs.class.includes("wp-block-embed-youtube")){
                return (
                    <figure className = {"youtube"}>
                        <iframe 
                            allowFullScreen
                            style = {{position: "absolute", width: "100%", height: "100%", top: "0", left: "0"}}
                            title = {"youtube"} 
                            src = {"https://www.youtube.com/embed/5AL4A86Fd1Y"} >
                        </iframe>
                    </figure>
                )
                }

                
        },
      });

}
