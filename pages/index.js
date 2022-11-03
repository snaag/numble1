import Head from 'next/head'

export const HOME = '홈';


export default function Home() {
  return (
      <div className="home">
          <Head>
              <title>{HOME}</title>
          </Head>
          <h2 className="home__title">Updated news</h2>
          <div className="home__top">
              <div className="top__news">
                  <div className="news__line"></div>
                  <ul className="news__diary-list">
                      <li className="diary__item">^^</li>
                      <li className="diary__item">^^</li>
                      <li className="diary__item">^^</li>
                      <li className="diary__item">^^</li>
                  </ul>
              </div>
          </div>
    </div>
  )
}
