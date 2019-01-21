import React, {Component} from 'react';


var textVisible = "";

class Alert extends Component{
    
    close_alert(){
        textVisible = "alert alert-warning invisible alert-dismissible fade show";
    }

    render(){
        if(this.props.show === true){
            textVisible = "alert alert-warning alert-dismissible fade show";
            
        }else{            
            textVisible = "alert alert-warning invisible alert-dismissible fade show";
        }
        return(
                <div className = {textVisible} role='alert'>
                    {this.props.text_alert}
                    {/* <button type='button' className='close' data-dismiss='alert' arial-label='Close' onClick={this.props.close}> */}
                    <button type='button' className='close' arial-label='Close' onClick={this.props.close}>
                        <span aria-hidden = 'true'>&times;</span>
                    </button>
                </div>
        
        );
    }
    
}

export default Alert;