import React from "react";
import { useDispatch } from "react-redux";
import { dashboardActions } from "../store/dashboard";

const BreakOptions = () => {
    const dispatch = useDispatch();

    const returnToDateTime = () => {
        dispatch(dashboardActions.setDateTimeConfirmed(false))
    }

    const confirmBreak = () => {
        dispatch(dashboardActions.setTypeDurationConfirmed(true))
    }

    return (
        <section className="breakOpt">
            <div className="breakOpt__typeDuration">
                <h1 className="breakOpt__header">
                    You are scheduling a break at 10:00 AM !
                </h1>
                {/* Type */}
                <div className="breakOpt__wrapper">
                    <div className="breakOpt__typeDuration-type">
                        <h1 className="breakOpt__typeDuration-typeHeader">
                            What would you like to do during your break?
                        </h1>
                        <button className="breakOpt__typeDuration-typeBtn">
                            Water time
                        </button>
                        <button className="breakOpt__typeDuration-typeBtn">
                            Coffee Time
                        </button>
                        <button className="breakOpt__typeDuration-typeBtn">
                            Stretching time
                        </button>
                        <button className="breakOpt__typeDuration-typeBtn">
                            Nap time
                        </button>
                        <button className="breakOpt__typeDuration-typeBtn">
                            <span>Customize your break</span> time
                        </button>
                    </div>
                    {/* Time */}
                    <div className="breakOpt__typeDuration-time">
                        <h1 className="breakOpt__typeDuration-timeHeader">
                            How long would you like to take a break?
                        </h1>
                        <button className="breakOpt__typeDuration-timeBtn">
                            30 sec
                        </button>
                        <button className="breakOpt__typeDuration-timeBtn">
                            2 mins
                        </button>
                        <button className="breakOpt__typeDuration-timeBtn">
                            5 mins
                        </button>
                        <button className="breakOpt__typeDuration-timeBtn">
                            10 mins
                        </button>
                        <button className="breakOpt__typeDuration-timeBtn">
                            <span contentEditable className="breakOpt__typeDuration-customTime"></span> mins
                        </button>
                    </div>
                </div>

                <div className="breakOpt__actionBtn">
                    <button className="breakOpt__returnBtn" onClick={returnToDateTime}>Return</button>
                    <button className="breakOpt__confirmBtn" onClick={confirmBreak}>Confirm</button>
                </div>
            </div>
        </section>
    );
};

export default BreakOptions;
