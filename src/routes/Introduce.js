import React from 'react'
import TrackVisibility  from 'react-on-screen';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import 'animate.css';


const Introduce = () => {

    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const [index, setIndex] = useState(1);
    const toRotate = ["Backend Developer", "NodeJS Developer", "Python Developer"];
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <TrackVisibility>
            {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h1>{`Hi! I'm Rıfat`} <span className="txt-rotate" dataPeriod={delta} data-rotate=' [ "Backend Developer", "NodeJS Developer", "Python Developer" ];'><span className="wrap">{text}</span></span></h1>
                    <p>Merhaba Ben Rıfat Dinç, Yazılım ve Network Alanında kendimi geliştiriyorum. Burada bildiklerimi unutmamak için not defteri gibi kullanıp ve sizlerle paylaşıyorum...</p>
                    <button onClick={() => <Link to='/projects'></Link>}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
        </TrackVisibility>
    )
}

export default Introduce