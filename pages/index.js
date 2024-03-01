import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Gilad Levi Bio</title>
          <meta name="description" content="This Is my bio updated to 6/21" />
          <meta property="og:title" content="Gilad Levi Bio" />
          <meta
            property="og:description"
            content="This Is my bio updated to 6/21"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/27ca5bf6-0ad4-48d7-86a4-8b95f79e2464/bb330db7-0a3d-4607-a719-d924d6b9ebe1?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <div className="home-main">
          <div className="home-col-2">
            <span className="home-text">
              <span>Hi</span>
              <br></br>
            </span>
            <span className="home-text03">
              <span>I am Gilad Levi</span>
              <br></br>
            </span>
          </div>
          <div className="home-col-3">
            <img
              alt="Gilad Levi"
              src="/2099419-200h1.webp"
              width="150"
              height="150"
              loading="lazy"
              className="home-image"
            />
          </div>
          <span className="home-text06">
            <span>Software &amp; Web Developer</span>
            <br></br>
          </span>
          <div className="home-col-5">
            <span className="home-text09">
              <span>Experience: 25y +</span>
              <br></br>
            </span>
          </div>
          <div className="home-col-6">
            <span className="home-text12">
              <span className="home-text13">Programming Languages:</span>
              <br></br>
            </span>
            <span className="home-text15">
              <span>C, C++, Ruby, Python, Javascript, PHP, Go.</span>
              <br></br>
            </span>
          </div>
          <div className="home-col-7">
            <span className="home-text18">
              <span>Web UI &amp; API Tech:</span>
              <br className="H5"></br>
            </span>
            <span className="home-text21">
              <span>HTML5, CSS3, SASS, LESS, Tailwind, GraphQL.</span>
              <br></br>
            </span>
          </div>
          <div className="home-col-8">
            <span className="home-text24">
              <span>Web Frameworks:</span>
              <br className="H5"></br>
            </span>
            <span className="home-text27">
              <span>
                Dejango, Ruby on Rails, Vue.js, Express.js, Backbone.js,
                Next.js, Angular.
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-col-9">
            <span className="home-text30">
              <span>C++ Frameworks:</span>
              <br className="H5"></br>
            </span>
            <span className="home-text33">
              <span>Openframeworks, POCO, ASIO.</span>
              <br></br>
            </span>
          </div>
          <div className="home-col-10">
            <span className="home-text36">
              <span>Libraries:</span>
              <br></br>
            </span>
            <span className="home-text39">
              <span>Socket.io, Node.js, Threejs, GSAP, Ionic.</span>
              <br></br>
            </span>
          </div>
          <div className="home-col-11">
            <span className="home-text42">
              <span>Github</span>
              <br></br>
            </span>
          </div>
          <div className="home-col-12">
            <a
              href="https://github.com/Giladx"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <img
                alt="Gilad Levi Github"
                src="/github-200h.webp"
                width="80"
                height="80"
                loading="lazy"
                className="home-image1"
              />
            </a>
          </div>
          <div className="home-col-13">
            <span className="home-text45">
              <span>Email</span>
              <br></br>
            </span>
            <a
              href="mailto:gilad@011.ninja?subject=New Email From Bio"
              className="home-text48 H5"
            >
              <span>gilad@011.ninja</span>
              <br></br>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 10vw;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #090909;
          }
          .home-col-2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 5em;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Khand;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-text03 {
            color: #ffffff;
            width: 100%;
            font-size: 5em;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Khand;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-col-3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
          }
          .home-text06 {
            color: #ffffff;
            width: 100%;
            font-size: 5em;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Khand;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-col-5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text09 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 3em;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Khand;
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-col-6 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text12 {
            width: 100%;
            font-size: 3em;
            font-family: Khand;
            font-weight: 500;
            line-height: 1.3;
            text-transform: none;
            text-decoration: none;
          }
          .home-text13 {
            color: #ffffff;
          }
          .home-text15 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 4vw;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Khand;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-col-7 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text18 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 3em;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Khand;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text21 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 4vw;
            margin-top: 0.2em;
            font-family: Khand;
            font-weight: 300;
            margin-bottom: 0.2em;
            text-transform: none;
            text-decoration: none;
          }
          .home-col-8 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text24 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 3em;
            font-family: Khand;
            font-weight: 500;
          }
          .home-text27 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 4vw;
            margin-top: 0.2em;
            font-family: Khand;
            font-weight: 300;
            margin-bottom: 0.2em;
            text-transform: none;
            text-decoration: none;
          }
          .home-col-9 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text30 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 3em;
            font-family: Khand;
            font-weight: 500;
          }
          .home-text33 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 4vw;
            margin-top: 0.2em;
            font-family: Khand;
            font-weight: 300;
            margin-bottom: 0.2em;
            text-transform: none;
            text-decoration: none;
          }
          .home-col-10 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text36 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 3em;
            font-family: Khand;
            font-weight: 500;
          }
          .home-text39 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 4vw;
            margin-top: 0.2em;
            font-family: Khand;
            font-weight: 300;
            margin-bottom: 0.2em;
            text-transform: none;
            text-decoration: none;
          }
          .home-col-11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text42 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 3em;
            font-family: Khand;
            font-weight: 500;
          }
          .home-col-12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-link {
            display: contents;
          }
          .home-image1 {
            width: 80px;
            height: 80px;
            margin-top: 0.2em;
            object-fit: cover;
            margin-bottom: 0.2em;
            text-decoration: none;
          }
          .home-col-13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text45 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 3em;
            font-family: Khand;
            font-weight: 500;
          }
          .home-text48 {
            color: yellow;
            width: 100%;
            margin-top: 0.2em;
            margin-bottom: 0.2em;
          }
          @media (max-width: 1600px) {
            .home-text27 {
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .home-main {
              padding: 5vw;
            }
          }
          @media (max-width: 479px) {
            .home-main {
              padding: 2vw;
            }
            .home-text {
              font-size: 3em;
              line-height: 1em;
            }
            .home-text03 {
              font-size: 3em;
              line-height: 1em;
            }
            .home-col-3 {
              margin-top: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text06 {
              color: rgb(255, 255, 255);
              font-size: 3em;
              font-family: Khand;
              font-weight: 700;
              line-height: 1em;
              text-transform: none;
              text-decoration: none;
            }
            .home-text09 {
              color: rgb(255, 255, 255);
              font-size: 2em;
              font-family: Khand;
              font-weight: 500;
              line-height: 1em;
              text-transform: none;
              text-decoration: none;
            }
            .home-text12 {
              font-size: 2em;
              margin-top: var(--dl-space-space-halfunit);
              line-height: 1em;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text15 {
              font-size: 8vw;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text18 {
              font-size: 2em;
              margin-top: var(--dl-space-space-halfunit);
              line-height: 1em;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text21 {
              font-size: 8vw;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text24 {
              font-size: 2em;
              margin-top: var(--dl-space-space-halfunit);
              line-height: 1em;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text27 {
              font-size: 8vw;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text30 {
              font-size: 2em;
              margin-top: var(--dl-space-space-halfunit);
              line-height: 1em;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text33 {
              font-size: 8vw;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text36 {
              font-size: 2em;
              margin-top: var(--dl-space-space-halfunit);
              line-height: 1em;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text39 {
              font-size: 8vw;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text42 {
              font-size: 2em;
              margin-top: var(--dl-space-space-halfunit);
              line-height: 1em;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text45 {
              font-size: 2em;
              margin-top: var(--dl-space-space-halfunit);
              line-height: 1em;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text48 {
              font-size: 3em;
              margin-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
