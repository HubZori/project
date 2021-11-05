import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditeMode = () => {
        console.log('this:', this)
        this.setState( {
            editMode: true
        });
    }

    deaktivateEditeMode = () => {
        this.setState( {
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditeMode } > {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deaktivateEditeMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;