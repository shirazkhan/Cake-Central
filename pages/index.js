import React from 'react';
import Link from 'next/link';
import {Content, Primary} from '../src/styled/App';

export default function Index() {
    return (
        <Content>
            <Primary>
            <p>INDEX PAGE Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati explicabo error sint quidem illo sed blanditiis at, ipsum neque, ut maxime soluta optio, ipsam excepturi ea dolor porro quibusdam provident nesciunt consectetur consequuntur. Illo nobis, deleniti voluptas nostrum qui saepe nemo tempore necessitatibus ullam doloribus officia ex quas numquam mollitia. Dolores quidem repellendus cum voluptates aliquid quae corrupti iste eligendi, ad fugit iure veniam molestiae porro nisi itaque quod excepturi praesentium minima expedita illo maiores natus? Voluptatibus hic, blanditiis odio quidem, error pariatur eveniet consequuntur accusamus aperiam sit ex minima debitis expedita magnam? Ut officia velit deleniti iusto dignissimos aperiam ab exercitationem nulla, rem ipsam suscipit, maiores at, accusantium incidunt itaque odit facilis? Rem ut maiores quam nesciunt corporis quae numquam animi eius cupiditate! Aliquid corrupti ad amet iure, in laudantium tempore obcaecati asperiores sapiente sint itaque reprehenderit officia esse exercitationem at enim aliquam adipisci, minima nam? Earum incidunt illum inventore eveniet voluptatem veritatis ipsam maiores exercitationem voluptates, adipisci cumque pariatur tempora error? Eius blanditiis excepturi dolores sequi provident. Dolorem voluptates molestiae debitis sit suscipit ad, soluta aliquam consequatur aut velit impedit eos quod magnam! Tenetur modi sint ipsum dolorum veniam, ducimus facere voluptates molestiae eligendi ex fugiat nihil ullam!</p>
            <Link href="/test"><a>Go to test</a></Link>
            </Primary>
        </Content>
    )
}
