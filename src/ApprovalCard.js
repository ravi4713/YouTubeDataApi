import React from 'react';

const ApprovalCard = (pros) =>{
    console.log(pros)
    return (
        <div className="ui card">
            <div className="content">{pros.children}</div>
            <div className="extra content">
                <div className='ni two buttons'>
                    <div className='ui basic green button'>Approce</div>
                    <div className='ui basic red button'>Rejetc</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;