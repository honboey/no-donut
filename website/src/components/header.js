import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import no from "../images/no.gif"
import donut from "../images/donut.gif"

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="flex mb-6 lg:mb-8">
        <img src={no} alt="no" className="lg:w-1/3" />
        <img src={donut} alt="donut" className="lg:w-2/3" />
    </h1>
    <div className="flex justify-between flex-col lg:flex-row lg:flex-row-reverse mb-6">
      <div className="lg:w-2/3">
        <p className="text-2xl lg:text-6xl leading-tight mb-6">
          No Donut is a collection of resources building towards a copless
          future
        </p>
      </div>
      <div className="lg:w-1/3">
        <p className="text-xl lg:text-5xl leading-tight text-right lg:w-3/4">
          {/* <!-- <a href="#submit-a-link" class="underline">Submit a link</a> --> */}
        </p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
