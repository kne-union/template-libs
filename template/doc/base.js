const {default:<%=templateLibs.camelCase(name)%>} = _<%=templateLibs.camelCase(name)%>;

const BaseExample = ()=>{
    return <div>
        <<%=templateLibs.camelCase(name)%> />
    </div>;
};

render(<BaseExample />);
