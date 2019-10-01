import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        // <div className="list-item">
        //     <input type="text" value={title} readOnly={true} />
        // </div>
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input Title" />
            </div>

            <div className="actions" onClick={event => event.stopPropogation()}>
                {state !== 'TEST_ARCHIVED' && (
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func
}