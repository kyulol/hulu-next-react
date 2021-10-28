import Head from 'next/head';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Results from '../Components/Results';
import requests from '../utils/requests';

export default function Home({results}) {
  // console.log(props);
  return (
    <div>
      <Head>
        <title>Kyulol "hulu clone" with reactJs and nextJs</title>
        <meta name="description" content="ReactJs, TailwindCSS, nextJs, API call etc" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="alternate icon" href="/favicon.ico"/>
        <meta property="og:image" content="/kyulol.png" data-rh="true"></meta>
      </Head>

      <Header />

      <Nav/>

      <Results results={results} />

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());

  return {
    props: {
      results: request.results,
    }
  }

} //server side stuff. This gets exexuted before the rest of the code gets executed, because it is a server side render which is also a lot quicker
