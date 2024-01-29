import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
//import 'animate.css';
//import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    
    const [loopNum, setLoopNum] = useState(0); // Indicates index of which word is being displayed on the screen
    const [isDeleting, setIsDeleting] = useState(false); // Indicates whether the word is being typed out or not
    const toRotate = ["Hi I'm Navid", " I'm a Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); //Amount of time between each letter being typed
    const period = 2000; //Amount of time to transition between words

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } 
        else if(isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        } 
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`>_`}<span className="wrap">{text}</span></h1>
                        <p>Whether it's building an app or playing intramural basketball, I'm always finding myself pushing through one challenge after another</p>
                        <button onClick={() => console.log('connect')}>Let's Connect!<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}