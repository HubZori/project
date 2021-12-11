import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    statusInputRef= React.createRef();
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditeMode = () => {
        this.setState( {
            editMode: true
        });
    }

    deaktivateEditeMode = () => {
        this.setState( {
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState( {
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status ) {
            this.setState({
                status: this.props.status
            });
        }
        console.log("componentDidUpdate")
    }

    render() {
        console.log("render")
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditeMode } > {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deaktivateEditeMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;