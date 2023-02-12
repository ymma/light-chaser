import React, {Component} from 'react';
import {Radio} from "antd";
import './style/LcRadio.less';
import {RadioGroupProps, RadioProps} from "antd/lib/radio/interface";

class LcRadio extends Component<RadioProps & RadioGroupProps & React.RefAttributes<HTMLElement>> {
    render() {
        const {style} = this.props;
        return (
            <Radio.Group defaultValue={this.props.defaultValue} style={style} className={'lc-radio'}>
                {this.props.children}
            </Radio.Group>
        );
    }
}

export default LcRadio;