import * as React from 'react';

import faqs from './faqs.yaml';

export default function XRPLedger() {
  // React.useEffect(() => {
  //   $(document).ready(() => {
  //     //top video. Show inline replacing image
  //     $('#playvideo').click(function (event) {
  //       $('#playvideo').hide();
  //       $('#video1').show();
  //       $('#video1')[0].src += '?autoplay=1';
  //       event.preventDefault();
  //     });

  //     //bottom 3. Show in overlay
  //     $('.btn1').click(function (event) {
  //       var src = $(this).attr('data-url');
  //       $('#player').attr('src', src);
  //       $('#video, #video-overlay').fadeIn('slow');
  //       event.preventDefault();
  //     });
  //   });

  //   $(document).on('touchend, mouseup', function (e) {
  //     if (!$('#video').is(e.target)) {
  //       $('#video, #video-overlay').fadeOut('slow');
  //       $('#player').attr('src', '');
  //     }
  //   });
  // }, []);

  return (
    <div className="overflow-hidden">
      <div id="video-overlay" />
      <div id="video">
        <div id="videoWrapper">
          <iframe id="player" width={853} height={480} src frameBorder={0} allowFullScreen />
        </div>
      </div>
      <div className="position-relative">
        <img
          src={require('../img/backgrounds/xrpl-overview-purple.svg')}
          className="landing-bg"
          id="xrpl-overview-purple"
        />
      </div>
      <section className="py-26 text-center">
        <div className="col-lg-5 mx-auto text-center">
          <div className="d-flex flex-column-reverse">
            <h1 className="mb-0">XRPL Today and the Vision for Tomorrow</h1>
            <h6 className="eyebrow mb-3">XRPL | XRP Ledger Overview</h6>
          </div>
        </div>
      </section>
      <div className="position-relative d-none-sm">
        <img src="/img/xrpl-overview-orange.svg" id="xrpl-overview-orange" />
      </div>
      <section className="container-new py-26">
        <div className="card-grid card-grid-2xN">
          <div className="col">
            <div className="d-flex flex-column-reverse">
              <h2 className="h4 h2-sm mb-8">How the XRP Ledger works</h2>
              <h6 className="eyebrow mb-3">XRP Ledger Basics</h6>
            </div>
            <h5 className="longform mb-10">The XRP Ledger is a decentralized public blockchain.</h5>
            <p className="mb-4">
              Anyone can connect their computer to the peer-to-peer network that manages the ledger. The global XRP
              Ledger community—a diverse set of software engineers, server operators, users, and businesses—maintains
              the ledger.
            </p>
            <div className="d-none d-lg-block">
              <a className="btn btn-primary btn-arrow" href="docs.html">
                Read Technical Docs
              </a>{' '}
              <a
                className="ml-4 video-external-link"
                target="_blank"
                href="https://www.youtube.com/playlist?list=PLJQ55Tj1hIVZtJ_JdTvSum2qMTsedWkNi"
              >
                Watch Explainer Videos
              </a>
            </div>
          </div>
          <div className="col">
            <iframe
              id="video1"
              style={{ display: 'none' }}
              width={560}
              height={315}
              src="https://www.youtube.com/embed/sVTybJ3cNyo"
              title="Intro to the XRP Ledger"
              frameBorder={0}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <a href="#" id="playvideo">
              <img
                src={require('../assets/img/overview/video_explainer_intro@2x.png')}
                id="xrpl-overview-video-intro"
                className="w-100 video-image"
              />
            </a>
            <div className="text-center d-lg-none">
              <a className="btn btn-primary btn-arrow mt-5 mb-4" href="docs.html">
                Read Technical Docs
              </a>{' '}
              <a
                className="ml-4 video-external-link"
                target="_blank"
                href="https://www.youtube.com/playlist?list=PLJQ55Tj1hIVZtJ_JdTvSum2qMTsedWkNi"
              >
                Watch Explainer Videos
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container-new py-26">
        <div className="card-grid card-grid-2xN">
          <div className="col">
            <div className="d-flex flex-column-reverse">
              <h2 className="h4 h2-sm mb-8">How the Consensus Protocol works</h2>
              <h6 className="eyebrow mb-3">Consensus</h6>
            </div>
            <h5 className="longform mb-10">
              XRPL uses a consensus protocol, in which designated servers called{' '}
              <a href="run-a-rippled-validator.html">validators</a> come to an agreement on the order and outcome of XRP
              transactions every 3-5 seconds.
            </h5>
            <p className="mb-6">
              All servers in the network process each transaction according to the same rules, and any transaction that
              follows the protocol is confirmed right away. All transactions are public, with strong cryptography to
              guarantee the integrity of the system.
            </p>
            <p className="mb-0">
              Anyone can operate a validator; currently, over 150{' '}
              <a href="https://livenet.xrpl.org/network/validators" target="_blank">
                validators
              </a>{' '}
              are active on the ledger, operated by universities, exchanges, businesses, and individuals. Additionally,
              the consensus protocol ensures the blockchain becomes more decentralized over time as the validator pool
              grows.
            </p>
          </div>
          <div className="col mb-16-sm">
            <img className="mw-100" id="validator-graphic" alt="(Graphic: Validators in Consensus)" />
          </div>
        </div>
      </section>
      <section className="container-new py-26">
        <div className="col-md-6 offset-md-3 p-6-sm p-10-until-sm br-8 cta-card">
          <img src={require('../img/backgrounds/cta-xrpl-overview-green.svg')} className="cta cta-bottom-right" />
          <div className="z-index-1 position-relative">
            <h2 className="h4 mb-10-until-sm mb-8-sm">A Greener Blockchain</h2>
            <p className="mb-10">
              Unlike most other blockchains, the XRP Ledger does not need mining, so{' '}
              <a href="impact.html">no energy is wasted</a> in the transaction process. Learn how this compares to other
              platforms with our <a href="carbon-calculator.html">Green Currency Calculator</a>.
            </p>
            <a className="btn btn-primary btn-arrow" href="impact.html">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section className="container-new py-26">
        <div className="card-grid card-grid-2xN">
          <div className="col">
            <div className="d-flex flex-column-reverse">
              <h4 className="h4 h2-sm mb-8">XRPL provides powerful utility across the blockchain space</h4>
              <h6 className="eyebrow mb-3">XRPL Today</h6>
            </div>
            <h5 className="longform mb-10">
              The ledger’s unique properties, such as its fast and efficient consensus algorithm and
              censorship-resistant transaction processing, are leveraged by thousands of developers.{'{'}% endtrans %
              {'}'}
            </h5>
            <p className="mb-10">
              With the XRPL, these developers are building innovative projects and applications across blockchain use
              cases including tokenization of assets, online gaming, asset custody, NFTs, and DeFi.
            </p>
            <a className="btn btn-primary btn-arrow mb-10-sm" href="uses.html">
              Explore More
            </a>
          </div>
          <div className="col mb-0">
            <div className="d-flex flex-column-reverse">
              <h4 className="h4 h2-sm mb-8">Fulfilling the vision of the XRPL community</h4>
              <h6 className="eyebrow mb-3">XRPL Tomorrow</h6>
            </div>
            <h5 className="longform mb-10">
              While XRPL is the choice of developers who don’t want to sacrifice security or performance and who want to
              build on the greenest blockchain, that’s only the beginning.{'{'}% endtrans %{'}'}
            </h5>
            <p className="mb-0">
              As a community-led blockchain, XRPL’s vision is also a community effort.{' '}
              <a href="https://xrplf.org/" target="_blank">
                The XRPL Foundation
              </a>{' '}
              is currently collaborating with community members to define a shared vision statement. Stay tuned for more
              on this effort—we can’t wait to share it with you.
            </p>
          </div>
        </div>
      </section>
      <section className="container-new py-26">
        <div className="d-flex flex-column-reverse col-xl-6 mb-lg-4 pl-0 ">
          <h2 className="h4 h2-sm">Watch the explainer video series to learn more about the XRP Ledger</h2>
          <h6 className="eyebrow mb-3">Tune In</h6>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 d-flex justify-content-between w-100 mx-0 mx-md-n3 mt-md-5">
          <div className="px-md-3 pt-5 pt-md-0">
            <a
              href="#"
              className="btn1"
              data-url="https://www.youtube.com/embed/k6VqEkqRTmk?rel=0&showinfo=0&autoplay=1"
            >
              <img
                src={require('../assets/img/overview/video_explainer_consensus@2x.png')}
                id="xrpl-overview-video-consensus"
                className="w-100 video-image"
              />
            </a>
            <div className="mt-2">
              <h4 className="video-title mt-3 mb-0">The Consensus Mechanism</h4>
            </div>
          </div>
          <div className="px-md-3 pt-5 pt-md-0">
            <a
              href="#"
              className="btn1"
              data-url="https://www.youtube.com/embed/JjaVDXPqnbA?rel=0&showinfo=0&autoplay=1"
            >
              <img
                src={require('../assets/img/overview/video_explainer_nodes@2x.png')}
                id="xrpl-overview-video-nodes"
                className="w-100 video-image"
              />
            </a>
            <div className="mt-2">
              <h4 className="video-title mt-3 mb-0">Nodes and Validators</h4>
            </div>
          </div>
          <div className="px-md-3 pt-5 pt-md-0">
            <a
              href="#"
              className="btn1"
              data-url="https://www.youtube.com/embed/WsmldDNGQ9s?rel=0&showinfo=0&autoplay=1"
            >
              <img
                src={require('../assets/img/overview/video_explainer_sustainability@2x.png')}
                id="xrpl-overview-video-sustainability"
                className="w-100 video-image"
              />
            </a>
            <div className="mt-2">
              <h4 className="video-title mt-3 mb-0">Sustainability of the XRP Ledger</h4>
            </div>
          </div>
        </div>
        <div className="pt-5 w-100">
          <a
            className="btn btn-primary btn-arrow"
            target="_blank"
            href="https://www.youtube.com/channel/UC6zTJdNCBI-TKMt5ubNc_Gg"
          >
            Watch Full Series on YouTube
          </a>
        </div>
      </section>
      <section className="container-new py-26">
        <div className="col-md-6 offset-md-3 p-6-sm p-10-until-sm br-8 cta-card">
          <img src={require('../img/backgrounds/cta-xrpl-overview-orange.svg')} className="cta cta-bottom-right" />
          <div className="z-index-1 position-relative">
            <h4 className="h4 mb-10-until-sm mb-8-sm">Tomorrow’s Blockchain Starts With You</h4>
            <p className="mb-10">
              XRP Ledger’s innovation relies on the shared community experience of builders like you. If you’re ready to
              start your next big blockchain project, explore the XRPL now and consider applying for an XRPL Grant.
            </p>
            <a className="btn btn-primary btn-arrow" href="https://xrplgrants.org/" target="_blank">
              XRPL Grants
            </a>
          </div>
        </div>
      </section>
      <section className="container-new py-26">
        <div className="col-md-6 offset-md-3 w-100 pl-0 pr-0 mini-faq" id="minifaq-accordion">
          {faqs.map((faq, idx) => (
            <FAQItem faq={faq} key={idx} idx={idx} />
          ))}
          <center>
            <a className="btn btn-primary btn-arrow mt-20" href="faq.html">
              View Full FAQ
            </a>
          </center>
        </div>
      </section>
    </div>
  );
}

function FAQItem(props) {
  const faq = props.faq;
  const idx = props.idx;

  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <div className="q-wrapper">
      <a
        // href={`#heading${idx}`}
        onClick={() => setIsOpened(!isOpened)}
        className="expander collapsed"
        data-toggle="collapse"
        data-target="#answer{{loop.index}}"
        aria-expanded="false"
        aria-controls="answer{{loop.index}}"
      >
        <h4 id={`heading${idx}`}>
          {faq.question}
          <span className="chevron">
            <span />
            <span />
          </span>
        </h4>
      </a>
      <div
        id="answer{{loop.index}}"
        className={'answer-wrapper ' + (isOpened ? '' : 'collapse')}
        aria-labelledby="heading{{loop.index}}"
      >
        <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
      </div>
    </div>
  );
}
