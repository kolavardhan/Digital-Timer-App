import { Component } from "react";
import './index.css'

class DigitalTimer extends Component {
    render() {
        return <div className="digital-timer-bg">
            <div className="dt-card">
                <h1 className="dtc-title">Digital Timer</h1>
                <div className="dtc-box">
                    <div className="left-section">
                        <div className="timer-box">
                            <p className="time-text">25:00</p>
                            <p className="stauts-text">Paused</p>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="start-pause-reset-box">
                            <div className="start-pause-box">
                                <button type="button" className="timer-btns">
                                <img src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png" alt="play icon" height={"30px"}/>
                            </button>
                            <p className="btn-align-text">Start</p>
                            </div>
                            <div className="reset-box">
                                <button type="button" className="timer-btns">
                                <img src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" alt="reset icon" height={"30px"}/>
                            </button>
                            <p className="btn-align-text">Reset</p>
                            </div>
                        </div>
                        <p className="rs-text">Set Timer Limit</p>
                        <div className="add-minus-timeLimit-box">
                            <button type="button" className="am-btns">-</button>
                            <div className="time-box">25</div>
                            <button type="button" className="am-btns">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default DigitalTimer