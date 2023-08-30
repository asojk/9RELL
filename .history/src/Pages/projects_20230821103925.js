import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Projects = () => {
  useEffect(() => {
    const ccShowcaseRoot = document.getElementById('companycam-showcase-root');
    if (!ccShowcaseRoot || !window.fetch) {
      return;
    }
    const ccShowcaseRootParent = document.getElementsByTagName('body')[0];
    const ccShowcaseScript = document.createElement('script');
    ccShowcaseScript.src = 'https://showcase.companycam.com/bundle.js';
    ccShowcaseScript.type = 'text/javascript';
    ccShowcaseRootParent.appendChild(ccShowcaseScript);
  }, []);

  return (
    <><Helmet title="GRELL | Flat Roof Repair" meta={[
      {name: "description", content:"As a midwestern company, we fully understand how harsh winters and humid summers can take a toll on even the sturdiest of roofs.",},
      {name: "keywords", content:"roofing, construction, reapir, flat, flat-roof, roof repair",},]}/>


<section className="pt-12 relative bg-[url(https://grell.s3.us-east-2.amazonaws.com/pics/repair1.jpg)] bg-cover bg-center bg-no-repeat">
<div className="absolute inset-0 bg-d7/75 sm:bg-transparent sm:from-d7/95 sm:to-d7/25 sm:bg-gradient-to-r"></div>
  <div className="relative flex h-screen max-w-[90vw] items-center px-4 py-32 mx-auto">


      <div className="showcase">
        <div
          data-showcase-id="bd0fbd6f-4168-45d7-a25c-0bba7e9817e2"
          id="companycam-showcase-root"
        />
      </div>

  </div>
</section>
</>
  );
};

export default Projects;
