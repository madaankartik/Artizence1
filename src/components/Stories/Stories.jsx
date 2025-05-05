import React from 'react'
import BlackPerson from "../../assets/BlackPerson.png"
import "./Stories.css"

const Stories = () => {
  return (
    <div className='ALLPAGES'>
    <div className="scroll-wrapper">
      <div className="scroll-blur-right"></div>
      <div className="scroll-blur-left"></div>
        <div className="Teacher_Success_Story">
          <h1 style={{color:'white',fontWeight:"500",fontSize:"30px"}}>Teacher Success Stories</h1>
          <p>Discover how educators around the world are transforming their classrooms with YoLearn.</p>

          <div className="Teacher_About">
            <div className='Photo-description'>
              <div className='Photo'>
                <img src={BlackPerson} alt="Teacher 1" />
                <div className='desc'>
                  <p1>Mr. David Ncube</p1>
                  <z>CAPS Curriculum</z>
                  <p>Middle School Teacher — South Africa</p>
                </div>
              </div>
              <div className='description'>
                <p>"YoLearn.ai's AI tutor supports my teaching by offering additional explanations and practice for students, enhancing their understanding."</p>
              </div>
            </div>
            <div className='Photo-description'>
              <div className='Photo'>
                <img src={BlackPerson} alt="Teacher 1" />
                <div className='desc'>
                  <p>Mr. David Ncube</p>
                  <z>CAPS Curriculum</z>
                  <p>Middle School Teacher — South Africa</p>
                </div>
              </div>
              <div className='description'>
                <p>"YoLearn.ai's AI tutor supports my teaching by offering additional explanations and practice for students, enhancing their understanding."</p>
              </div>
            </div>
            <div className='Photo-description'>
              <div className='Photo'>
                <img src={BlackPerson} alt="Teacher 1" />
                <div className='desc'>
                  <p>Mr. David Ncube</p>
                  <z>CAPS Curriculum</z>
                  <p>Middle School Teacher — South Africa</p>
                </div>
              </div>
              <div className='description'>
                <p>"YoLearn.ai's AI tutor supports my teaching by offering additional explanations and practice for students, enhancing their understanding."</p>
              </div>
            </div>
            <div className='Photo-description'>
              <div className='Photo'>
                <img src={BlackPerson} alt="Teacher 1" />
                <div className='desc'>
                  <p>Mr. David Ncube</p>
                  <z>CAPS Curriculum</z>
                  <p>Middle School Teacher — South Africa</p>
                </div>
              </div>
              <div className='description'>
                <p>"YoLearn.ai's AI tutor supports my teaching by offering additional explanations and practice for students, enhancing their understanding."</p>
              </div>
            </div>
            <div className='Photo-description'>
              <div className='Photo'>
                <img src={BlackPerson} alt="Teacher 1" />
                <div className='desc'>
                  <p>Mr. David Ncube</p>
                  <z>CAPS Curriculum</z>
                  <p>Middle School Teacher — South Africa</p>
                </div>
              </div>
              <div className='description'>
                <p>"YoLearn.ai's AI tutor supports my teaching by offering additional explanations and practice for students, enhancing their understanding."</p>
              </div>
            </div>
            <div className='Photo-description'>
              <div className='Photo'>
                <img src={BlackPerson} alt="Teacher 1" />
                <div className='desc'>
                  <p>Mr. David Ncube</p>
                  <z>CAPS Curriculum</z>
                  <p>Middle School Teacher — South Africa</p>
                </div>
              </div>
              <div className='description' >
                <p>"YoLearn.ai's AI tutor supports my teaching by offering additional explanations and practice for students, enhancing their understanding."</p>
              </div>
            </div>
          </div>


          <div className='under_description'>
          <h1 style={{color:'white',fontWeight:"500",fontSize:"30px"}}>What We’ve Achieved Together</h1>
          <div className='boxes6'>
            <div className='desc2'>
              <h1>240,000+</h1>
              <p>Lessons Created</p>
            </div>
            <div className='desc2'>
              <h1>12,00,000+</h1>
              <p>Teacher Hours Saved</p>
            </div>
            <div className='desc2'>
              <h1>3,500+</h1>
              <p>Schools Onboarded</p>
            </div>
            <div className='desc2'>
              <h1>52,000+</h1>
              <p>AI Companions Deployed</p>
            </div>
            <div className='desc2'>
              <h1>95%</h1>
              <p>Academic Improvement</p>
            </div>
            <div className='desc2'>
              <h1>93%</h1>
              <p>Increased Engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Stories
