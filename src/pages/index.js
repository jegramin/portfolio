import React from 'react'
import Link from 'gatsby-link'
// import { runInContext } from 'vm';
import styles from "./about-css-modules.module.css"



class Header extends React.Component{
  render(){
    return(
      <div className={styles.header}>
        <Link to="#contactMe" className={styles.contactButton}>Contact Me</Link>
        <h2 className={styles.intro}>Hello, My name is Mohammed!</h2>
      </div>
    )
  }
}

class Sidebar extends React.Component{
  constructor(){
    super();
    this.state = {
      isAbout:true
    }
    this.isAbout = this.isAbout.bind(this);
    this.isCv = this.isCv.bind(this)
  }

  isAbout= ()=>{
    this.setState({
      isAbout:true
    })
  }
  isCv= ()=>{
    this.setState({
      isAbout:false
    })
  }
  
  render(){
    return(
      <div className={styles.sideBar}>
          <h1 className={styles.web}>Web Developer</h1>

          <div className={styles.buttons}>
            {!this.state.isAbout && <button className={styles.button} onClick={this.isAbout}>About Me</button>}
            {this.state.isAbout &&<button className={styles.button} onClick={this.isCv}>My CV</button>}
          </div>
          <AboutMe which={this.state.isAbout}/>
      </div>
    )
  }
}

class AboutMe extends React.Component{
  render(){
    if(this.props.which){
      return(
        <div className={styles.aboutMeButton}>
          <h3 className={styles.aboutMe} >About Me</h3>
          <p className={styles.aboutMePara}><br></br>My name is Mohammed, I live in Erbil. <br></br>I am intrested in computer seince and I am now a Web Developer!</p>
        </div>
      )
    }else{
      return(
        <div className={styles.aboutMeButton}>
          <h3 className={styles.cvHeader}>My CV</h3>
          <ul className={styles.cvUl} >
            <li>First Name: Mohammed</li>
            <li>Last Name: Ameen</li>
            <li>Age: 22</li>
            <li>Current State: Student</li>
            <li>Languages I Speak: <ul><li>English</li><li>Kurdish (mother language)</li></ul></li>
            
          </ul>
        </div>
      )
    }
  }
}

class ContactMe extends React.Component{
  render(){
    
    return(
      <div id={'contactMe'} className={styles.contactBar}>
        <div className={styles.contactMeWrapper}>
          <h3>Contact Me</h3>
          <ul>
            <li>Email: jegroamin@gmail.com</li>
            <li>Tel: +964 750 712 3951</li>
            <li>Skype: jegr_amin</li>
            <li><a href={'https://github.com/jegramin'} className={styles.a} >GitHub</a></li>
          </ul>
          
        </div>
      </div>
    )
  }
}

class Samples extends React.Component{
  constructor(){
    super();
    this.state = {
      pictures: ["https://www.burness.com/wp-content/uploads/2016/03/Web-design.png",
                 'https://static1.squarespace.com/static/5538aa65e4b0ca81a8938695/5589d6b5e4b0a7d87c0a62d5/5589d6c9e4b09ef3bcbca30a/1435096778695/squarespace-bedford.png',
                 'https://getflywheel.com/wp-content/uploads/2017/05/animal.png',
                 'https://cdn.acodez.in/wp-content/uploads/2018/01/Motion-UI-in-websites.png'
      ],
      index: 0
    }
  }
  next = ()=>{
    if(this.state.index < 3){
      this.setState({
        index: this.state.index +1
      })
    }else{
      this.setState({
        index: 0
      })
    }
  }
  previous = ()=>{
    if(this.state.index > 0){
      this.setState({
        index: this.state.index -1
      })
    }else{
      this.setState({
        index: 3
      })
    }
  }
  
  render(){
    return(
      <div>
        <h2 className={styles.recents}>My recent works..</h2>
        <div className={styles.imgContainer}>
        <img src={this.state.pictures[this.state.index]} style={{
          width: '100%',
          height: '100%'
        }}></img>
        <button onClick={this.previous} className={styles.previous}>Previous</button>
        <button onClick={this.next} className={styles.next}>Next</button>
        </div>
      </div>
    )
  }
}

const IndexPage = () => (
  <div>
    <Header />
    <Sidebar />
    <Samples />
    <ContactMe />
  </div>
)

export default IndexPage


