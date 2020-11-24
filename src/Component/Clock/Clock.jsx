import React from 'react'; 

class Clock extends React.Component { 

    constructor(props) 
    { 
        super(props); 
        this.state = { 
            time : new Date(),
            showComponent: true
        }
    } 
  
    // As soon as the Clock is mounted. 
    // Start the interval "timer". 
    // Call tick() every second. 
    componentDidMount() 
    { 
        setTimeout(() =>{
            this.setState({
                showComponent: false
            })
        }, 10000)
        this.timer = setInterval( 
            () => this.tick(), 
            1000); 
    } 
  
    // Before unmounting the Clock, 
    // Clear the interval "Timer" 
    // This step is a memory efficient step. 
    componentWillUnmount() 
    { 
        clearInterval(this.timer); 
    } 
  
    // This function updates the state, 
    // invokes re-render at each second. 
    tick() 
    { 
        this.setState({ 
            time : new Date() 
        }); 
    } 
  
    render() 
    { 
        return ( 
            <div>{
                this.state.showComponent
                ?
                <h5 className="card-title text-white"> Waktu Hari ini{ this.props.title } </h5>
                :null
                }
            <h5 className="card-title text-white">{this.state.time.toLocaleTimeString()}</h5>
        </div> 
    ); 
  } 
} 
  


export default Clock