import Head from 'next/head'

import '../src/style.css'


function App ({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title> To-do List from @devbpatriciocosta</title>
    </Head>

    <Component {...pageProps} />

    </>
  )
}

export default App;