import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails'
import ApprovalCard from './ApprovalCard'
import faker from 'faker';

const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard >
            <CommentDetails author="ravi" timeAt="Today at 10:24PM" comment="Nice One!" imgSrc={faker.image.animals()} /></ApprovalCard>
            <ApprovalCard >
            <CommentDetails author="raju" timeAt="Today at 08:24PM" comment="Keep it up!" imgSrc={faker.image.animals()} /></ApprovalCard>
            <ApprovalCard >
            <CommentDetails author="ravi" timeAt="Yesterday at 22:24PM" comment="bahut sahi tha re baba!" imgSrc={faker.image.animals()} /></ApprovalCard>
        </div>
        
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));

