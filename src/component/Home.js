import React from 'react';
import PasswordManager from "../logic/PasswordManager";
import ShareManager from "../logic/ShareManager";

export default class Home extends React.Component {

    state = {
        password: null,
        shareURL: null,
        copyTextPass: "Copy to Clipboard",
        copyTextLink: "Copy to Clipboard"
    };

    displayPass = () => {
        if (this.state.password) return this.state.password;
        if (this.props.match.params.passcode) {
            return this.setState({ password: ShareManager.getPass(this.props.match.params.passcode) });
        } else {
            return this.setState({ password: PasswordManager.generate(true) });
        }
    };

    displayLink = () => {
        if (this.state.shareURL) return this.state.shareURL;
        if (this.state.password) {
            let link = window.location.origin.toString() + ShareManager.getLink(this.state.password);
            this.setState({ shareURL: link });
            return link;
        }
    };

    render() {
        return (
            <div className="Home container">
                <h1 className="topic">Generate a Secure Password with a Sharable Link.</h1>
                <h1 className="display pass">{this.displayPass()}</h1>
                <p onClick={() => { this.copy(this.state.password) }} className="copy-clipboard">{this.state.copyTextPass}</p>
                <div className="col-sm-12 col-md-8 offset-md-2">
                    <button className="buttonmain" onClick={() => {this.handleClickSecure()}}>Secure</button>
                    <button className="buttonmain" onClick={() => {this.handleClickUltra()}}>Super</button>
                </div>
                <h2 className="display link">{this.displayLink()}</h2>
                <p onClick={() => { this.copy(this.state.shareURL) }} className="copy-clipboard">{this.state.copyTextLink}</p>
            </div>
        );
    }

    copy = (value) => {
        let input = document.createElement('input');
        input.setAttribute('value', value);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        if (value === this.state.password) {
            this.setState({ copyTextPass: "Copied!"});
            setTimeout(
                function() {
                    this.setState({ copyTextPass: "Copy to Clipboard"});
                }.bind(this),
                1000
            );
        } else {
            this.setState({ copyTextLink: "Copied!"});
            setTimeout(
                function() {
                    this.setState({ copyTextLink: "Copy to Clipboard"});
                }.bind(this),
                1000
            );
        }
    };

    handleClickUltra = () => {
        let password = PasswordManager.generate(true);
        this.setState({ password: password });
        this.setState({ shareURL: window.location.origin.toString() + ShareManager.getLink(password) });
    };

    handleClickSecure = () => {
        let password = PasswordManager.generate(false);
        this.setState({ password: password });
        this.setState({ shareURL: window.location.origin.toString() + ShareManager.getLink(password) });
    };

}
