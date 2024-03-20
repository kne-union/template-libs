const {default:<%=templateLibs.camelCase(name)%>} = name;

const BaseExample = ()=>{
    return <div>
        <<%=templateLibs.camelCase(name)%> />
    </div>;
};

render(<BaseExample />);
