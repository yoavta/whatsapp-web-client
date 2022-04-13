import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import React, {useEffect, useRef, useState} from "react";
import ServiceServer from "../server-service";

function SendVoice(props) {


    useEffect(() => {

        props.mediaPrev != null && props.mediaChanged()},[props.mediaPrev])

    const [stream, setStream] = useState({
    access: false,
    recorder: null,
    error: ""
  });

  const [recording, setRecording] = useState({
    active: false,
    available: false,
    url: ""
  });

  const chunks = useRef([]);

  function getAccess() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((mic) => {
        let mediaRecorder;

        try {
          mediaRecorder = new MediaRecorder(mic, {
            mimeType: "audio/webm"
          });
        } catch (err) {
          console.log(err);
        }

        const track = mediaRecorder.stream.getTracks()[0];
        track.onended = () => console.log("ended");

        mediaRecorder.onstart = function () {
          setRecording({
            active: true,
            available: false,
            url: ""
          });
        };

        mediaRecorder.ondataavailable = function (e) {
          console.log("data available");
          chunks.current.push(e.data);
        };

        mediaRecorder.onstop = async function () {
          console.log("stopped");

          const url = URL.createObjectURL(chunks.current[0]);
          props.setMediaPrev(url);
          chunks.current = [];

          setRecording({
            active: false,
            available: true,
            url
          });
        };

        setStream({
          ...stream,
          access: true,
          recorder: mediaRecorder
        });
      })
      .catch((error) => {
        console.log(error);
        setStream({ ...stream, error });
      });
  }

  return (

    <Container >
      {stream.access ? (
        <div className="audio-container">
          <Button
            className={recording.active ? "active" : null}
            onClick={() => !recording.active && stream.recorder.start()}
          >
            Start Recording
          </Button>

          <Button onClick={() => {stream.recorder.stop(); }}>Stop Recording</Button>


          {recording.available && <audio controls src={recording.url} />}
        </div>
      ) : (
        <Button onClick={getAccess}>Get Mic Access</Button>
      )}
    </Container>
  );



}

export default SendVoice;