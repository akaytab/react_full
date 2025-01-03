function customRender (reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.innerChild;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    for (let prop in reactPops.props) {
        if (prop === 'innerChild') continue;
        domElement.setAttribute(prop , reactPops.props[prop])
    }

    container.appendChild(domElement);
}

const reactPops ={
    type:'a',
    props:{
        href:'http://google.com',
        target: '_blank',
    },
    innerChild: 'click me to open'
}

const custom =document.querySelector('#root')

customRender(reactPops,custom)