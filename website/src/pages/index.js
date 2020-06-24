import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
    <section>
      <ul>
        <li className="flex flex-col lg:flex-row mb-12 lg:mb-20">
          <div className="lg:w-1/3">
            <aside className="lg:w-3/4">
              <p className="text-sm lg:text-xl leading-snug lg:text-right font-plex-mono">
                <i>Australian Broadcast Service (ABC)</i>
                <br />
                Audio (16min 16sec)
              </p>
            </aside>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-xl lg:text-5xl leading-tight underline mb-2 lg:mb-4">
              <a href="https://www.abc.net.au/radio/programs/the-signal/does-australia-have-a-policing-problem-too/12318430">
                Does Australia have a policing problem too?
              </a>
            </h2>
            <p className="lg:text-3xl leading-snug">
              An outline of policing in Australia, detailing its history in
              aiding White occupiers during invasion and how it has maintained
              its racists roots. In particular they reference a clip of a white
              Australian police officer slamming an indigenous teenager
              face-first into the ground
            </p>
          </div>
        </li>
        <li className="flex flex-col lg:flex-row mb-12 lg:mb-20">
          <div className="lg:w-1/3">
            <aside className="lg:w-3/4">
              <p className="text-sm lg:text-xl leading-snug lg:text-right font-plex-mono">
                <i>The Guardian</i>
                <br />
                Article (770 words, 4min)
              </p>
            </aside>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-xl lg:text-5xl leading-tight underline mb-2 lg:mb-4">
              <a href="https://www.theguardian.com/commentisfree/2020/may/31/the-answer-to-police-violence-is-not-reform-its-defunding-heres-why">
                The answer to policing violence is not "reform". It's defunding.
                Here's why
              </a>
            </h2>
            <p className="lg:text-3xl leading-snug">
              &ldquo;&lsquo;procedural justice&rsquo;&#133;assumes that the
              police are neutrally enforcing a set of laws that are
              automatically beneficial to everyone. Instead of questioning the
              validity of using police to wage an inherently racist war on
              drugs, advocates of &lsquo;procedural justice&rsquo; politely
              suggest that police get anti-bias training, which they will
              happily deliver for no small fee.&rdquo;
            </p>
          </div>
        </li>
        <li className="flex flex-col lg:flex-row mb-12 lg:mb-20">
          <div className="lg:w-1/3">
            <aside className="lg:w-3/4">
              <p className="text-sm lg:text-xl leading-snug lg:text-right font-plex-mono">
                <i>Workers Solidarity</i>
                <br />
                Article (660 words, 3min)
              </p>
            </aside>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-xl lg:text-5xl leading-tight underline mb-2 lg:mb-4">
              <a href="https://www.workerssolidarity.org.au/analysis_arepoliceworkers">
                Are the police workers like the rest of us?
              </a>
            </h2>
            <p className="lg:text-3xl leading-snug">
              “In a newly colonised country like Australia, the police served
              the additional purpose of protecting and supporting the expansion
              of the colony into the new lands of inland Australia. Again, it is
              clear that this role made the police the protectors, if not the
              enforcers, of the dispossession and the genocide against the
              Indigenous people.”
            </p>
          </div>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
