import LayoutHoc from './components/MyLayoutHoc';
import Layout from './components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = ({ show }) => (
  <li>
    {/*<Link href={`/post?title=${props.title}`}>*/}
    <Link href="/p/[id]" as={`/p/${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = props => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
          <PostLink key={show.id} show={show}/>
          // <li key={show.id}>
          //   <Link href="/p/[id]" as={`/p/${show.id}`}>
          //     <a>{show.name}</a>
          //   </Link>
          // </li>
        ))}
        <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }
  
          ul {
            padding: 0;
          }
        `}</style>
        {/*<PostLink title="Hello Next.js"/>*/}
        {/*<PostLink title="Learn Next.js is awesome"/>*/}
        {/*<PostLink title="Deploy apps with Zeit"/>*/}
      </ul>
    </Layout>
  )
};

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  }
};

// export default LayoutHoc(Index);
export default Index;
