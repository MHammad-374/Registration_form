import React, { useState } from 'react'


function Message({ showMessage, success, message }) {


    return (
        <div className="messsage-container">
            {/* <button onClick={handleMessage} className="show-message-btn">
                Show Message
            </button> */}
            {showMessage && (
                <div className={`message border-4 border-transparent ${success ? "border-t-emerald-600 bg-emerald-100": "border-t-red-600 bg-red-100"}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default Message
