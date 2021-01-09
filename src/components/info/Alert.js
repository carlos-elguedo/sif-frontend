import React, {Component} from 'react';
import Alert from 'emerald-ui/lib/Alert';
import Button from "emerald-ui/lib/Button";
class AlertInfo extends Component{

    

    render(){
        let type_Message = this.props.type;
        let close = this.props.close;
        let text_alert = this.props.text_alert;
        let show = this.props.show? "flex":"none";
        let icon = "", color = "";

        switch(type_Message){
            case "danger":
                icon = "info_outline";
                color = "danger"
                break;
            case "warning":
                icon = "warning";
                color = "warning"
                break;
            case "success":
                icon = "check";
                color = "success"
                break;
            default:
                icon = "info_outline";
                color = "info"
        }
         
        return(
            <Alert style={{ display: show }} color={color}>
                <div>
                    <i className="material-icons" style={{ fontSize: '20px' }}>
                    {icon}
                    </i>
                    {text_alert}
                </div>
                <div className="btn-toolbar">
                    <Button color={color} onClick={close} >Cerrar</Button>
                </div>
            </Alert>
        )
    }
    
}

export default AlertInfo;