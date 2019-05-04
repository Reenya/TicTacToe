import React from "react";
import {ButtonContinue} from "../buttons";

export default class Winner extends React.Component{
    render() {
        const {winner,continueAction} = this.props;
        const message = winner==='player'? 'You are a winner!' : 'You lose. Sorry :(';
        return(
            <div className="">
                <div className="info winner">
                    <div className="info__block">
                        <div className="info__title">{message}</div>
                        <div className="info__content">
                            <ButtonContinue continueAction={continueAction}/>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}