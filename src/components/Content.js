import React from 'react'
import {Link} from "react-router-dom"
import poster from "../assets/images/poster.jpg"
import poster1 from "../assets/images/poster1.jpg"
import "../assets/css/content.css";
const Content = () => {
    return (
        <content>
            <div className="contentcontainer">
            <div className="left">   <h1>Disney Movies</h1><p>The power of the Disney brand has heightened the need for academics to question whether
Disney films and music function as a tool of the Western elite that shapes the views of those less
empowered (Anjirbag; Armstrong; Hodge). Given its global reach, how the Walt Disney Company
handles the role of race, gender, and sexuality in social structural inequality merits serious reflection
according to a number of the articles in this volume (Harris; Hine, Ivanovic, and England; Perea;
Uppal).Regardless of discrepant views about the significance of Disney fare, its films simultaneously
mirror societal trends and reshape them.</p></div>
            <img className="mainposter" src={poster} alt="poster"></img>
            </div>
            <div className="contentcontainer1">
            <img className="mainposter1" src={poster1} alt="poster"></img>
            <div className="right">   <h1>Media</h1><p>The media effects literature provides the foreground for studying portrayals of families in media.
Given that children’s learning is a vicarious experience and that many children encounter visual media
regularly, it stands to reason that repeated exposure to portrayed modeled behavior can influence
children’s perceptions of social norms. Thus, in light of both cultivation analysis and SLT, assessment
of the types of messages that children encounter regularly is important for understanding possible
related effects.As Mayes and Valentine (1979) described, next to parents,
mass media forms such as television.</p></div>
            
            </div>
        </content>
    )
}

export default Content
