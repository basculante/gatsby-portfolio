import React from "react";
import Layout from "../components/Layout";

import "./work.scss";

const Work = () => {
  return (
    <Layout pageTitle="Work">
      <div className="work-container">
        <section>
          <h2>Professional</h2>
          <ul className="work-list">
            <li className="work-list__item">
              <a href="https://app.voicegain.ai">
                Try one of Voicegain's applications!
              </a>
              <p>Explore one of Voicegain's speech-to-text platforms.</p>
            </li>
            <li className="work-list__item">
              <a href="https://analytics.voicegain.ai">
                Voicegain Speech Analytics
              </a>
              <p>
                Extract business and call center analytics using speech
                analysis.
              </p>
            </li>
            <li className="work-list__item">
              <a href="https://transcribe.voicegain.ai">Voicegain Transcribe</a>
              <p>Transcribe audio from meetings, podcasts, etc.</p>
            </li>
            <li className="work-list__item">
              <a href="https://console.voicegain.ai">Voicegain Console</a>
              <p>
                IVR, ASR, gRPC, MRCP tools for enterprise developers using
                Voicegain's STT platform.
              </p>
            </li>
            <li className="work-list__item">
              <a href="https://amt.ascalon.ai">Voicegain AMT</a>
              <p>Data collection tool to train Voicegain's STT platform.</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Personal</h2>
          <ul className="work-list">
            <li className="work-list__item">
              <a href="https://datenighteats.netlify.app/">Date Night Eats</a>
              <p>Food ordering app for client who makes handmade meals.</p>
            </li>
            <li className="work-list__item">
              <a href="https://peaceful-atoll-85541.herokuapp.com/">
                Standing-Eight!
              </a>
              <p>Track your boxing workouts and learn new techniques.</p>
            </li>
            <li className="work-list__item">
              <a href="https://evening-river-73242.herokuapp.com/">
                Survey Soup
              </a>
              <p>Build a survey and collect data from your users.</p>
            </li>
            <li className="work-list__item">
              <a href="https://youthful-minsky-667d36.netlify.app/">
                Game of Life
              </a>
              <p>Implementation of Conway's Game of Life.</p>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Work;
