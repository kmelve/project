import React, { useEffect, useState } from 'react';
import client from '../lib/sanity';
import IntroModule from '../components/introModule.js';
import '../styles/app.scss';
import SocialModule from '../components/socialModule.js';
import FeatureModule from '../components/featureModule.js';
import SupportModule from '../components/supportModule.js';
import Footer from '../components/footer.js';

function LandingPage() {
  const [moduleData, setModuleData] = useState([]);

  useEffect(() => {
    const query = `*[_type == "introModule"]
    {_id,
     "introModule": *[_type == "introModule"],
     "featureModule": *[_type == "featureModule"],
      "socialModule": *[_type == "socialModule"],
     "supportModule": *[_type == "supportModule"],
     "footerModule": *[_type == "footerModule"],
    }`;

    client.fetch(query).then(data => {
      setModuleData(data[0]);
    });
  }, []);
  return (
    <div className="App">
      <IntroModule m={moduleData.introModule} />
      <SocialModule m={moduleData.socialModule} />
      <FeatureModule m={moduleData.featureModule} />
      <SupportModule m={moduleData.supportModule} />
      <Footer m={moduleData.footerModule} />
    </div>
  );
}

export default LandingPage;
