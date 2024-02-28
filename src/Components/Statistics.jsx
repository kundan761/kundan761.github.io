import React, {  } from "react";
import ReactGithubCalendar from "react-github-calendar";
import "../Styles/statistics.css";

const Statistics = () => {

  return (
    <div className="stats" id="statistics">
      <div className='heading-div'>
        <button className='heading-textbtn'>
          <h1 className='mainheading'>Git <span style={{ color: "#0e4166" }}>Stat's</span></h1>
        </button>
      </div>
      <div className="github-calender-div">
        <div className="calendar-container calendar react-activity-calendar">
          {/* <ReactGithubCalendar
            username={"kundan761"}
            style={{ width: "95%", margin: "auto"}}
            // className="calender-git"
            classForValue={(value) => `contribution-level-${value.count}`}
          /> */}
          <img style={{width: "95%" , margin: "auto"}} src="https://ghchart.rshah.org/kundan761" alt=" Github chart" />

        </div>
        </div>
        <div className="git-box">
          <div>
            <img className="github-stats-card" id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=kundan761&count_private=true&theme=vue-dark"
              alt="stat-card" />
          </div>
          <div>
            <img className="github-top-langs" id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=kundan761&layout=compact&theme=vue-dark"
              alt="top laguges"  />
          </div>
          <div>
            <img className="github-streak-stats" id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=kundan761&theme=vue-dark&hide_border=true&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D"
              alt="streakstat" />
          </div>
        </div>
    </div>
  )
}

export default Statistics;