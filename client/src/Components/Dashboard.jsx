import React from 'react'

function Dashboard() {
    return (
        <>
            <Fragment>
                <div className="welnote">
                    <h3>Welcome <uname /></h3>
                </div>
                <div className="workarea">
                    <div className="textbox">
                    </div>
                    <input type="submit" value="Sumbit" />
                </div>
                <div className="rightone">
                    <div className="textbox">
                    </div>
                    <input type="button" value="reset" />
                </div>
            </Fragment>
        </>
    )
}

export default Dashboard