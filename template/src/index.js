import React from 'react';
import style from './style.module.scss';

const <%=templateLibs.camelCase(name)%> = ()=>{
    return <span style={style['tips']}>我是一个初始化组件</span>
};

export default <%=templateLibs.camelCase(name)%>;
