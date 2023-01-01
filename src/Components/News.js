import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';
// import LoadingBar from 'react-top-loading-bar';

export class News extends Component {
  // articles = [
  //   {
  //     "source": { "id": "the-washington-post", "name": "The Washington Post" },
  //     "author": "Washington Post Staff",
  //     "title": "See the scale of Pakistan's flooding in maps, photos and videos - The Washington Post",
  //     "description": "Maps, photos and videos show an « epochal » disaster in Pakistan, with massive floods stretching from Swat in the north to Sindh and Baluchistan in the south.",
  //     "url": "https://www.washingtonpost.com/world/2022/08/31/pakistan-floods-photos-videos-maps/",
  //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VKH3X4BDZII63JZPDZYUSBZPXQ.jpg&w=1440",
  //     "publishedAt": "2022-08-31T16:41:19Z",
  //     "content": "Ratodero, a city in Pakistan's Sindh province, about 300 miles north of Karachi, was hit hard by recent flooding with homes seen destroyed on Aug. 29. (Video: Reuters)\r\nComment on this story\r\nApocaly… [+8191 chars]"
  //   },
  //   {
  //     "source": { "id": "cbs-news", "name": "CBS News" },
  //     "author": "Robert Legare, Melissa Quinn",
  //     "title": "Justice Dept. alleges \"obstructive conduct\" occurred at Mar-a-Lago after request for classified documents - CBS News",
  //     "description": "The Justice Department says Trump's legal team tried to conceal or remove certain records from investigators in the months leading up to the Aug. 8 search.",
  //     "url": "https://www.cbsnews.com/news/trump-search-justice-department-filing-classified-documents-obstruction/",
  //     "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/08/31/f2b10864-44fa-40c7-b1a1-1ae16e851fbc/thumbnail/1200x630/a31c6d31d3aedd6567a3304aa1fd9983/secret-documents.png",
  //     "publishedAt": "2022-08-31T16:00:00Z",
  //     "content": "Washington — The Justice Department filed a 36-page response late Tuesday night to former President Donald Trump's request for a federal judge to appoint a third party to sift through the records sei… [+8502 chars]"
  //   },
  //   {
  //     "source": { "id": "associated-press", "name": "Associated Press" },
  //     "author": "Lindsey Bahr",
  //     "title": "Olivia Wilde in the spotlight with 'Don't Worry Darling' - The Associated Press - en Español",
  //     "description": "“Don’t Worry Darling”  has been in the spotlight since the beginning. And this was long before Harry Styles got involved. It was a film everyone wanted to make — some 18 studios and streaming services were courting Wilde for the chance to partner with her on …",
  //     "url": "https://apnews.com/article/entertainment-olivia-wilde-harry-styles-shia-labeouf-281e8be40eb695a177a658ce5e7314c4",
  //     "urlToImage": "https://storage.googleapis.com/afs-prod/media/f7257d48938642c383b2872d4e744461/3000.jpeg",
  //     "publishedAt": "2022-08-31T15:58:52Z",
  //     "content": "Dont Worry Darling has been in the spotlight since the beginning. And this was long before Harry Styles got involved.\r\nIt was a film everyone wanted to make some 18 studios and streaming services wer… [+5731 chars]"
  //   },
  //   {
  //     "source": { "id": "associated-press", "name": "Associated Press" },
  //     "author": "Derek Gatopoulos",
  //     "title": "UN inspectors head to Ukraine nuclear plant in war zone - The Associated Press - en Español",
  //     "description": "KYIV, Ukraine (AP) — A team of U.N. inspectors made its way toward Ukraine's Zaporizhzhia nuclear power plant  Wednesday on a perilous, long-sought mission to safeguard the site and prevent a catastrophe from the fighting raging around it.",
  //     "url": "https://apnews.com/article/russia-ukraine-united-nations-f984ea649fe758ec066ca1533b31e68f",
  //     "urlToImage": "https://storage.googleapis.com/afs-prod/media/bee75fa90c1e4fce9d5869f654282cfe/3000.jpeg",
  //     "publishedAt": "2022-08-31T15:55:00Z",
  //     "content": "KYIV, Ukraine (AP) A team of U.N. inspectors made its way toward Ukraines Zaporizhzhia nuclear power plant Wednesday on a perilous, long-sought mission to safeguard the site and prevent a catastrophe… [+3987 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "YouTube" },
  //     "author": null,
  //     "title": "14-year-old girl charged with arson in Peachtree City, Georgia, Walmart fire - CBS News",
  //     "description": "A 14-year-old girl has been arrested and charged with arson after a fire at a Walmart in the Atlanta suburb of Peachtree City. The preliminary investigation ...",
  //     "url": "https://www.youtube.com/watch?v=uT7S-_gUK9k",
  //     "urlToImage": "https://i.ytimg.com/vi/uT7S-_gUK9k/maxresdefault.jpg",
  //     "publishedAt": "2022-08-31T15:39:28Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": "associated-press", "name": "Associated Press" },
  //     "author": "Kirsten Grieshaber",
  //     "title": "Gorbachev mourned as rare world leader but some still bitter - The Associated Press - en Español",
  //     "description": "BERLIN (AP) — Mikhail Gorbachev , the last leader of the Soviet Union and for many the man who restored democracy to then-communist-ruled European nations, was saluted Wednesday as a rare leader who changed the world and for a time brought hope for peace amon…",
  //     "url": "https://apnews.com/article/mikhail-gorbachev-world-leaders-react-8c11998dcfe20b8928e15644ce935c8d",
  //     "urlToImage": "https://storage.googleapis.com/afs-prod/media/6bac96afbcee4d968be373b53a4c70d6/2051.jpeg",
  //     "publishedAt": "2022-08-31T15:38:22Z",
  //     "content": "BERLIN (AP) Mikhail Gorbachev, the last leader of the Soviet Union and for many the man who restored democracy to then-communist-ruled European nations, was saluted Wednesday as a rare leader who cha… [+7348 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Yahoo Entertainment" },
  //     "author": "Dalton Del Don",
  //     "title": "Fantasy Football 2022: Five sleeper wide receivers to consider drafting in the late rounds - Yahoo Sports",
  //     "description": "Dalton Del Don reveals five wide receivers he thinks makes for smart late-round picks in fantasy football drafts.",
  //     "url": "https://sports.yahoo.com/fantasy-football-2022-five-sleeper-wide-receivers-to-consider-drafting-in-the-late-rounds-144844123.html",
  //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/7RESQrAeRmIlt.dV9V8Opw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTg-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/698b4ea0-293b-11ed-bdfe-0c733e34a6b4",
  //     "publishedAt": "2022-08-31T14:48:44Z",
  //     "content": "McKenzie was top-10 in EPA/route run last season and has averaged a mere 27.0 fantasy points during games where hes seen more than six targets since 2019. He easily beat Jamison Crowder to win Buffal… [+2472 chars]"
  //   },
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Catherine Thorbecke",
  //     "title": "Snapchat to lay off more than 1,200 staffers, or 20% of global headcount - CNN",
  //     "description": "Snap Inc., the parent company of the popular app Snapchat, announced plans to lay off some 20% of its more than 6,400 global employees.",
  //     "url": "https://www.cnn.com/2022/08/31/tech/snapchat-layoffs/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220831095103-02-snapchat-app-stock.jpg?q=w_800,c_fill",
  //     "publishedAt": "2022-08-31T14:37:00Z",
  //     "content": "Snap Inc., the parent company of the popular app Snapchat, announced plans to lay off some 20% of its more than 6,400 global employees. \r\nThe news will impact the jobs of more than 1,200 staffers at … [+1969 chars]"
  //   },
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Theresa Waldrop, CNN",
  //     "title": "What it's like trying to survive without water in Jackson, Mississippi - CNN",
  //     "description": "Most people in the United States take it for granted that when you turn on a faucet, you get potable water.",
  //     "url": "https://www.cnn.com/2022/08/30/us/jackson-mississippi-water-crisis-effects/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220830171225-01-jackson-mississippi-water-crisis-effects-super-tease.jpg",
  //     "publishedAt": "2022-08-31T14:15:00Z",
  //     "content": "(CNN)Most people in the United States take it for granted that when you turn on a faucet, you get potable water. \r\nPeople in Jackson, Mississippi, are now coping with what happens when there's no wat… [+5974 chars]"
  //   },
  //   {
  //     "source": { "id": "the-washington-post", "name": "The Washington Post" },
  //     "author": "Julian Mark",
  //     "title": "Last living Monkees member wants to see band’s FBI, lawsuit says - The Washington Post",
  //     "description": "The FBI surveilled the Monkees in the 1960s. The band's only remaining living member wants to know more.",
  //     "url": "https://www.washingtonpost.com/nation/2022/08/31/monkees-lawsuit-fbi/",
  //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5AC7NOODXJD55MYL74XQYNJZSM.jpg&w=1440",
  //     "publishedAt": "2022-08-31T14:02:05Z",
  //     "content": "Comment on this story\r\nThe Monkees werent exactly the poster children of the anti-Vietnam War movement in the late 1960s, but the pop-rock band was still the subject of an FBI file. In it, an agent r… [+3710 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "YouTube" },
  //     "author": null,
  //     "title": "Lord of the Rings: The Rings of Power TV Review - JoBlo Originals",
  //     "description": null,
  //     "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFDBjKC66ZJk",
  //     "urlToImage": null,
  //     "publishedAt": "2022-08-31T14:00:06Z",
  //     "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
  //   },
  //   {
  //     "source": {
  //       "id": "the-wall-street-journal",
  //       "name": "The Wall Street Journal"
  //     },
  //     "author": "Inti Pacheco",
  //     "title": "Bed Bath & Beyond to Close 150 Stores, Cut Staff, Sell Shares to Raise Cash - The Wall Street Journal",
  //     "description": "The struggling home-goods chain also plans to cut corporate and supply-chain staff, as it strives to turn itself around.",
  //     "url": "https://www.wsj.com/articles/bed-bath-beyond-shares-tumble-on-plans-to-issue-stock-11661945232",
  //     "urlToImage": "https://images.wsj.net/im-612102/social",
  //     "publishedAt": "2022-08-31T13:43:00Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": "ars-technica", "name": "Ars Technica" },
  //     "author": "Eric Berger",
  //     "title": "A faulty sensor may have scrubbed the launch of NASA’s massive SLS rocket - Ars Technica",
  //     "description": "\"The way the sensor is behaving does not line up with the physics of the situation.\"",
  //     "url": "https://arstechnica.com/science/2022/08/nasa-will-make-second-attempt-to-launch-the-sls-rocket-on-saturday/",
  //     "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/03/SLS-Mar-17-2022-2330-760x380.jpg",
  //     "publishedAt": "2022-08-31T13:41:11Z",
  //     "content": "Enlarge/ NASA's SLS rocket may now launch on Saturday, September 3, 2022.\r\n97 with 72 posters participating, including story author\r\nAfter scrubbing a launch attempt of the Space Launch System rocket… [+4248 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "New York Post" },
  //     "author": "Jack Hobbs",
  //     "title": "Nicole Brown Simpson's sister slams Chris Rock over joke about her murder - New York Post ",
  //     "description": "Nicole Brown Simpson’s sister, Tanya, slammed comedian Chris Rock Wednesday over an insensitive joke he made about her sister’s murder.",
  //     "url": "https://nypost.com/2022/08/31/nicole-brown-simpsons-sister-slams-chris-rock-for-murder-joke/",
  //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/chris-rock-Nicole-Brown-Simpson-.jpg?quality=75&strip=all&w=1024",
  //     "publishedAt": "2022-08-31T13:31:00Z",
  //     "content": "Nicole Brown Simpson’s sister, Tanya, slammed comedian Chris Rock Wednesday over an insensitive joke he made about her sister’s murder.\r\nTanya Brown told TMZ that the joke wasn’t only not funny, but … [+2097 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Pats Pulpit" },
  //     "author": "Bernd Buchmasser, Oliver Thomas",
  //     "title": "Patriots practice squad and waiver wire tracker: News, rumors, signings, analysis - Pats Pulpit",
  //     "description": "New England is building its practice squad today.",
  //     "url": "https://www.patspulpit.com/2022/8/31/23330492/2022-patriots-practice-squad-waiver-wire-tracker-news-rumors-analysis-signings",
  //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/8aRPCSwlSejM77zubszgcpWDUKo=/0x229:3237x1924/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23984689/1415224197.jpg",
  //     "publishedAt": "2022-08-31T13:30:00Z",
  //     "content": "With the New England Patriots initial 53-man roster set, all eyes now turn to the practice squad and waiver wire.\r\nAs of 12 p.m. ET on Wednesday, the claiming deadline for players with less than four… [+1922 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "New York Post" },
  //     "author": "Ben Cost",
  //     "title": "1-year-old girl killed by massive hailstone during freak storm - New York Post ",
  //     "description": "A 1-year-old girl perished after being struck by a 4-inch-wide hailstone during Catalonia’s worst storm in 20 years.",
  //     "url": "https://nypost.com/2022/08/31/tot-killed-by-orange-sized-hail-during-nightmare-storm/",
  //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/freak-hailstorm-spain-girl-dead-comp-2.jpg?quality=75&strip=all&w=1024",
  //     "publishedAt": "2022-08-31T13:17:00Z",
  //     "content": "A 1-year-old girl died Wednesday after getting hit by a giant hailstone amid a freak storm that battered Eastern Spain on Tuesday.\r\nThe toddler had reportedly been struck by an ice ball that measured… [+2075 chars]"
  //   },
  //   {
  //     "source": { "id": "engadget", "name": "Engadget" },
  //     "author": "https://www.engadget.com/about/editors/igor-bonifacic",
  //     "title": "What we bought: An NVIDIA RTX 3070, two years late - Engadget",
  //     "description": "It only took about two years, but I finally bought an NVIDIA RTX 3070 last month..",
  //     "url": "https://www.engadget.com/nvidia-rtx-3070-gpu-irl-130046278.html",
  //     "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/cdcfed20-2928-11ed-9f7f-1c66f75ec8f9",
  //     "publishedAt": "2022-08-31T13:06:24Z",
  //     "content": "It only took about two years, but I finally bought an NVIDIA RTX 3070 last month. Along the way, I tried almost everything I could to get my hands on one at the actual retail price. I joined Discord … [+3066 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "YouTube" },
  //     "author": null,
  //     "title": "Special Master In Trump Case Could Harm National Security, DOJ Says - NBC News",
  //     "description": "In a court filing late on Tuesday night, the Justice Department argued against appointing a “special master” to review documents seized from former President...",
  //     "url": "https://www.youtube.com/watch?v=QS1U0igPJlo",
  //     "urlToImage": "https://i.ytimg.com/vi/QS1U0igPJlo/maxresdefault.jpg",
  //     "publishedAt": "2022-08-31T13:00:14Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": null, "name": "FDA.gov" },
  //     "author": "Office of the Commissioner",
  //     "title": "Coronavirus (COVID-19) Update: FDA Authorizes Moderna, Pfizer-BioNTech Bivalent COVID-19 Vaccines for Use as a Booster Dose - FDA.gov",
  //     "description": "The FDA authorized bivalent formulations of the Moderna COVID-19 Vaccine and the Pfizer-BioNTech COVID-19 Vaccine for use as a single booster dose.",
  //     "url": "https://www.fda.gov/news-events/press-announcements/coronavirus-covid-19-update-fda-authorizes-moderna-pfizer-biontech-bivalent-covid-19-vaccines-use",
  //     "urlToImage": "https://www.fda.gov/themes/custom/preview/img/FDA-Social-Graphic.png",
  //     "publishedAt": "2022-08-31T13:00:00Z",
  //     "content": "For Immediate Release:\r\nAugust 31, 2022\r\nToday, the U.S. Food and Drug Administration amended the emergency use authorizations (EUAs) of the Moderna COVID-19 Vaccine and the Pfizer-BioNTech COVID-19 … [+12491 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Sports Illustrated" },
  //     "author": "Ross Dellenger",
  //     "title": "City vs. Country. Steel vs. Coal. The Pitt–West Virginia Brawl Returns! - Sports Illustrated",
  //     "description": "One of college football’s greatest rivalries is a reminder of the sport’s rich tradition, pageantry and, for some, agonizing history.",
  //     "url": "https://www.si.com/college/2022/08/31/west-virginia-pitt-backyard-brawl-returns-daily-cover",
  //     "urlToImage": "https://www.si.com/.image/t_share/MTkxOTg4Mjc1MTk0MzczNTc1/dcovbackyardbrawl_notext.jpg",
  //     "publishedAt": "2022-08-31T12:58:00Z",
  //     "content": "Long before he evolved into a wrestling and broadcasting star, even before he burst onto the scene as a prized NFL punter, Pat McAfee drove aimlessly across the American terrain. \r\nIt has been 15 yea… [+23508 chars]"
  //   }
  // ]
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}  NewsMonkey`;
  }

  async updateNews() {
    // this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=79202fe8c18e481986c45f19397ae0a0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, });
    // this.props.setProgress(100);
  }


  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=79202fe8c18e481986c45f19397ae0a0&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=79202fe8c18e481986c45f19397ae0a0=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }

  handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=79202fe8c18e481986c45f19397ae0a0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json()
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.props.setProgress(10);
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=79202fe8c18e481986c45f19397ae0a0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
    this.props.setProgress(100);
  };

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsMonk {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        > */}
          <div className="row my-3">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl=
                  {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}> &larr;Previous</button>
          <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-danger" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News



// function book(){
//   return(
//     <div>

//     </div>
//   );
// }

// export default book