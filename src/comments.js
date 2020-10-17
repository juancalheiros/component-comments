import React from 'react'


const Comments = (props) => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a className="avatar" href="/" >
                    <img alt="avatar" src={props.image} />
                </a>
                <div className="content">
                    <a className="author" href="/">
                        {props.name}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {props.weekday}
                            {props.hour}
                        </span>
                    </div>
                    <div className="text">
                        {props.mensage}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments