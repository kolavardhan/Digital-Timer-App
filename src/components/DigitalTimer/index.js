import { Component } from "react";
import './index.css'

class DigitalTimer extends Component {
    state = {
        time: 25 * 60,
        isStarted: false
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    startBtn = () => {
        const {isStarted} = this.state
        if (isStarted) {
            clearInterval(this.timerId)
            this.setState({isStarted: false})
        }
        else {
            this.timerId = setInterval(this.tick, 1000)
            this.setState({isStarted: true})
        }
    }

    tick = () => {
        this.setState((prevState) => {
            if (prevState.time <= 1) {
                clearInterval(this.timerId)
                return {isStarted: false, time: 0}
            }
            return {time: prevState.time - 1}
        })
    }
    
    resetBtn = () => {
        clearInterval(this.timerId)
        this.setState({time: 25 * 60, isStarted: false})
    }

    addTime = () => {
        const {isStarted} = this.state
        if (!isStarted) {
            this.setState((prevState) => ({
                time: prevState.time + 60
            }))
        }
    }

    reduceTime = () => {
        const {isStarted, time} = this.state
        if (!isStarted && time > 60) {
            this.setState((prevState) => ({
                time: prevState.time - 60
            }))
        }  
    }

    formatTime = () => {
        const {time} = this.state
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }
    render() {
        const {isStarted} = this.state
        const statusText = isStarted ? 'Running': 'Paused'
        const startPauseText = isStarted ? "Pause": "Start"
        const startPauseIconUrl = isStarted ? "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png": "https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        const startPauseIconAlt = isStarted ? "pause icon" : "play icon"
        return <div className="digital-timer-bg">
            <div className="dt-card">
                <h1 className="dtc-title">Digital Timer</h1>
                <div className="dtc-box">
                    <div className="left-section">
                        <div className="timer-box">
                            <p className="time-text">{this.formatTime()}</p>
                            <p className="stauts-text">{statusText}</p>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="start-pause-reset-box">
                            <div className="start-pause-box">
                                <button type="button" className="timer-btns" onClick={this.startBtn}>
                                <img src={startPauseIconUrl} alt={startPauseIconAlt} height={"30px"}/>
                            </button>
                            <p className="btn-align-text">{startPauseText}</p>
                            </div>
                            <div className="reset-box">
                                <button type="button" className="timer-btns" onClick={this.resetBtn}>
                                <img src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" alt="reset icon" height={"30px"}/>
                            </button>
                            <p className="btn-align-text">Reset</p>
                            </div>
                        </div>
                        <p className="rs-text">Set Timer Limit</p>
                        <div className="add-minus-timeLimit-box">
                            <button type="button" className="am-btns" onClick={this.reduceTime}>-</button>
                            <div className="time-box">{Math.floor(this.state.time / 60)}</div>
                            <button type="button" className="am-btns" onClick={this.addTime}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default DigitalTimer