function indentRight() {

    const { standards } = this.state;
    const elementsToIndent = [];

    for (var i=currentNodeIndex+1; i< standards.length; i++) {
        if (standards[i].indentation > standards[currentNodeIndex]) {
            standards[i].indent++
        } else {
            break;
        }
    }

    this.setState({
        standards: standards
    })
}

function indentLeft() {

    const { standards } = this.state;
    const elementsToIndent = [];

    for (var i=currentNodeIndex+1; i< standards.length; i++) {
        if (standards[i].indentation > standards[currentNodeIndex]) {
            standards[i].indent--
        } else {
            break;
        }
    }

    this.setState({
        standards: standards
    })
}