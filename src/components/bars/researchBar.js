import React, { Component } from 'react';

class ResearchBar extends Component {
    //props ==> onSearch et placeholder
    state = {valueToSearch: ''};


    onInputChange(e) {
        let newInputValue = e.target.value;
        this.setState({valueToSearch: newInputValue});
        this.sendValueSearchedToParent(newInputValue);
    }

    sendValueSearchedToParent(value = this.state.valueToSearch) {
        this.props.onSearch(value);
    }

    render() {
        return <div style={{
            backgroundColor: 'var(--background-grey)',
            padding: '5px 20px',
        }}>

            <div style={{
                borderRadius: '5px',
                display: 'flex',
            }}>
                <input style={{flex: 1}} placeholder={this.props.placeholder || ''}
                       onChange={e => this.onInputChange(e)}/>
                <span style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    padding: '5px',
                }}
                      onClick={() => this.sendValueSearchedToParent()}>Search</span>
            </div>
        </div>;
    }
};

export default ResearchBar;