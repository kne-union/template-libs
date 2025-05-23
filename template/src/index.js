import React from 'react';
import zhCn from './locale/zh-CN';
import enUS from './locale/en-US';
import { createWithIntlProvider, useIntl, localeLoader } from '@kne/react-intl';
import style from './style.module.scss';

localeLoader('en-US', enUS, <%=name%>);

const <%=templateLibs.camelCase(name)%> = createWithIntlProvider('zh-CN',
  zhCn,
  <%=name%>)(()=>{
    const { formatMessage } = useIntl();
    return <span className={style['tips']}>我是一个初始化组件</span>
});

export default <%=templateLibs.camelCase(name)%>;
