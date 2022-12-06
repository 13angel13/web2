import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            date: props.date
        }
    }

    componentDidMount(){
        console.log(123);
        this.timerId = setInterval(()=>{
            this.tick();
        }, 
        1000);

    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        const{date}=this.props;
        return <div>
             {date.toLocaleTimeString}
         </div>;
    }

}
export default Clock;