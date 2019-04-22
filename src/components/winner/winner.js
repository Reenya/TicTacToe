import React from "react";

export default class Winner extends React.Component{
    render() {
        const {winner} = this.props;
        const message = 'You are win!'+winner;
        return(
            <div className="">
                <div className="info winner">
                    <div className="info__block">
                        <div className="info__title">{message}</div>
                        <div className="info__content"><button className="winner__button info__button-restart">
                            continue
                        </button></div>
                    </div>
                </div>



            </div>
        )
    }
}